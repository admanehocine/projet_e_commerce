import { Page } from "@playwright/test"
import { LoginPage } from "./login.page";
export class DashboardPage extends LoginPage {

    constructor(page: Page) {
        super(page);
    }
    elements2 = {
        alert_Bienvenu: () => this.page.locator("[data-testid='alert-message']"),
        btn_ajout_produit: () => this.page.locator("[data-testid='dashboard-add-product']"),
        btn_gestion_produit: () => this.page.locator("[data-testid='dashboard-manage-products']"),
    }


    getAlertBienvu() {
        return this.elements2.alert_Bienvenu();
    }
    async ClickAjoutProduit() {
        await this.elements2.btn_ajout_produit().click()
    }
    async ClickGestionProduit() {
        await this.elements2.btn_gestion_produit().click()
    }

}