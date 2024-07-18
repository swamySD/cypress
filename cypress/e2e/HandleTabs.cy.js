describe('HandleTabs',()=>{

    it.skip('Approach one',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('[href="/windows/new"]').invoke('removeAttr','target').click()
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        

        //operations
        cy.go('back')//back to parent tab
       

    })

    it('second approach',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('[href="/windows/new"]').then((el)=>{
            let url=el.prop('href')
            cy.visit(url)
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        
       cy.wait(5000)
        //operations
        cy.go('back')//back to parent tab
       

    })
})