

describe('Dropdowns',()=>{


    it.skip('dropdown with select',()=>{
        cy.visit('https://zoho.com/commerce/free-demo.html')
        //here dropdown after slecting Italy the value should have value Italy
        cy.get('#zcf_address_country').select('Italy').should('have.value',"Italy")
    })

    //drop down with aleready slected value

    it.skip('Dropwith initial slected value',()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        // cy.get("#select2-billing_country-container")
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type('Italy').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Italy')
    })
   
    //dropdown with auto suggestions
        it.skip('Auto sugesstions',()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('India')
        cy.get('.suggestion-title').should('have.length',6).contains('national cricket team').click()
    })

    // it('Dynamic suggestions',()=>{
    //     cy.visit('https://google.com')
    //     cy.get("[title='Search']").type('cypress automation')
    //     cy.get('div.wM6W7d>span').should('have.length',13)
    //     cy.get('div.wM6W7d>span').each(($el,index,$list)=>{
    //       if ($el.text() ==='cypress automation testing'){
    //         cy.wrap($el).click()
    //       }
    //     })

    //     cy.get('[title="Search"]').should('have.value','cypress automation testing')
        
    // })
  
    it("Dynamic suggestions with length assertion", () => {
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('cypress automation')

        // Wait for suggestions to load and assert their length is 13
        cy.get('div.wM6W7d > span',{timeout:10000}).should('have.length', 13)
        cy.get('div.wM6W7d > span').each(($el) => {
            if ($el.text() === 'cypress automation testing') {
                cy.wrap($el).click()
            }
        })
    })


})