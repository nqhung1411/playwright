import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://backoffice.uat.manabie.io/
  await page.goto('https://backoffice.uat.manabie.io/');
  // Go to https://backoffice.uat.manabie.io/login
  await page.goto('https://backoffice.uat.manabie.io/login');
  // Click [placeholder="Enter\ email"]
  await page.locator('[placeholder="Enter\\ email"]').click();
  // Fill [placeholder="Enter\ email"]
  await page.locator('[placeholder="Enter\\ email"]').fill('thu.vo+uatmanabie@manabie.com');
  // Click [placeholder="Enter\ password"]
  await page.locator('[placeholder="Enter\\ password"]').click();
  // Fill [placeholder="Enter\ password"]
  await page.locator('[placeholder="Enter\\ password"]').fill('#$thu.vo123');
  // Click button:has-text("Sign in")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://backoffice.uat.manabie.io/' }*/),
    page.locator('button:has-text("Sign in")').click()
  ]);
  await new Promise(r => setTimeout(r, 5000));
  // Go to https://backoffice.uat.manabie.io/students_erp
  await page.goto('https://backoffice.uat.manabie.io/students_erp');
  await page.pause();
});