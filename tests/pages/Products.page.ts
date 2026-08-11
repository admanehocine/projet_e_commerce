//

//ProductForm
import { Page } from "@playwright/test"
import { LoginPage } from "./login.page";

export class ProductsPage extends LoginPage {

    constructor(page: Page) {
        super(page);
    }
    elements3 = {
        alert_add_product: () => this.page.locator("[data-testid='alert-message']"),
    }



    getAlert_add_product() {
        return this.elements3.alert_add_product()
    }

}