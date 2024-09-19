@api

Feature: API functionality
@api_GET
Scenario: To verify that user is fetching the records using API
Given user sets up the API context
When user fetches the details


@api_POST
Scenario: To verify that user is able to create a new record using API
Given user sets up the API context
When I creates a new user
Then new user should be created with new credentials

@api_PUT
Scenario: To verify that user is able to update the data
Given user sets up
When user updates the data 
Then data should be updated as per the users need

@api_DELETE
Scenario: To verify that user is able to delete the data
Given user sets up the API context
When user delete the data
Then data should be deleted


