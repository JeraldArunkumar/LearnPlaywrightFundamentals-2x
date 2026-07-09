import{test,expect}from'@playwright/test';
test('basic test',async({page})=>
    {await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    })
    
import { test, expect } from '@playwright/test';

test("Verify the title", async ({ page }) => {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");
    // page = fixture (injected by Playwright)

});