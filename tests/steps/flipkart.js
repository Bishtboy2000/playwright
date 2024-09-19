const { Before, Given , When , Then,After} = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const { loginpage } = require("../pages/loginpage");
const { timeout } = require("../../playwright.config");
const {homepage } = require('../pages/homepage');
const testdata = require("../fixtures/testdata");
const { PIM } = require("../pages/Pimpage");
const { flipkart } = require("../pages/flipkartpage");



let browser;
let page;
// let login;
let logout;
// let pim;
let flip;
let context;

Before(async function () {
    browser= await chromium.launch({headless:true})
    context=await browser.newContext()
    page=await context.newPage()
//     login=new loginpage(page)
//     home=new homepage(page)
//     pim= new PIM(page)
    flip=new flipkart(page,context)

})

After(async function() {
      browser.close()
  })


Given('user navigates to flipkart',{timeout:10*10000},async function () {
    await flip.navigatetourl()
  });

  
  Then('searches for an item using searchbar',async function () {
        await flip.searchitem()
    
  });

  Then('list of items should be displayed',async function () {
        await flip.verifysearch()
  });




//   cart



Then('select one item When add to cart',async function () {
      await flip.searchitem()
      await flip.addToCart()
      // await flip.clickOnCart()
      

    });

Then('item should be added to cart',async function () {
      // await flip.verifyCart()

})
