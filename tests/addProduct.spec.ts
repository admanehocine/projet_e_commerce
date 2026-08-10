import test from "@playwright/test";
import { ProductForm } from "./pages/ProductForm.page";
import { DashboardPage } from "./pages/dashboard.page";
let pf: ProductForm;
let dp: DashboardPage;
test.beforeEach(async ({ page }) => {
    dp = new DashboardPage(page);
    pf = new ProductForm(page);
    await page.goto("https://api.efi-academy.com/e-commerce-test-api/auth/login.php")
    await dp.login("admin@boutique.qa", "Admin123!");
    await dp.ClickAjoutProduit();
})

test("add product form", async ({ page }) => {
        
})