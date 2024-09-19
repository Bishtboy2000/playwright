const { expect } = require("@playwright/test")
const exp = require("constants")

class leavepage{
    constructor(page)
    {
        this.page=page
        this.fromDateButton="//label[text()='From Date']/ancestor::div[@class='oxd-input-group oxd-input-field-bottom-space']/descendant::i"
        this.applyOption="//a[text()='Apply']"
        this.leaveType=".oxd-select-text-input"
        this.applytitle=".oxd-text.oxd-text--h6.orangehrm-main-title"
        this.text="Apply Leave"
        this.fromdate="//div[text()='20']"
        this.toDateButton="//label[text()='To Date']/ancestor::div[@class='oxd-input-group oxd-input-field-bottom-space']/descendant::i"
        this.Todate="//div[text()='30']"
        this.applyButton="[type='submit']"
        this.partialDays="//label[text()='Partial Days']/ancestor::div[@class='oxd-form-row']/descendant::div[@class='oxd-select-text--after']"
        this.alldays="//span[text()='All Days']"
        this.myleaveoption="//a[text()='My Leave']"
        this.leaverecords="div[data-v-6c07a142]"
        this.duration="//label[text()='Duration']/ancestor::div[@class='oxd-grid-item oxd-grid-item--gutters']/descendant::div[@class='oxd-select-text--after']"
        this.halfdaymorning="//span[text()='Half Day - Morning']"
    }

    async clickOnApply(){
        await this.page.click(this.applyOption)
        
        
    }

    async selectLeaveType()
    {
        await this.page.click(this.leaveType)
        await this.page.keyboard.press('ArrowDown')
        await this.page.keyboard.press('Enter')
    } 
    async applyverify()
    {
        const title=await this.page.locator(this.applytitle)
        expect(title).toHaveText(this.text)
    }

    async selectFromDate()
    {
        await this.page.click(this.fromDateButton)
        await this.page.click(this.fromdate)
        

    }

    async selectToDate()
    {
        await this.page.click(this.toDateButton)
        await this.page.click(this.Todate)
    }

    async selectPartialDays()
    {
        await this.page.click(this.partialDays)
        await this.page.click(this.alldays)
    }

    async selectDuration()
    {
        await this.page.click(this.duration)
        await this.page.click(this.halfdaymorning)
    }

    async clickOnApplyButton()
    {
        
        await this.page.click(this.applyButton)
        await this.page.waitForTimeout(5000)
    }

    async clickOnMyLeave()
    {
        await this.page.click(this.myleaveoption)
    }

    async verifyLeave()
    {
        let flag=false;
        await this.page.waitForSelector(this.leaverecords)
      const records=await this.page.$$(this.leaverecords)
    //   const count=await records.count()
    //   console.log(count)
        for(let record of records)
        {
            
            let text=await record.textContent()
            console.log(text)
            if(text.includes('2024-20-10 to 2024-30-10'))
            {
                flag=true;
            }
        }   
        expect(flag).toBe(true)
    }

    

    


}
module.exports={leavepage}
