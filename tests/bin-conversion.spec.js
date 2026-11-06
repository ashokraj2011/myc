import { test, expect } from '@playwright/test';

const enterValue = async (page, value, negative = false) => {
  for (const character of value) {
    await page.getByRole('button', { name: character, exact: true }).click();
  }
  if (negative) {
    await page.getByRole('button', { name: '±', exact: true }).click();
  }
  await page.keyboard.press('Enter');
  await page.getByRole('button', { name: 'Convert to binary' }).click();
};

const displayedResult = (page) =>
  page.locator('.calculator-display div.font-mono').last();

// @ac:BIN-OPR2:AC-001
test('converts whole and fractional values and captures visual evidence', async ({ page }, testInfo) => {
  await page.goto('/');

  await enterValue(page, '42');
  await expect(displayedResult(page)).toHaveText('101010');
  const wholeNumberScreenshot = await page.locator('.glass-card').screenshot();

  await page.getByRole('button', { name: 'AC', exact: true }).click();
  await enterValue(page, '42', true);
  await expect(displayedResult(page)).toHaveText('-101010');

  await page.getByRole('button', { name: 'AC', exact: true }).click();
  await enterValue(page, '10.29');
  await expect(displayedResult(page)).toHaveText('1010.01');

  await page.getByRole('button', { name: 'AC', exact: true }).click();
  await enterValue(page, '10.29', true);
  await expect(displayedResult(page)).toHaveText('-1010.01');
  const decimalScreenshot = await page.locator('.glass-card').screenshot();

  await page.setContent(`
    <main style="display:grid;grid-template-columns:1fr 1fr;gap:24px;padding:24px;background:#111827">
      <figure style="margin:0"><figcaption style="color:white;font:16px sans-serif;margin-bottom:8px">Whole number: 42 → 101010</figcaption><img alt="Whole-number conversion" style="width:100%" src="data:image/png;base64,${wholeNumberScreenshot.toString('base64')}"></figure>
      <figure style="margin:0"><figcaption style="color:white;font:16px sans-serif;margin-bottom:8px">Decimal: -10.29 → -1010.01</figcaption><img alt="Decimal conversion" style="width:100%" src="data:image/png;base64,${decimalScreenshot.toString('base64')}"></figure>
    </main>
  `);
  await expect(page.getByAltText('Whole-number conversion')).toBeVisible();
  await expect(page.getByAltText('Decimal conversion')).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath('bin-conversion-composite.png'), fullPage: true });
});
