const {When,Then,After,Before,Given}= require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { before } = require('node:test');
const {loginpage}=require ('../pages/loginpage');
const {Adminpage}=require('../pages/Adminpage');
const  testdata  = require('../fixtures/testdata');


// let page;
// let browser;
// let admin;
// let login;

// Before(async function () {
//     browser= await chromium.launch({headless:false})      //launch({headless:false})
//     page=await browser.newPage()
//     admin=new Adminpage(page)
//     login=new loginpage(page)
// })

// After(async function() {
//   browser.close()
// })



  Given('user is logged in  as an admin',{timeout: 10 * 10000 }, async function () {
    await this.login.navigatingToUrl();
    await this.login.enterusername(testdata.username); 
    await this.login.enterpassword(testdata.password);
    await this.login.clickOnLogin(); 
    await this.login.verifyLogin();
    
  });


  Given('user navigates to the admin page', async function () {
    await this.login.clickOnAdminButton()
    
  });


  When('user click on the edit button', async function () {
    await this.admin.clickOnEditRecordButton()

  });

  Then('edit profile page should be displayed',{timeout: 10 * 10000 },async function () {
    await this.admin.verifyClickOnEditRecord()
  });



  //config

  Then('select language packages option inside  configuration',async function () {
    await this.admin.clickOnConfig()
    await this.admin.clickOnLanguagePackage()

  });



  Then('language package page should be displayed',async function () {
    await this.admin.verifyClickOnLanguagePackage()

  });