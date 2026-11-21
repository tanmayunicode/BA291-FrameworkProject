class HomePage {
    constructor(page) {
        this.page = page;
        this.lnk_logyourselfin = page.locator("//*[text()='log yourself in']");
        this.lnk_createAnAccount = page.locator("//*[text()='create an account']");
    }

    async click_logyourselfin() {
        await this.lnk_logyourselfin.click();
    }
    
    async click_createAnAccount() {
        await this.lnk_createAnAccount.click();
    }

}

module.exports = {HomePage};