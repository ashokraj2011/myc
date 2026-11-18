import { expect, test } from '@playwright/test';

const inspectGraph = async (canvas) =>
  canvas.evaluate((surface) => {
    const context = surface.getContext('2d');
    const { width, height } = surface;
    const pixels = context.getImageData(0, 0, width, height).data;
    const axisColumns = Array(width).fill(0);
    const axisRows = Array(height).fill(0);
    let minX = width;
    let maxX = -1;
    let minY = height;
    let maxY = -1;
    let circlePixels = 0;
    let functionPixels = 0;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const index = (y * width + x) * 4;
        const red = pixels[index];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];

        if (red > 20 && red < 120 && green > 120 && green < 230 && blue > 180) {
          axisColumns[x]++;
          axisRows[y]++;
        }

        if (red > 130 && green > 80 && green < 180 && blue > 220) {
          minX = Math.min(minX, x);
          maxX = Math.max(maxX, x);
          minY = Math.min(minY, y);
          maxY = Math.max(maxY, y);
          circlePixels++;
        }

        if (red > 180 && green < 130 && blue > 100 && blue < 210) {
          functionPixels++;
        }
      }
    }

    const originX = axisColumns.indexOf(Math.max(...axisColumns));
    const originY = axisRows.indexOf(Math.max(...axisRows));
    const sampleY = Math.floor(height * 0.2);
    const gridLines = [];
    let runStart = null;

    for (let x = 0; x < width; x++) {
      const index = (sampleY * width + x) * 4;
      const red = pixels[index];
      const green = pixels[index + 1];
      const blue = pixels[index + 2];
      const isGridLine =
        red > 10 &&
        red < 60 &&
        green > 15 &&
        green < 70 &&
        blue > 20 &&
        blue < 80 &&
        green - red < 20;

      if (isGridLine && runStart === null) runStart = x;
      if (!isGridLine && runStart !== null) {
        gridLines.push(Math.floor((runStart + x - 1) / 2));
        runStart = null;
      }
    }
    if (runStart !== null) gridLines.push(Math.floor((runStart + width - 1) / 2));

    const spacings = gridLines
      .slice(1)
      .map((x, index) => x - gridLines[index])
      .filter((spacing) => spacing > 2 && spacing < width / 3)
      .sort((left, right) => left - right);
    const unitSpacing = spacings[Math.floor(spacings.length / 2)];

    return {
      originX,
      originY,
      circleCenterX: (minX + maxX) / 2,
      circleCenterY: (minY + maxY) / 2,
      circleRadiusX: (maxX - minX) / 2,
      circleRadiusY: (maxY - minY) / 2,
      circlePixels,
      functionPixels,
      unitSpacing,
    };
  });

// @ac:NEW-GRAPJ:AC-001
test('plots a function and a radius-six circle centered at the origin', async ({ page }) => {
  await page.goto('/');
  await page.locator('.nav-rail-item').filter({ hasText: 'Grapher' }).click();

  const expressionList = page.getByRole('complementary', { name: 'Expression list' });
  const canvas = page.getByRole('img', { name: 'Cartesian graph with labeled x and y axes' });
  await expect(expressionList).toBeVisible();
  await expect(canvas).toBeVisible();
  await expect(page.getByLabel('Expression 1', { exact: true })).toHaveValue('sin(x)');
  await expect(page.getByText('x² + y² = 36')).toBeVisible();

  for (const name of [
    'Add expression',
    'Undo',
    'Redo',
    'Settings',
    'Collapse expression panel',
    'Graph tool',
    'Zoom in',
    'Zoom out',
  ]) {
    await expect(page.getByRole('button', { name }).first()).toBeVisible();
  }

  const geometry = await inspectGraph(canvas);
  expect(geometry.functionPixels).toBeGreaterThan(50);
  expect(geometry.circlePixels).toBeGreaterThan(50);
  expect(geometry.unitSpacing).toBeGreaterThan(0);
  expect(Math.abs(geometry.circleCenterX - geometry.originX) / geometry.unitSpacing).toBeLessThan(
    0.1
  );
  expect(Math.abs(geometry.circleCenterY - geometry.originY) / geometry.unitSpacing).toBeLessThan(
    0.1
  );
  expect(Math.abs(geometry.circleRadiusX / geometry.unitSpacing - 6)).toBeLessThan(0.15);
  expect(Math.abs(geometry.circleRadiusY / geometry.unitSpacing - 6)).toBeLessThan(0.15);

  await page.getByRole('button', { name: 'Add expression' }).first().click();
  await expect(page.getByLabel('Expression 3', { exact: true })).toHaveValue('x');
});
