class homepage{

    constructor(page)
    {
        this.page=page
        this.profileButton=".oxd-userdropdown-name"
        this.logoutButton="//a[text()='Logout']"
        this.changepasswordButton="//a[text()='Change Password']"
        this.leaveButton="//span[text()='Leave']"
        this.PIMbutton="//span[text()='PIM']"
        this.recruitmentButton="//span[text()='Recruitment']"

        
    }

    async clickonprofile()
    {
        await this.page.click(this.profileButton)
    }

    async clickonlogout()
    {
        await this.page.click(this.logoutButton)
    }

    async clickonchangepassword()
    {
        await this.page.click(this.changepasswordButton)
    }

    async clickonLeavebutton()
    {
        await this.page.click(this.leaveButton)
    }

    async clickOnPimButton()
    {
        await this.page.click(this.PIMbutton)
    }

    async clickOnRecruitmentButton()
    {
        await this.page.click(this.recruitmentButton)
    }

    

}
module.exports = { homepage };