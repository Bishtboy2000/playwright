Feature: Admin page functionality


@config
Scenario: To verify that when user click on admin button then click on the configuration button then select language packages then language package page should be displayed
Given User login to the application
When user navigates to the admin page
Then select language packages option inside  configuration
Then language package page should be displayed
