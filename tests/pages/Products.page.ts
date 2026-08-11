//ProductPage 
import { Page } from "@playwright/test"
import { LoginPage } from "./login.page";

export class ProductsPage extends LoginPage {

    constructor(page: Page) {
        super(page);
    }
    elements3 = {
        alert_add_product: () => this.page.locator("[data-testid='alert-message']"),
        //alert_get_by_role:()=>this.page.getByRole({name:""})
        names_product: () => this.page.locator("[data-testid^='product-name']"),
        price_product: () => this.page.locator("[data-testid^='product-price']"),
        stock_product: () => this.page.locator("[data-testid^='product-stock']"),
        row_products: () => this.page.locator("[data-testid^='product-row']"),
        btn_edit_product: () => this.page.locator("[data-testid^='product-edit']"),
        locator_name_product: "[data-testid^='product-name']",
        locator_price_product: "[data-testid^='product-price']",
        locator_stock_product: "[data-testid^='product-stock']",
        attribute_id_product: 'data-product-id',
        name_product_locator: "[data-testid='product-name-",
        price_product_locator: "[data-testid='product-price-",
        stock_product_locator: "[data-testid='product-stock-",
    }
    async get_first_row_product() {
        let row = this.elements3.row_products().first()
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
    async get_any_Products() {
        let size: number;
        size = await this.elements3.row_products().count()
        return Math.floor(Math.random() * size);
    }

    get_any_row_product(position: number) {
        return this.elements3.row_products().nth(position);
    }
    async click_any_modifier_product(position: number) {
       // await this.elements3.btn_edit_product().nth(position).click()
        await this.elements3.row_products().nth(position).getByRole("link",{name:"Modifier"}).click()

    }
    get_any_name_product(id_product: number) {
        return this.page.locator(this.elements3.name_product_locator + id_product + "']")
    }

    get_any_price_product(id_product: number) {
        return this.page.locator(this.elements3.price_product_locator + id_product + "']")
    }

    get_any_stock_product(id_product: number) {
        return this.page.locator(this.elements3.stock_product_locator + id_product + "']")
    }
    get_attribute_locator() {
        return this.elements3.attribute_id_product
    }
}