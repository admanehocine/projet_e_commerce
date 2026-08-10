//ProductForm
import { Page } from "@playwright/test"
import { LoginPage } from "./login.page";

export class ProductForm extends LoginPage {

    constructor(page: Page) {
        super(page);
    }
    elements3 = {
        nom_input: () => this.page.locator("#product-nom"),
        description_input: () => this.page.locator("#product-description"),
        prix_input: () => this.page.locator("#product-prix"),
        stock_input: () => this.page.locator("#product-stock"),
        img_input: () => this.page.locator("#product-image-file"),
        btn_Ajout: () => this.page.locator("#product-submit")
    }


    async saisirNom(nom: string) {
        await this.elements3.nom_input().fill(nom)
    }
    async saisirDesc(desc: string) {
        await this.elements3.description_input().fill(desc)
    }
    async saisirPrix() {
        let price = Math.floor(Math.random() * 46) + 10
        await this.elements3.prix_input().fill(price.toString())
    }
    async saisirStock() {
        let price = Math.floor(Math.random() * 11)// + 10
        await this.elements3.stock_input().fill(price.toString())
    }
    async selectFileImage() {
        await this.elements3.img_input().setInputFiles("../assets/img1.png")
    }

}