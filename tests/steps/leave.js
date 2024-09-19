const { Before,Then, When,After } = require("@cucumber/cucumber");
const {  homepage } = require("../pages/homepage");
const { loginpage } = require("../pages/loginpage");
const { chromium } = require("@playwright/test");
const { leavepage } = require("../pages/leavepage");


// let browser;
// let page;
// let login;
// let home;
// let leave;


// Before(async function () {
//     browser=await chromium.launch({headless:false})
//     page= await browser.newPage()
//      login=new loginpage(page);
//      home=new homepage(page);
//      leave=new leavepage(page)

// })

// After(async function() {
//     browser.close()
// })


  When('I click on the leave button',async function () {
   await this.home.clickonLeavebutton()
    
  });


  Then('I click on the apply button',async function () {
    await this.leave.clickOnApply()
    
  });



  Then('Apply page should be displayed',async function () {
       await this.leave.applyverify()
    
  });



  Then('fill all the details When click on apply',{timeout:10*1000},async function () {
        await this.leave.selectLeaveType()
        await this.leave.selectFromDate()
        await this.leave.selectToDate()
        await this.leave.selectPartialDays()
        await this.leave.selectDuration()
        await this.leave.clickOnApplyButton()

  });


  Then ('leave should be displayed in My Leave',async function () {
        await this.leave.clickOnMyLeave()
        await this.leave.verifyLeave()
  })

  