const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { chromium } = require('@playwright/test');
const { LoginPage, loginpage } = require("../pages/loginpage");
const testdata = require("../fixtures/testdata");

// let page;
// let browser;
// let login;

// Before(async function () {
//     browser = await chromium.launch({headless:false});
//     page = await browser.newPage(); 
//     login = new loginpage(page); 
// });

// After(async function() {
//     browser.close()
// })


Given('User navigates to the application', { timeout: 10 * 10000 }, async function () {
    await this.login.navigatingToUrl(); 
});


When('I enter the username as {string}', async function (username) {
    await this.login.enterusername(username); 
});

When('I enter the password as {string}', async function (password) {
    await this.login.enterpassword(password); 
});

When('I click on the login button', async function () {
    await this.login.clickOnLogin(); 
});

Then('User should logged in successfully', async function () {
    await this.login.verifyLogin(); 
});

Then('logout from the application', async function () {
    await this.login.logout(); 
});
