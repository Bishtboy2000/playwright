
const {expect} = require('@playwright/test')
const  testdata  = require('../fixtures/testdata');




class Adminpage{

    constructor(page)
    {
        this.page=page
        this.name=testdata.temp.name
        this.recordcheckbox="//div[text()='"+this.name+"']/ancestor::div[@class='oxd-table-row oxd-table-row--with-border']/descendant::div[@class='oxd-checkbox-wrapper']"
        this.deleterecordbutton="//div[text()='"+this.name+"']/ancestor::div[@class='oxd-table-row oxd-table-row--with-border']/descendant::i[@class='oxd-icon bi-trash']"
        this.confirmdeletebutton="//button[text()=' Yes, Delete ']"
        this.listofrecords=".oxd-table-cell.oxd-padding-cell"
        this.editrecordbutton="//div[text()='"+this.name+"']/ancestor::div[@class='oxd-table-row oxd-table-row--with-border']/descendant::i[@class='oxd-icon bi-pencil-fill']"
        this.editprofileheading=".oxd-text.oxd-text--h6.orangehrm-main-title"
        this.text="Edit User"
        this.configButton="//span[text()='Configuration ']"
        this.languagepackageButton="//a[text()='Language Packages']"
        this.languagepackageheading=".oxd-text.oxd-text--h6.orangehrm-main-title"
        this.languageheadingText="Language Packages"
    }

    async selectRecord()
    {
        await this.page.click(this.recordcheckbox)
    }

    async clickOnDelete()
    {
        await this.page.click(this.deleterecordbutton)
    }

    async clickOnconfirmDelete()
    {
        await this.page.click(this.confirmdeletebutton)
    }
    
    async verifyAccountDeletion()
    {
        this.foundmatchingrecord=false;
       const list=await this.page.$$(this.listofrecords)
        for(let record of list)
        {
            let temp=await record.textContent()
            if(temp.includes(this.name))
            {
                this.foundmatchingrecord= true;
                break;
            }
            
        }

        expect(this.foundmatchingrecord).toBe(false)
    }
    async clickOnEditRecordButton()
    {
        await this.page.click(this.editrecordbutton)
    }

    async verifyClickOnEditRecord()
    {
        const heading=await this.page.locator(this.editprofileheading)
       await expect(heading).toContainText(this.text)
    }

    async clickOnConfig()
    {
        await this.page.click(this.configButton)
    }

    async clickOnLanguagePackage()
    {
        await this.page.click(this.languagepackageButton)
    }

    async verifyClickOnLanguagePackage()
    {
        const Heading=await this.page.locator(this.languagepackageheading)
        expect(Heading).toContainText(this.languageheadingText)
    }
}

module.exports = { Adminpage };