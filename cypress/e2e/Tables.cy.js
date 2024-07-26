describe('Tables',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false;
      });

    beforeEach(()=>{
        cy.visit('https://demoqa.com/webtables',{timeout:6000})
    })

    it('Tables columns and rows count',()=>{
        cy.get('[class="rt-table"]>.rt-tbody>[class="rt-tr-group"]').should('have.length',10)
        cy.get('[class="rt-table"]>.rt-thead>.rt-tr>.rt-th').should('have.length',7)
        
    })

    it('checking cell data from row',()=>{
        cy.get('[class="rt-table"]>.rt-tbody>.rt-tr-group:nth-child(3)>[role="row"]>div:nth-child(4)').contains('kierra@example.com')
    })
})