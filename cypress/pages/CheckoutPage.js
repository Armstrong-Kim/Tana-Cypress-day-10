const name = 'Julia';
const lastName = 'Guz';
const postalCode = '9898';
class CheckoutPagee {
    elements = {
        firstName: () => cy.get("#first-name"),
        lastName: () => cy.get("#last-name"),
        postalCode: () => cy.get("#postal-code"),
        continueBtn: () => cy.get("#continue"),
        errorMessage: () => cy.get(".error-message-container"),
        finishBtn: () => cy.get("#finish"),
        successMessage: () => cy.get(".complete-header"),
        cancelBth: () => cy.get("#cancel"),
    }
    clickContinueBtn(){
        this.elements.continueBtn().click();
    }
    clickFinishBtn(){
        this.elements.finishBtn().click();
    }
    clickCancelBtn(){
        this.elements.cancelBth().click();
    }
    enterPostalCode(){
        this.elements.postalCode().type(postalCode);
    }
    submitCheckout(){
        this.elements.firstName().type(name);
        this.elements.lastName().type(lastName);
        this.elements.postalCode().type(postalCode);
        this.elements.continueBtn().click();
    }
}
export const checkoutPage = new CheckoutPagee();