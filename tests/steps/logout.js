
const { Before, Given , When , Then} = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const { loginpage } = require("../pages/loginpage");
const { timeout } = require("../../playwright.config");
const {homepage } = require('../pages/homepage');
const testdata = require("../fixtures/testdata");


// let browser;
// let page;
// let login;
// let logout;

// Before(async function () {
//     browser= await chromium.launch({headless:false})
//     page=await browser.newPage()
//     login=new loginpage(page)
//     home=new homepage(page)
// })




  When('I click on the profile button',async function () {
    await this.home.clickonprofile()
  });


  Then('click on the logout button',async function () {
      await  this.home.clickonlogout()
  });



  Then('Login page should be displayed',{timeout:10*10000},async function () {
       await this.login.verifyLogout()
  });