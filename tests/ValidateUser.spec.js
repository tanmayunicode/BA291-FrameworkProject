import { test, expect } from '@playwright/test';
import { HomePage } from '../pageobjects/Homepage';
import { LoginPage } from '../pageobjects/Loginpage';
import { WelcomePage } from '../pageobjects/Welcomepage';
import { LogoffPage } from '../pageobjects/Logoffpage';
import { getExcelData } from '../util/excelutil';


const data = getExcelData("Cred");

test.describe('TC-ValidateUser', () => {
    data.forEach(user => {
        test(`Login User ${user.Email}`, async ({ page }) => {
            await page.goto('http://localhost/uth/gadgetsgallery/catalog/');
            let homepage = new HomePage(page);
            await homepage.click_logyourselfin();
            let loginpage = new LoginPage(page);
            await loginpage.click_login(user.Email, user.Password);
            await page.waitForTimeout(2000);

            expect(page.getByText("Log Off")).toBeVisible();

            let welcomepage = new WelcomePage(page);
            await welcomepage.click_logoff();

            let logoffpage = new LogoffPage(page);
            await logoffpage.click_continue();
        });
    });
});

