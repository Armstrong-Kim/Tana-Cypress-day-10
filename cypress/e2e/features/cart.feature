Feature: Cart Feature
    Background:
        Given The user is on the website and is already logged in using username: "standard_user" and password: "secret_sauce"
        When The user clicks on the Add to cart button

    Scenario: Adding a product to the Cart
        And The user clicks on the Cart icon
        Then The user should see the added product on the Cart page

    Scenario: Checking the change in the number of products
        And The user clicks on the Add to cart button of second product
        Then The user should see the "2" number badge in the cart icon

    Scenario: Removing product from the cart in the main page
        And The user clicks on the Remove button on the main page
        Then The user should see that there is no products on the cart 

    Scenario: Removing product from the cart in the cart page
        And The user clicks on the Cart icon
        And The user clicks on the Remove button on the Cart page
        Then The user should see the Cart page without added product

    Scenario: Checking the Continue Shopping button functionality in the Cart page
        And The user clicks on the Cart icon
        And The user clicks on the Continue shopping button
        Then The user should see the Cart page with the product cards

    