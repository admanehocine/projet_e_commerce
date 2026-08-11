import test, { expect }  from "@playwright/test";
import { ProductFormPage } from "./pages/ProductForm.page";
import { DashboardPage } from "./pages/dashboard.page";
import { ProductsPage } from "./pages/Products.page";
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
    await pf.saisirNom("nom de produit");
    await pf.saisirDesc("description");
    await pf.saisirPrix()
    await pf.saisirStock()
    await pf.selectFileImage()
    await pf.ClickAddProduct()
    await expect(p.getAlert_add_product()).toBeVisible();
})