const { Given, When, Then } = require("@cucumber/cucumber");
const { username } = require("../fixtures/testdata");







When('user navigates to the Add employee section',async function () {
    await this.home.clickOnPimButton()
    await this.pim.clickOnAddEmployeeButton()

  });


  When('use firstname as {string} When lastname as {string}',async function (firstname, lastname) {
    
    await this.pim.fillFirstname(firstname)
    await this.pim.fillLastname(lastname)
    await this.pim.clickOnCreateLoginDetails()
});



  When('user username as {string} When password as {string}',async function (username, password) {
    await this.pim.fillUsername(username)
    await this.pim.fillPassword(password)
    await this.pim.fillConfirmPassword(password)

  });



  Then('click on save button',async function () {
    await this.pim.clickOnSave()
  });



  Then('employee should be added',async function () {
    await this.pim.verifyaddEmployee()
  });

////

  Given('To setup the browser',async function(){
    const { Before, After } = require('@cucumber/cucumber');
    const { chromium } = require('@playwright/test');
    const { loginpage } = require('../pages/loginpage');
    const { homepage } = require('../pages/homepage');
    const { leavepage } = require('../pages/leavepage');
    const { PIM } = require('../pages/Pimpage');
    const { Adminpage } = require('../pages/Adminpage');
    const {recruitmentpage}=require('../pages/recruitmentpage')
    
    let browser;
    let page;
    
    Before(async function () {
        
        browser = await chromium.launch({ headless: false}); 
        page = await browser.newPage();
        
        
        this.page = page;
        this.login = new loginpage(page);
        this.home = new homepage(page);
        this.leave = new leavepage(page);
        this.pim=new PIM(page)
        this.admin=new Adminpage(page)
        this.recruit= new recruitmentpage(page)
    
    });
    
    // After(async function () {
        
        
    //         await browser.close();
        
    // });
    

})




 


  