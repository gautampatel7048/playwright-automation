import { test, expect } from '@playwright/test';

test('Search test', async ({ page }) => {
  await page.goto('https://example.com');

  console.log('Search test running');

  await expect(page).toHaveTitle(/Example/);
});