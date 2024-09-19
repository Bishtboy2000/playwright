Feature: PIM functionality
@addEmployee
Scenario: To verify  that user is able to Add an Employee
Given User login to the application
When user navigates to the Add employee section 
When use firstname as "<firstname>" When lastname as "<lastname>"
When user username as "<username>" When password as "<password>"
Then click on save button
Then employee should be added

Examples:
    | firstname | lastname | username | password | 
    | legion    | 123      | legion123 | legion123 |