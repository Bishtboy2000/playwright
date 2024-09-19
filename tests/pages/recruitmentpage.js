const { expect } = require("@playwright/test")

class recruitmentpage
{  
     constructor(page)
     {
        this.page=page
        this.cWhenidateAddButton="//button[text()=' Add ']"
        this.firstnameTextfield='[name="firstName"]'
        this.lastnameTextfield='[name="lastName"]'
        this.vacancydropdown=".oxd-select-text--after"
        this.juniorAccOption="//span[text()='Payroll Administrator']"
        this.emailTextfield="//label[text()='Email']/ancestor::div[@class='oxd-input-group oxd-input-field-bottom-space']/descendant::input"
        this.contacNumberTextfield=".oxd-input.oxd-input--active[placeholder='Type here']"
        this.resumeButton="input[type='file']"
        this.applicationStageheadings="p[data-v-7b563373]"
        this.applicationstage="//h6[text()='Application Stage']"
        


     }


     async clickOnAddCWhenidateButton()
     {
        await this.page.click(this.cWhenidateAddButton)
     }

     async fillFirstname(firstname)
     {
        await this.page.fill(this.firstnameTextfield,firstname)
     }

     async fillLastname(lastname)
     {
        await this.page.fill(this.lastnameTextfield,lastname)
     }

     async selectVacancy()
     {
        await this.page.click(this.vacancydropdown)
        await this.page.click(this.juniorAccOption)
     }

     async fillEmail(email)
     {
        await this.page.fill(this.emailTextfield,email)
     }

     async fillContactNumber(contactNumber)
     {
        await this.page.fill(this.contacNumberTextfield,contactNumber)
     }

     async selectResume()
    {
        await this.page.locator(this.resumeButton).setInputFiles("tests/files/Book1.pdf")
        await this.page.waitForTimeout(2000)
    }

    async verifyCWhenidateSelection()
    {
      //   let flag=false
      
        
        await this.page.waitForSelector(this.applicationstage)
        const heading=await this.page.$$(this.applicationStageheadings)
       for(let col of heading)
       {
       
        let content=await col.textContent()
        console.log(content)
      //   if(await content.includes('Administrator')){
            // flag=true;
               //  break;
         // }
       }    
      //   expect(flag).toBe(true)
    }

}

module.exports={recruitmentpage};