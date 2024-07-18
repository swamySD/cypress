describe('Handle Tables',()=>{
  
    beforeEach("Login", () => {
        cy.visit("https://demo.opencart.com/admin/index.php")
     
        // cy.get("#input-username").type("demo")
        // cy.get("#input-password").type("demo")
        cy.get("[type='submit']").click()

        cy.get("#menu-customer>a").click()
        cy.get("#menu-customer>ul>li:first-child").click()
    })

    it.only('check number Rows & columns',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', 10)
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', 7)
    })

    it('Check cell data from specific row & column',()=>{

    })

    it('Read all the rows & columns data in the first page',()=>{

    })
})