const { expect } = require("@playwright/test")
const { username, password } = require("../fixtures/testdata")

class PIM{
    constructor(page)
    {
        this.page=page
        this.pagetitle=".oxd-text.oxd-text--h6.orangehrm-main-title"
        this.AddEmployeeButton="//a[text()='Add Employee']"
        this.firstnameTextfield='[name="firstName"]'
        this.lastnameTextfield='[name="lastName"]'
        this.createlogindetailsbutton=".oxd-switch-input.oxd-switch-input--active.--label-right"
        this.usernametextfield="//label[text()='Username']/ancestor::div[@class='oxd-input-group oxd-input-field-bottom-space']/descendant::input[@class='oxd-input oxd-input--active']"
        this.passwordtextfield="//label[text()='Password']/ancestor::div[@class='oxd-input-group oxd-input-field-bottom-space']/descendant::input[@class='oxd-input oxd-input--active']"
        this.confirmpasswordtextfield="//label[text()='Confirm Password']/ancestor::div[@class='oxd-input-group oxd-input-field-bottom-space']/descendant::input[@class='oxd-input oxd-input--active']"
        this.saveButton="//button[text()=' Save ']"
        this.employeenameInList="input.orangehrm-firstname"
        this.expectedName="legion"

    }


    async verifypageTitle()
    {
        // await this.page.waitForTimeout(4000)
        const title=await this.page.locator(this.pagetitle)
        expect(title).toContainText("Update Password")
    }


    async clickOnAddEmployeeButton()
    {
        await this.page.click(this.AddEmployeeButton)
    }

    async fillFirstname(firstname)
    {
        await this.page.fill(this.firstnameTextfield,firstname)
    }

    async fillLastname(lastname)
    {
        await this.page.fill(this.lastnameTextfield,lastname)
    }

    async clickOnCreateLoginDetails()
    {
        await this.page.click(this.createlogindetailsbutton)
    }

    async fillUsername(username)
    {
        await this.page.fill(this.usernametextfield,username)
    }

    async fillPassword(password)
    {
        await this.page.fill(this.passwordtextfield,password)
    }

    async fillConfirmPassword(Password)
    {
        await this.page.fill(this.confirmpasswordtextfield,Password)
    }

    async clickOnSave()
    {
        await this.page.click(this.saveButton)
    }

    async verifyaddEmployee()
    {
        const actual=await this.page.inputValue(this.employeenameInList)
        expect(actual).toEqual(this.expectedName)
    }   

    
}
module.exports={PIM};
