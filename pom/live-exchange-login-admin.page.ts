import { Locator, Page, expect } from "@playwright/test";
import { app } from "../fixtures/app";

export class AdminLogin {
    readonly _page: Page;
    readonly _pageUrl: string;
    readonly _inputUsername: Locator;
    readonly _inputPassword: Locator;
    readonly _loginButton: Locator;
    readonly _logoutButton: Locator;

    constructor(page: Page) {
        this._page = page;
        this._pageUrl = `${app.baseUrl}/live-exchange/admin/login`;
        this._inputUsername = page.getByTestId('username');
        this._inputPassword = page.getByTestId('password');
        this._loginButton = page.getByTestId('login-button');
        this._logoutButton = page.getByText('Logout')
    }

    async goto() {
        await this._page.goto(this._pageUrl);
    }

    async checkUrl() {
        await this._page.waitForURL(this._pageUrl);
        await expect(this._page.url()).toEqual(this._pageUrl);
    }

    async login() {
        await this._page.getByTestId('sec-login-checkbox').click();
        await this._inputUsername.fill('nattapol+8@odds.team');
        await this._inputPassword.fill('password');
        await this._loginButton.click();
    }

    async logout() {
        await this._logoutButton.click();
    }

}