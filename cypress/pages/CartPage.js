class CartPage {
    elements = {
        productCard: () => cy.get(".cart_item_label"),
        removeBtn: () => cy.get(".cart_button"),
        continueShoppingBtn: () => cy.get("#continue-shopping"),
        checkoutBtn: () => cy.get("#checkout")
    }
    clickRemoveBtn(){
        this.elements.removeBtn().click();
    }
    clickContinueShoppingBtn(){
        this.elements.continueShoppingBtn().click();
    }
    clickCheckoutBtn(){
        this.elements.checkoutBtn().click();
    }
}
export const cartPage = new CartPage();