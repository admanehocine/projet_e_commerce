import { Page } from "@playwright/test"
export class LoginPage {

    page: Page
    constructor(page: Page) {
        this.page = page;
    }
    elements = {
        email_input: () => this.page.locator("#login-email"),
        password_input: () => this.page.locator("#login-password"),
        btn_connexion: () => this.page.locator("#login-submit")
    }


    async saisirEmail(mail: string) {
        await this.elements.email_input().fill(mail)
    }

    async saisirPass(pass: string) {
        await this.elements.password_input().fill(pass)
    }

    async ClickConnexion() {
        await this.elements.btn_connexion().click()
    }
    async login(email: string, password: string) {
        await this.saisirEmail(email)
        await this.saisirPass(password)
        await this.ClickConnexion()
    }
}