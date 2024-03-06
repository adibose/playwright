import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading')).toContainText('Dashboard');
  await page.getByRole('link', { name: 'Performance' }).click();
  await page.locator('.oxd-select-text--after > .oxd-icon').first().click();
  await page.getByText('Account Assistant').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('No Records Found').click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('My Info');
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('img', { name: 'profile picture' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await expect(page.getByRole('heading')).toContainText('Login');

});