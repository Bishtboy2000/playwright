
Feature: homepage functionality

# Background: setup browser
# Given setup browser

@login 
Scenario: Verify user is able to login using valid credentials
Given User navigates to the application
When I enter the username as "<username>"
When I enter the password as "<password>"
When I click on the login button
Then User should logged in successfully
Then logout from the application

Examples:
    | username | password |
    | Admin  | admin123  |
    # |pankaj | pankaj123 |





@logout
Scenario:To verify that user should be able to logout

Given User login to the application
When I click on the profile button
Then click on the logout button
Then Login page should be displayed




@updatepasspage
Scenario:To verify that user should be able to navigate to the update password page

Given User login to the application
When  I click on the profile button
Then i click on change password button
Then update password page should be displayed




@admin
Scenario: To verify that edit record page is being displayed
    Given user is logged in  as an admin
    When user navigates to the admin page
    When user click on the edit button
    Then edit profile page should be displayed

    
