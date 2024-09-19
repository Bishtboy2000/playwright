Feature: recruiment functionality



@addCWhenidate
Scenario: To verify that user is able to add cWhenidate through recruitment
Given User login to the application
When user click on the recruitment button 
When click on add cWhenidate button
Then fills all the details "<firstname>""<lastname>""<email>""<contactNumber>"
When click on save button


Examples:
    | firstname | lastname | email | contactNumber |
    | example | 123 | example123@gmail.com  | 4564698547  |