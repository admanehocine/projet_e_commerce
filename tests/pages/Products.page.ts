//ProductPage 
import { Page } from "@playwright/test"
import { LoginPage } from "./login.page";

export class ProductsPage extends LoginPage {

    constructor(page: Page) {
        super(page);
    }
    elements3 = {
        alert_add_product: () => this.page.locator("[data-testid='alert-message']"),
        names_product: () => this.page.locator("[data-testid^='product-name']"),
        price_product: () => this.page.locator("[data-testid^='product-price']"),
        stock_product: () => this.page.locator("[data-testid^='product-stock']"),
        row_products: () => this.page.locator("[data-testid^='product-row']"),
        locator_name_product: "[data-testid^='product-name']",
        locator_price_product: "[data-testid^='product-price']",
        locator_stock_product: "[data-testid^='product-stock']",
    }
    async get_first_row_product() {
        let row = this.elements3.row_products().first()
        //console.log("====> stock" + await row.locator(this.elements3.locator_stock_product).textContent())
        return {
            "name": row.locator(this.elements3.locator_name_product).textContent(),
            "price": row.locator(this.elements3.locator_price_product).textContent(),
            "stock": row.locator(this.elements3.locator_stock_product).textContent()
        }
    }

    get_first_price_product() {
        return this.elements3.price_product().first()
    }
    get_first_name_product() {
        return this.elements3.names_product().first()
    }
    get_first_stock_product() {
        return this.elements3.stock_product().first()
    }
    getAlert_add_product() {
        return this.elements3.alert_add_product()
    }

}