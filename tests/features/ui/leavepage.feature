

Feature: leave page functionality
@leave
Scenario: To verify that when user clicks on the leave page then leave page is being displayed 
Given User login to the application
When I click on the leave button
Then I click on the apply button
Then Apply page should be displayed

@leavecheck
Scenario: To verify that user is able  to apply for leave after visiting  the leave page
Given User login to the application
When I click on the leave button
Then I click on the apply button
Then Apply page should be displayed
Then fill all the details When click on apply
Then leave should be displayed in My Leave
