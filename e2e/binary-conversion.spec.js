import { expect, test } from '@playwright/test';

// @ac:BIN-OPR:AC-001
test('converts the current calculator result and shows it beside the display', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.type('12+3');
  await page.keyboard.press('Enter');

  const result = page.locator('.calculator-display div.font-bold');
  await expect(result).toHaveText('15');
  await page.getByRole('button', { name: 'Convert to binary' }).click();

  const binaryRepresentation = page.getByRole('status', { name: 'Binary representation' });
  await expect(binaryRepresentation).toHaveText('Binary: 1111');
  await expect(result).toHaveText('15');
  await expect(page.locator('.calculator-display').getByRole('status')).toBeVisible();

  await page.screenshot({ path: 'test-results/binary-conversion.png', fullPage: true });
});
