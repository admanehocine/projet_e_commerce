import test, { expect } from "@playwright/test";
import { ProductFormPage } from "./pages/ProductForm.page";
import { DashboardPage } from "./pages/dashboard.page";
import { ProductsPage } from "./pages/Products.page";
import { generateDescription, generateNom, generateProductName } from "./jdd/faker.mjs";
let pf: ProductFormPage;
let dp: DashboardPage;
let p: ProductsPage;
test.beforeEach(async ({ page }) => {
    dp = new DashboardPage(page);
    pf = new ProductFormPage(page);
    p = new ProductsPage(page);
    await page.goto("https://api.efi-academy.com/e-commerce-test-api/auth/login.php")
    await dp.login("admin@boutique.qa", "Admin123!");
    await dp.ClickAjoutProduit();
})

test("add product form", async ({ page }) => {
    //le nom
    const name_product = generateProductName()
    await pf.saisirNom(name_product);
    await pf.saisirDesc(generateDescription());
    let prix_saisie = await pf.saisirPrix()
    let stock_saisie = await pf.saisirStock()
    await pf.selectFileImage()
    await pf.ClickAddProduct()
    await expect(p.getAlert_add_product()).toBeVisible();
    await expect(p.get_first_name_product()).toContainText(name_product)
    await expect(p.get_first_price_product()).toContainText(prix_saisie.replace(".", ",") + " €")
    await expect(p.get_first_stock_product()).toContainText(stock_saisie.toString())
})

test("add product form second methode", async ({ page }) => {
    //le nom
    const name_product = "nom de produit"
    await pf.saisirNom(name_product);
    await pf.saisirDesc("description");
    let prix_saisie = await pf.saisirPrix()
    let stock_saisie = await pf.saisirStock()
    await pf.selectFileImage()
    await pf.ClickAddProduct()
    await expect(p.getAlert_add_product()).toBeVisible();
    let row_product = await p.get_first_row_product();
    expect(await row_product["name"]).toEqual(name_product);
    expect(await row_product["price"]).toEqual(prix_saisie.replace(".", ",") + " €");
    let price_obtt = await row_product["stock"]
    expect(price_obtt!.toString().trim()).toEqual(stock_saisie.toString());
})