import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Valid login @sanity', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('tomsmith', 'SuperSecretPassword!');

  await expect(login.message).toContainText('You logged into a secure area!');
});

test('Invalid login @regression', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('wrong', 'wrong');

  await expect(login.message).toContainText('Your username is invalid!');
});

