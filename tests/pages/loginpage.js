const { expect } = require('@playwright/test');


class loginpage{

    constructor(page)
    {
        this.page=page
        this.loginpageUrl="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
        this.usernameTextfield="[name='username']"
        this.passwordTextfield="[name='password']"
        this.loginButton="[type='submit']"
        this.dashboardHeadline=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
        this.dashboardText='Dashboard'
        this.profileButton=".oxd-userdropdown-name"
        this.logoutButton="//a[text()='Logout']"
        this.adminButton="//span[text()='Admin']"
        this.loginlogo=".oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button"

       
    }

    async navigatingToUrl()
    {
        await this.page.goto(this.loginpageUrl)
        // await this.page.waitForTimeout(10000)
    }
    async enterusername(username)
    {
        await this.page.fill(this.usernameTextfield,username)
    }

    async enterpassword(password)
    {
        await this.page.fill(this.passwordTextfield,password)
        await this.page.screenshot({ path: 'screenshot.png' });

    }
    
    async clickOnLogin()
    {
        await this.page.click(this.loginButton)
    }

    async verifyLogin()
    {
        const title=await this.page.locator(this.dashboardHeadline)
        await expect(title).toHaveText(this.dashboardText)
    }

    async logout()
    {
        await this.page.click(this.profileButton)
        await this.page.click(this.logoutButton)
    }

    async clickOnAdminButton()
    {
        await this.page.click(this.adminButton)
    }

    async verifyLogout()
    {
        // await this.page.waitForTimeout(6000)
      const logo= await this.page.locator(this.loginlogo)
        await expect(logo).toContainText(' Login ')
    }

    async login(username,password){
        await this.navigatingToUrl()
        await this.enterusername(username)
        await this.enterpassword(password)
        await this.clickOnLogin()
        await this.verifyLogin()
    }

    

    
    
}
module.exports = { loginpage };