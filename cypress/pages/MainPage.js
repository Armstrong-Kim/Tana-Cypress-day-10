class MainPage {
    elements = {
        addToCart1stBtn: () => cy.get("#add-to-cart-sauce-labs-backpack"),
        addToCart2ndBtn: () => cy.get("#add-to-cart-sauce-labs-bike-light"),
        removeBtn: () => cy.get("#remove-sauce-labs-backpack"),
        cartIcon: () => cy.get(".shopping_cart_link"),
        numberBadge: () => cy.get("span.shopping_cart_badge")
    }
    clickAddtoCart() {
        this.elements.addToCart1stBtn().click();
    }
    clickAddtoCart2nd() {
        this.elements.addToCart2ndBtn().click();
    }
    clickCartIcon(){
        this.elements.cartIcon().click();
    }
    clickRemoveBtn(){
        this.elements.removeBtn().click();
    }
    getUrl(){
        return cy.url();
    }
}
export const mainPage = new MainPage();