Feature: flipkart searchbar
@flipkart
Scenario: To verify that user is being able to search an item on flipkart

When user navigates to flipkart
Then searches for an item using searchbar
Then list of items should be displayed


# @flipkartCart
# Scenario: To verify that when user select an item When add to cart then that item is added to cart or not
# When user navigates to flipkart
# Then select one item When add to cart
# Then item should be added to cart