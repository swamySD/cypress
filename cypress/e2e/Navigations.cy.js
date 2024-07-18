describe('Navigations',()=>{

    it('Navigation',()=>{
        
        cy.visit('https://demo.opencart.com/',{failOnStatusCode:false})
        cy.wait(160000)
        cy.title().should('eq','Your Store')//Home page
        
    })
})