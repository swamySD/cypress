//click on link using linktext/partial linktext
// over riginh cotains() command
// re-usuable custome command

describe('Custom commands', () => {

    it("handling links", () => {
       
        cy.visit("https://demo.nopcommerce.com/")
        
        //Direct appraoch
        
        //MacBook
        cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');

        cy.go('back');

        //Using custom command
        cy.clickLink("Apple MacBook Pro 13-inch"); //MacBook
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');
    
    })

    it("overwriting existing command", () => {
       
        cy.visit("https://demo.nopcommerce.com/")
  
        cy.clickLink("APPLE MACBOOK PRO 13-INCH"); //MacBook
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');
    })

    it.only("Login command", () => {
       
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink('Log in') //custom command   
        cy.loginapp("testing@gmail.com","test123");
        cy.get('.ico-account').should('have.text','My account');
        
    })
    
    })