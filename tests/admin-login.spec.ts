import { expect, test } from '@playwright/test'
import { AdminLogin } from '../pom/live-exchange-login-admin.page';

test.describe('Admin login', () => {
    let adminLogin: AdminLogin;

    test.beforeEach(async ({ page }) => {
        adminLogin = new AdminLogin(page);
    })

    test('should navigate to admin approval dashboard', async ({ page }) => {
        await adminLogin.goto();
        await adminLogin.checkUrl();
        await adminLogin.login();
        await adminLogin.logout();
        await adminLogin.checkUrl();
    })
})