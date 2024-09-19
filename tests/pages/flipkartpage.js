const {expect} = require('@playwright/test')
const  testdata  = require('../fixtures/testdata');
// const { context } = require('@cucumber/cucumber');

class flipkart{


    constructor(page,context)
    {
        this.page=page
        this.context=context
        // this.page1=page1
        this.url="https://www.flipkart.com/"
        this.searchbar="[name='q']"
        this.laptopheading=".BUOuZu"
        this.acerlaptop="//div[text()='HP AMD Ryzen 5 Hexa Core 5500U - (16 GB/512 GB SSD/Windows 11 Home) 15s- eq2182AU Thin When Light Lapto...']"
        this.addtocartbutton="//button[text()='Add to cart']"
        this.cartButton="//span[text()='Cart']"
        this.productHeading=".T2CNXf.QqLTQ-"
    }

    async navigatetourl()
    {
        await this.page.goto(this.url)
    }

    async searchitem()
    {
        await this.page.fill(this.searchbar,"laptops")
        await this.page.keyboard.press('Enter');
    }

    async verifysearch()
    {
       const heading=await this.page.locator(this.laptopheading)
        expect(heading).toContainText('laptops')
    }

    async addToCart() {
        const [page1] = await Promise.all([
            this.context.waitForEvent('page'),
            this.page.click(this.acerlaptop), // This triggers opening a new page
        ]);
        
        await page1.waitForLoadState(); // Ensure the new page is fully loaded
        await page1.click(this.addtocartbutton);
    }
    

    async clickOnCart()
    {
        await this.page.click(this.cartButton)
    }

    async verifyCart()
    {
        const heading=await this.page.locator(this.productHeading)
        expect(heading).toContainText("HP AMD Ryzen 5 Hexa Core 5500U")
    }


}

module.exports = { flipkart };