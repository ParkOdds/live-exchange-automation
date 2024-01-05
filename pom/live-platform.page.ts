import { Page, expect } from "@playwright/test";
import { app } from "../fixtures/app";

export class LivePlatformPage {
    readonly _page: Page;
    readonly _pageUrl: string;
    constructor(page: Page) {
        this._page = page;
        this._pageUrl = `${app.baseUrl}/th/`;
    }

    async goto() {
        await this._page.goto(this._pageUrl);
    }

    async checkUrl() {
        await this._page.waitForURL(this._pageUrl)
        await expect(this._page.url()).toEqual(this._pageUrl)
    }
}