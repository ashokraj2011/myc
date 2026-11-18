import { expect, test } from '@playwright/test';

// @ac:NEW-ASH-GRAPH:AC-001
test('plots a circle centered at the origin with radius six', async ({ page }) => {
  await page.goto('/');
  await page.locator('.nav-mobile select').selectOption('grapher');

  const expression = page.getByRole('textbox', { name: 'Graph expression' });
  await expression.fill('x^2 + y^2 = 36');

  const canvas = page.getByTestId('graph-canvas');
  await expect(canvas).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Math keypad' })).toBeVisible();
  await expect(page.getByRole('alert')).toHaveCount(0);

  await expect.poll(() =>
    canvas.evaluate((element) => {
      const context = element.getContext('2d');
      const pixelRatio = window.devicePixelRatio || 1;
      const scale = Number(element.dataset.graphScale);
      const centerX = Number(element.dataset.graphCenterX);
      const centerY = Number(element.dataset.graphCenterY);
      const radius = 6 * scale;

      const hasPinkAt = (x, y) => {
        const pixelX = Math.round(x * pixelRatio);
        const pixelY = Math.round(y * pixelRatio);
        for (let offsetY = -4; offsetY <= 4; offsetY++) {
          for (let offsetX = -4; offsetX <= 4; offsetX++) {
            const sampleX = pixelX + offsetX;
            const sampleY = pixelY + offsetY;
            if (sampleX < 0 || sampleY < 0 || sampleX >= element.width || sampleY >= element.height) continue;
            const [red, green, blue, alpha] = context.getImageData(sampleX, sampleY, 1, 1).data;
            if (red > 180 && green < 150 && blue > 100 && alpha > 0) return true;
          }
        }
        return false;
      };

      const cardinalPoints = [
        [centerX + radius, centerY],
        [centerX - radius, centerY],
        [centerX, centerY + radius],
        [centerX, centerY - radius],
      ];
      return {
        cardinalPointsPlotted: cardinalPoints.every(([x, y]) => hasPinkAt(x, y)),
        originUnplotted: !hasPinkAt(centerX, centerY),
      };
    })
  ).toEqual({ cardinalPointsPlotted: true, originUnplotted: true });
});
