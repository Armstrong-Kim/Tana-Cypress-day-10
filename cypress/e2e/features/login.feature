Feature: Login Feature
    Background:
        Given The user opens the login page

    Scenario: Successful login
        When The user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        Then The user will be logged in

    Scenario: Login with incorrect username and password and empty fields, and clicks on the login button
        When The user enters incorrect "<username>" And "<password>", and clicks on the login button
        Then The user should see "<errorMessage>" error message
            | username      | password     | errorMessage                                                              |
            | test1234      | secret_sauce | Epic sadface: Username and password do not match any user in this service |
            | standard_user | test1234     | Epic sadface: Username and password do not match any user in this service |
            |               |              | Epic sadface: Username is required                                        |

    Scenario: Blocked user Login
        When The user enters the username "locked_out_user", the password "secret_sauce", and clicks on the login button
        Then The user should see "Epic sadface: Sorry, this user has been locked out." error message