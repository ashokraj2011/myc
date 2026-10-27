import { test, expect } from '@playwright/test';

// @ac:WS-GRAPH:AC-001
test('plots the reference implicit equation on a labeled coordinate grid', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 1000 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Grapher' }).click();

  const equation = page.getByRole('textbox', { name: 'Equation' });
  await equation.fill('x^2 + y^2 = 10');

  const graph = page.getByRole('img', {
    name: 'Coordinate grid with labeled axes and plot of x^2 + y^2 = 10',
  });
  await expect(equation).toHaveValue('x^2 + y^2 = 10');
  await expect(graph).toBeVisible();

  const plottedPixels = await graph.evaluate((canvas) => {
    const { data } = canvas.getContext('2d').getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    );
    let curve = 0;
    let axis = 0;
    let grid = 0;

    for (let pixel = 0; pixel < data.length; pixel += 4) {
      const [red, green, blue] = data.slice(pixel, pixel + 3);
      if (red > 180 && green < 130 && blue > 100) curve++;
      if (red < 100 && green > 100 && blue > 180) axis++;
      if (red > 15 && green > 20 && blue > 25) grid++;
    }

    return { curve, axis, grid };
  });

  expect(plottedPixels.curve).toBeGreaterThan(100);
  expect(plottedPixels.axis).toBeGreaterThan(100);
  expect(plottedPixels.grid).toBeGreaterThan(1000);

  await page.screenshot({
    path: 'singularity/work-items/ws-graph/evidence/graph-tool.png',
    fullPage: true,
  });
});
