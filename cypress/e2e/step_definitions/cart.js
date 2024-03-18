import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import { cartPage } from "@pages/CartPage";
import {loginPage} from '@pages/LoginPage';
import { mainPage } from "@pages/MainPage";
Given("The user is on the website and is already logged in using username: {string} and password: {string}", (username,password) => {
    cy.visit("");
    loginPage.submitLogin(username,password)
});
When("The user clicks on the Add to cart button", () => {
    mainPage.clickAddtoCart();
});
When("The user clicks on the Add to cart button of second product", () => {
    mainPage.clickAddtoCart2nd();
})
When("The user clicks on the Cart icon", () => {
    mainPage.clickCartIcon();
})
When("The user clicks on the Remove button on the main page", () => {
    mainPage.clickRemoveBtn();
})
When("The user clicks on the Remove button on the Cart page", () => {
    cartPage.clickRemoveBtn();
})
When("The user clicks on the Continue shopping button", () => {
    cartPage.clickContinueShoppingBtn();
})
Then("The user should see the added product on the Cart page", () => {
    cartPage.elements.productCard().should("be.visible");
})
Then("The user should see that there is no products on the cart", () => {
    mainPage.elements.addToCart1stBtn().should('be.visible');
    mainPage.elements.numberBadge().should('not.exist');
})
Then("The user should see the Cart page without added product", () => {
    cartPage.elements.productCard().should('not.exist');
})
Then("The user should see the Cart page with the product cards", () => {
    mainPage.getUrl().should("eq", "https://www.saucedemo.com/inventory.html");
})
Then("The user should see the {string} number badge in the cart icon", (value) => {
    mainPage.elements.numberBadge().should('have.text', value);
})