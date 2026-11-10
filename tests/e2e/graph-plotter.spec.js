import { expect, test } from '@playwright/test';

async function hasPinkPixelNear(canvas, x, y, tolerance = 3) {
  return canvas.evaluate(
    (element, point) => {
      const context = element.getContext('2d');
      const scaleX = element.width / element.clientWidth;
      const scaleY = element.height / element.clientHeight;
      const centerX = Math.round(point.x * scaleX);
      const centerY = Math.round(point.y * scaleY);
      for (let dy = -point.tolerance; dy <= point.tolerance; dy++) {
        for (let dx = -point.tolerance; dx <= point.tolerance; dx++) {
          const pixel = context.getImageData(centerX + dx, centerY + dy, 1, 1).data;
          if (pixel[0] > 200 && pixel[1] < 100 && pixel[2] > 100) return true;
        }
      }
      return false;
    },
    { x, y, tolerance }
  );
}

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Grapher' }).click();
});

// @ac:NEW-GRAPH-PLOT:AC-001
test('plots a supplied y=f(x) function', async ({ page }) => {
  await page.getByLabel('Function').fill('x');
  const canvas = page.locator('canvas');
  const bounds = await canvas.boundingBox();

  await expect
    .poll(() => hasPinkPixelNear(canvas, bounds.width / 2 + 40, bounds.height / 2 - 40))
    .toBe(true);
  expect(
    await hasPinkPixelNear(canvas, bounds.width / 2 + 40, bounds.height / 2 - 40)
  ).toBe(true);
});

// @ac:NEW-GRAPH-PLOT:AC-002
test('renders a complete radius-6 circle centered at the origin', async ({ page }) => {
  await page.getByLabel('Plot type').selectOption('circle');
  const canvas = page.locator('canvas');
  const bounds = await canvas.boundingBox();
  const scale = Math.min(bounds.width, bounds.height) / 14;
  const center = { x: bounds.width / 2, y: bounds.height / 2 };
  const perimeterHits = [];

  for (let index = 0; index < 48; index++) {
    const angle = (index * Math.PI * 2) / 48;
    const point = {
      x: center.x + Math.cos(angle) * 6 * scale,
      y: center.y - Math.sin(angle) * 6 * scale,
    };
    await expect
      .poll(() => hasPinkPixelNear(canvas, point.x, point.y, 4))
      .toBe(true);
    perimeterHits.push(await hasPinkPixelNear(canvas, point.x, point.y, 4));
  }
  expect(perimeterHits).toHaveLength(48);
  expect(perimeterHits.every(Boolean)).toBe(true);
});
