import { Given, When, Then,} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage';

Given("The user opens the login page", () => {
    cy.visit("");
});
When("The user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
    loginPage.submitLogin(username,password)
});
When("The user enters incorrect {string} And {string}, and clicks on the login button", (table) => {
    table.hashes().forEach((row) => {
        cy.log(row.username);
        cy.log(row.password);
        loginPage.submitLogin(row.username, row.password)
    });
});
When("The user clicks on the login button", ()=>{
    loginPage.clickLogin();
})
Then("The user will be logged in", () => {
    cy.url().should("contains", "/inventory.html");
});
Then("The user should see {string} error message", (errorMessage)=> {
    loginPage.elements.errorMessage().should("have.text", errorMessage);
});