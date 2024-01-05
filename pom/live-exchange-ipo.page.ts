import { Page, expect } from "@playwright/test";
import { app } from "../fixtures/app";

export class IPOPage {
    readonly _page: Page;
    readonly _pageUrl: string;

    constructor(page: Page) {
        this._page = page;
        this._pageUrl = `${app.baseUrl}/live-exchange/new-form/company-security/information`;
    }
    
    async goto() {
        await this._page.goto(this._pageUrl);
    }

}   