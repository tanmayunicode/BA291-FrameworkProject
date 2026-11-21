class LoginPage
{
    constructor(page)
    {
        this.page=page;
        this.ip_emailAddress = page.locator("input[name='email_address']");
        this.ip_password = page.locator("input[name='password']");
        this.btn_signIn=page.locator("#tdb1");
        this.lnk_passwordForgotten=page.locator("//a[text()='Password forgotten? Click here.']");
        this.link_continue=page.locator("#tdb2");

    }

    async click_login(email,pwd)
    {
        await this.ip_emailAddress.fill(email);
        await this.ip_password.fill(pwd);
        await this.btn_signIn.click();

    }

    async click_continue()
    {
        await link_continue.click();

    }

    async click_passwordForgotten()
    {
        await lnk_passwordForgotten.click();

    }
}

module.exports = {LoginPage};