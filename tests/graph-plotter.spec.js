import assert from 'node:assert/strict';
import { expect, test } from '@playwright/test';

const equations = ['y = 2*x + 1', 'y = (x - 2) / 2', 'x - y = 0'];

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

async function renderedPinkPixels(canvas) {
  return canvas.evaluate((element) => {
    const context = element.getContext('2d');
    const { data } = context.getImageData(0, 0, element.width, element.height);
    let count = 0;
    for (let index = 0; index < data.length; index += 4) {
      if (data[index] > 150 && data[index + 1] < 130 && data[index + 2] > 90) count += 1;
    }
    return count;
  });
}

test.describe('grapher equation entry', () => {
  // @ac:ARSHY:AC-002
  test('renders the supported explicit and implicit equations', async ({ page }) => {
    const input = await openGrapher(page);
    const canvas = page.locator('canvas');
    for (const equation of equations) {
      await input.fill(equation);
      await expect.poll(() => renderedPinkPixels(canvas)).toBeGreaterThan(100);
      assert.equal(await renderedPinkPixels(canvas) > 100, true, `Expected a plotted curve for ${equation}`);
      await expect(page.getByText('Invalid function syntax')).toHaveCount(0);
    }
  });
});

// @ac:ARSHY:AC-001
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
