import { expect, test } from '@playwright/test'
import { MemberLogin } from '../pom/live-exchange-login-and-register-member.page'
import { LiveExchangePage } from '../pom/live-exchange.page';

test.describe('Member Login', () => {
    let liveExchangePage: LiveExchangePage;
    let memberLogin: MemberLogin;

    test.beforeEach(async ({ page }) => {
        liveExchangePage = new LiveExchangePage(page);
        memberLogin = new MemberLogin(page);

        await liveExchangePage.goto();
    })

    test('Login from live exchange to IPO system', async ({ page }) => {
        await memberLogin.gotoLogin();
        await memberLogin.checkUrlLogin();
        await memberLogin.login();
        await liveExchangePage.navigateToLiveExchange();
        await expect(page.locator('.icon-authen')).toBeVisible();
        await page.getByText('LiVE Exchange', { exact: true }).first().click();
        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('banner').getByText('ระบบ IPO').hover(),
            page.getByRole('banner').getByText('ระบบ IPO').click(), 
        ]);
        await expect(newPage).not.toBe(null);
    })

})