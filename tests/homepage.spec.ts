import { test, expect } from '@playwright/test';

test('homepage has correct title and navigation', async ({ page }) => {
  await page.goto('/');

  // Check page title
  await expect(page).toHaveTitle(/Ken Flynn - Data Engineer Portfolio/);

  // Check main heading
  await expect(page.getByRole('heading', { name: /Ken Flynn/i })).toBeVisible();

  // Check navigation links
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
});

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');

  // Navigate to About page
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveURL('/about');
  await expect(page.getByRole('heading', { name: /About Ken Flynn/i })).toBeVisible();

  // Navigate to Projects page
  await page.getByRole('link', { name: 'Projects' }).click();
  await expect(page).toHaveURL('/projects');
  await expect(page.getByRole('heading', { name: /Projects/i })).toBeVisible();

  // Navigate to Contact page
  await page.getByRole('link', { name: 'Contact' }).click();
  await expect(page).toHaveURL('/contact');
  await expect(page.getByRole('heading', { name: /Contact/i })).toBeVisible();
});
