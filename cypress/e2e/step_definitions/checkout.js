import { When, Then,} from "@badeball/cypress-cucumber-preprocessor";
import { cartPage } from "@pages/CartPage";
import { checkoutPage } from "@pages/CheckoutPage";
import { mainPage } from "@pages/MainPage";
When("The user clicks on the Checkout button", () => {
    cartPage.clickCheckoutBtn();
})
When("The user enters valid data into the First Name, Last Name, Postal Code fields and clicks Continue button", () => {
    checkoutPage.submitCheckout();
})
When("The user clicks the Finish button", () => {
    checkoutPage.clickFinishBtn();
})
When("The user clicks on the Continue button", () => {
    checkoutPage.clickContinueBtn();
})
When("The user enters postal code into the Postal Code field", () => {
    checkoutPage.enterPostalCode();
})
When("The user clicks on the Cancel button", () => {
    checkoutPage.clickCancelBtn();
})
Then("The user should see the first Checkout page", () => {
    mainPage.getUrl().should("eq", "https://www.saucedemo.com/checkout-step-one.html");
})
Then("The user should see the home page", () => {
    mainPage.getUrl().should("eq", "https://www.saucedemo.com/inventory.html");
})
Then("The user should see {string} text message", (text) => {
    checkoutPage.elements.successMessage().should("have.text", text);
})