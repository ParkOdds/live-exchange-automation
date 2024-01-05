import { Locator, Page, expect } from "@playwright/test";
import { app } from "../fixtures/app";

export class LiveExchangePage {
    readonly _page: Page;
    readonly _pageUrl: string;
    readonly _acceptAnnouncementModal: Locator;
    readonly _liVexLogo: Locator;
    
    constructor(page: Page) {
        this._page = page;
        this._pageUrl = `${app.baseUrl}/live-exchange`;
        this._acceptAnnouncementModal = page.getByTestId('dialog-submit-button');
        this._liVexLogo = page.locator('.wrap-livex-logo');
    }

    async goto() {
        await this._page.goto(this._pageUrl);
    }

    async logout() {
        await this._page.getByRole('link', { name: 'Logout' }).click();
    }

    async navigateToLiveExchange() {
        await this._page.waitForURL(this._pageUrl);
        await expect(this._page.url()).toEqual(this._pageUrl);
        await this._page.getByRole('img', { name: 'livex' }).click();
        await this._page.mouse.wheel(0, -15000);
        await this._acceptAnnouncementModal.hover();
        await this._acceptAnnouncementModal.click();
    }
}