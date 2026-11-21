class WelcomePage
{
    constructor(page)
    {
        this.page=page;
        this.lnk_logoff = page.locator("//*[text()='Log Off']");
    }

    async click_logoff()
    {
        await this.lnk_logoff.click();

    }
}
module.exports = {WelcomePage};