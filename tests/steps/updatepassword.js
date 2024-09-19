
  const { Before, Given , When , Then,After} = require("@cucumber/cucumber");
  const { chromium } = require("@playwright/test");
  const { loginpage } = require("../pages/loginpage");
  const { timeout } = require("../../playwright.config");
  const {homepage } = require('../pages/homepage');
  const testdata = require("../fixtures/testdata");
  const { PIM } = require("../pages/Pimpage");



  // let browser;
  // let page;
  // let login;
  // let logout;
  // let pim;

  // Before(async function () {
  //     browser= await chromium.launch({healdless:false})
  //     page=await browser.newPage()
  //     login=new loginpage(page)
  //     home=new homepage(page)
  //     pim= new PIM(page)
  // })

  // After(async function() {
  //   browser.close()
  // })




  Given('User login to the application',{timeout:10*10000},async function () {
      await this.login.login(testdata.username,testdata.password)
    });

    
    Then('i click on change password button',async function () {
        await this.home.clickonchangepassword()
      
    });

    Then('update password page should be displayed',{timeout:10*10000},async function () {
      await this.pim.verifypageTitle()
    });