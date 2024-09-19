const { When, Then } = require("@cucumber/cucumber");



When('user click on the recruitment button',async function () {
    await this.home.clickOnRecruitmentButton()

  });



  When('click on add cWhenidate button',async function () {
    await this.recruit.clickOnAddCWhenidateButton()
  });



  Then('fills all the details {string}{string}{string}{string}',async function (firstname, lastname, email, contactNumber) {
        await this.recruit.fillFirstname(firstname)
        await this.recruit.fillLastname(lastname)
        await this.recruit.selectVacancy()
        await this.recruit.fillEmail(email)
        await this.recruit.fillContactNumber(contactNumber)
        await this.recruit.selectResume()
        

  });



  