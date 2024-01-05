import { expect, test } from '@playwright/test'
import { MemberLogin } from '../pom/live-exchange-login-and-register-member.page'
import { LiveExchangePage } from '../pom/live-exchange.page';

test.describe('Member Register', () => {
    let liveExchangePage: LiveExchangePage;
    let memberLogin: MemberLogin;

    test.beforeEach(async ({ page }) => {
        liveExchangePage = new LiveExchangePage(page);
        memberLogin = new MemberLogin(page);
    })

    test('register new account for live exchange', async ({ page }) => {
        await memberLogin.gotoRegister();
        await memberLogin.inputRegisterData();
    })

})