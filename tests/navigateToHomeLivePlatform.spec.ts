import { test } from '@playwright/test'
import { LivePlatformPage } from '../pom/live-platform.page'

test.describe('Navigate to Homepage', () => {
    let livePlatformPage: LivePlatformPage;

    test.beforeEach(async ({ page }) => {
        livePlatformPage = new LivePlatformPage(page);
        
        await livePlatformPage.goto();
    })

    test('should navigate to live platform homepage', async ({ page }) => {
        await livePlatformPage.checkUrl();
    })
})