import assert from 'node:assert/strict';
import { expect, test } from '@playwright/test';

const equationCases = [
  { equation: 'y = 2*x + 1', points: [{ x: -0.5, y: 0 }, { x: 0, y: 1 }] },
  { equation: 'y = (x - 2) / 2', points: [{ x: 1, y: -0.5 }, { x: 3, y: 0.5 }] },
  { equation: 'x - y = 0', points: [{ x: -1, y: -1 }, { x: 1, y: 1 }] },
];

const readCircleGeometry = (element) => {
  const context = element.getContext('2d');
  const { data } = context.getImageData(0, 0, element.width, element.height);
  const xs = [];
  const ys = [];
  for (let y = 0; y < element.height; y += 1) {
    for (let x = 0; x < element.width; x += 1) {
      const index = (y * element.width + x) * 4;
      if (data[index] > 150 && data[index + 1] < 130 && data[index + 2] > 90) {
        xs.push(x);
        ys.push(y);
      }
    }
  }
  if (xs.length < 100) return null;

  const rect = element.getBoundingClientRect();
  const scaleX = rect.width / element.width;
  const scaleY = rect.height / element.height;
  const minX = Math.min(...xs) * scaleX;
  const maxX = Math.max(...xs) * scaleX;
  const minY = Math.min(...ys) * scaleY;
  const maxY = Math.max(...ys) * scaleY;
  return {
    centerX: (minX + maxX) / 2,
    centerY: (minY + maxY) / 2,
    radiusX: (maxX - minX) / 2,
    radiusY: (maxY - minY) / 2,
    expectedRadius: 6 * Math.min(rect.width / 14, rect.height / 14),
    width: rect.width,
    height: rect.height,
  };
};

async function openGrapher(page) {
  await page.goto('/');
  await page.getByRole('button', { name: 'Grapher' }).click();
  const equationInput = page.locator('input[type="text"]');
  await expect(equationInput).toBeVisible();
  return equationInput;
}

const readPageDimensions = (page) =>
  page.evaluate(() => {
    const shell = document.querySelector('.app-shell');
    const bounds = shell.getBoundingClientRect();
    return {
      pageWidth: document.documentElement.scrollWidth,
      pageHeight: document.documentElement.scrollHeight,
      shellWidth: bounds.width,
      shellHeight: bounds.height,
    };
  });

async function hasPinkPixelNear(canvas, { x, y }) {
  return canvas.evaluate((element, point) => {
    const ratioX = element.width / element.clientWidth;
    const ratioY = element.height / element.clientHeight;
    const centerX = element.width / 2 + point.x * 40 * ratioX;
    const centerY = element.height / 2 - point.y * 40 * ratioY;
    const radiusX = Math.ceil(4 * ratioX);
    const radiusY = Math.ceil(4 * ratioY);
    const left = Math.max(0, Math.floor(centerX - radiusX));
    const right = Math.min(element.width - 1, Math.ceil(centerX + radiusX));
    const top = Math.max(0, Math.floor(centerY - radiusY));
    const bottom = Math.min(element.height - 1, Math.ceil(centerY + radiusY));
    const context = element.getContext('2d');
    const { data } = context.getImageData(0, 0, element.width, element.height);
    for (let row = 0; row <= bottom - top; row += 1) {
      for (let column = 0; column <= right - left; column += 1) {
        const index = ((top + row) * element.width + left + column) * 4;
        if (data[index] > 150 && data[index + 1] < 130 && data[index + 2] > 90) {
          return true;
        }
      }
    }
    return false;
  }, { x, y });
}

test.describe('grapher equation entry', () => {
  // @clause:ARSHY:REQ-001 verifies explicit and implicit equation plotting.
  // @ac:FIX-ISSUES:AC-001
  test('renders the supported explicit and implicit equations', async ({ page }) => {
    const input = await openGrapher(page);
    const canvas = page.locator('canvas');
    await expect(page.getByText('Invalid function syntax')).toHaveCount(0);
    await expect.poll(() => hasPinkPixelNear(canvas, { x: Math.PI / 2, y: 1 })).toBe(true);

    for (const { equation, points } of equationCases) {
      await input.fill(equation);
      for (const point of points) {
        const expectedPoint = `(${point.x}, ${point.y}) for ${equation}`;
        await expect.poll(() => hasPinkPixelNear(canvas, point)).toBe(true);
        assert.equal(await hasPinkPixelNear(canvas, point), true, `Expected the plotted curve near ${expectedPoint}`);
      }
      await expect(page.getByText('Invalid function syntax')).toHaveCount(0);
    }
  });
});

// @clause:ARSHY:REQ-002 verifies the required radius-6 circle.
test('plots x^2 + y^2 = 36 as a centered radius-6 circle', async ({ page }) => {
  const input = await openGrapher(page);
  await input.fill('x^2 + y^2 = 36');
  const canvas = page.locator('canvas');

  await expect.poll(() => canvas.evaluate(readCircleGeometry)).toBeTruthy();
  const geometry = await canvas.evaluate(readCircleGeometry);

  assert.equal(geometry !== null, true, 'Expected the circle to be rendered on the canvas');
  assert.equal(Math.abs(geometry.centerX - geometry.width / 2) < 5, true);
  assert.equal(Math.abs(geometry.centerY - geometry.height / 2) < 5, true);
  assert.equal(Math.abs(geometry.radiusX - geometry.expectedRadius) < 8, true);
  assert.equal(Math.abs(geometry.radiusY - geometry.expectedRadius) < 8, true);

  expect(Math.abs(geometry.centerX - geometry.width / 2)).toBeLessThan(5);
  expect(Math.abs(geometry.centerY - geometry.height / 2)).toBeLessThan(5);
  expect(Math.abs(geometry.radiusX - geometry.expectedRadius)).toBeLessThan(8);
  expect(Math.abs(geometry.radiusY - geometry.expectedRadius)).toBeLessThan(8);
});

// @ac:FIX-ISSUES:AC-002
test('keeps page dimensions fixed while typing and clicking grapher controls', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  const input = await openGrapher(page);
  await page.locator('.grapher').evaluate((element) => {
    element.getAnimations().forEach((animation) => animation.finish());
  });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });

  const initialDimensions = await readPageDimensions(page);

  await input.fill(`${'x + '.repeat(24)}1`);
  expect(await readPageDimensions(page)).toEqual(initialDimensions);

  await page.getByTitle('Zoom In').click();
  expect(await readPageDimensions(page)).toEqual(initialDimensions);

  await page.getByRole('button', { name: 'sin(x)' }).click();
  expect(await readPageDimensions(page)).toEqual(initialDimensions);
});
