import { Locator, Page, expect } from "@playwright/test";
import { app } from "../fixtures/app";

export class MemberLogin {
    readonly _page: Page;
    readonly _loginPageUrl: string;
    readonly _registerPageUrl: string;
    readonly _acceptAnnouncementModal: Locator;
    readonly _liVexLogo: Locator;
    readonly _portalMemberLogin: Locator;
    readonly _inputUsername: Locator;
    readonly _inputPassword: Locator;
    readonly _loginButton: Locator;
    readonly _registerLink: Locator;

    constructor(page: Page) {
        this._page = page;
        this._loginPageUrl = `${app.baseUrl}/live-exchange/login`;
        this._registerPageUrl = `${app.baseUrl}/th/register/`;
        this._acceptAnnouncementModal = page.getByTestId('dialog-submit-button');
        this._liVexLogo = page.locator('.wrap-livex-logo');
        this._portalMemberLogin = page.locator('div').filter({ hasText: /^LiVE Memberสำหรับผู้ประกอบการ$/ }).locator('span').nth(4);
        this._inputUsername = page.locator('div').getByTestId('input-username');
        this._inputPassword = page.locator('div').getByTestId('input-password');
        this._loginButton = page.getByRole('button', { name: 'เข้าสู่ระบบ' });
        this._registerLink = page.getByRole('link', { name: 'สร้างบัญชี' });
    }

    async gotoLogin() {
        await this._page.goto(this._loginPageUrl);
    }

    async checkUrlLogin() {
        await this._page.waitForURL(this._loginPageUrl);
        await expect(this._page.url()).toEqual(this._loginPageUrl);
    }

    async login() {
        await this._portalMemberLogin.click();
        await this._inputUsername.fill('nattapol+100@odds.team');
        await this._inputPassword.fill('Test@1234');
        await this._loginButton.click();
    }

    async gotoRegister() {
        await this._page.goto(this._registerPageUrl);
    }

    async checkUrlRegister() {
        await this._page.waitForURL(this._registerPageUrl);
        await expect(this._page.url()).toEqual(this._registerPageUrl);
    }

    async inputRegisterData() {
        await this._page.getByRole('button', { name: 'ยอมรับ' }).click();
        await this._page.getByPlaceholder('กรุณาระบุชื่อ', { exact: true }).fill('nattapol');
        await this._page.getByPlaceholder('กรุณาระบุนามสกุล').fill('testerja');
        await this._page.getByText('ชาย (Male)').setChecked(true)
        await this._page.getByPlaceholder('email').fill('nattapol+10@odds.team');
        await this._page.getByPlaceholder('กรุณาระบุเบอร์มือถือ').fill('0123456789');
        await this._page.getByPlaceholder('กรุณาระบุ Line ID').fill('nattapol');
        await this._page.getByRole('link', { name: 'ถัดไป' }).click();
        await this._page.getByText('เจ้าของกิจการ').setChecked(true);
        await this._page.getByPlaceholder('กรุณาระบุชื่อบริษัท').fill('odds');
        await this._page.getByRole('combobox').selectOption('เทคโนโลยี');
        await this._page.getByText('ห้างหุ้นส่วนจำกัด').setChecked(true);
        await this._page.getByPlaceholder('กรุณาระบุเลขที่นิติบุคคล').fill('123456789');
  }
}