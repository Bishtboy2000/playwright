
    
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
        
        browser = await chromium.launch({ headless: true }); 
        page = await browser.newPage();
        
        
        // this.page = page;
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
    
    
    
    
    