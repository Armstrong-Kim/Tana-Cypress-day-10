Feature: Checkout Feature
    Background:
        Given The user is on the website and is already logged in using username: "standard_user" and password: "secret_sauce"
        When The user clicks on the Add to cart button
        And The user clicks on the Cart icon
        And The user clicks on the Checkout button

    Scenario: Verifying Cart Checkout Button Functionality
        Then The user should see the first Checkout page

    Scenario: Checkout with valid credentials
        And The user enters valid data into the First Name, Last Name, Postal Code fields and clicks Continue button
        And The user clicks the Finish button
        Then The user should see "Thank you for your order!" text message

    Scenario Outline: Checkout with empty or incomplete fields
        And The user enters postal code into the Postal Code field
        And The user clicks on the Continue button
        Then The user should see "<errorMessage>" error message
        Examples:
            | postalCode | errorMessage                  |
            | 12345      | Error: First Name is required |
            |            | Error: First Name is required |

    Scenario: Checking the functionality of the Cancel button on the second Checkout page
        And The user enters valid data into the First Name, Last Name, Postal Code fields and clicks Continue button
        And The user clicks on the Cancel button
        Then The user should see the home page
