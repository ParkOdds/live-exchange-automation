import { test } from '@playwright/test'
import { LiveExchangePage } from '../pom/live-exchange.page'

test.describe('Navigate to Homepage', () => {
    let liveExchangePage: LiveExchangePage;

    test.beforeEach(async ({ page }) => {
        liveExchangePage = new LiveExchangePage(page);

        await liveExchangePage.goto();
    })

    test('should navigate to live platform liveExchangepage', async ({ page }) => {
        await liveExchangePage.navigateToLiveExchange();
    })
})