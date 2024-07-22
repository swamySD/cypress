describe('MyTestSuite',()=>{
    
 let userData;
    before(()=>{
        cy.fixture('orange').then((data)=>{
            userData=data
        })
    })
    it('FixturesDemoTest',()=>{
           cy.visit('https://www.linkedin.com/feed/')
        // cy.get('#username').type(userData.username)
        // cy.get('#password').type(userData.password)
        //    cy.get('#username').type('9963684670')
        // cy.get('#password').type('swamy123')

        // cy.get('.btn__primary--large').type('{enter}')
        // cy.wait(30000)
        // cy.get(':nth-child(3) > .app-aware-link > .t-12',{timeout:300000}).should('have.text','jobs')
        // cy.get('#news-module__title > .t-20').should('have.text',"LinkedIn News")
        cy.Loginapp('9963684670','swamy123')
        cy.wait(40000)
        cy.get('#news-module__title > .t-20',{timeout:60000}).should('have.text',"LinkedIn News")
    })

    it.only('data driven test',()=>{
        cy.fixture('orange').then((data)=>{
            cy.visit('https://www.linkedin.com/feed')
            data.forEach((userdata)=>{
                cy.get('#username').type(userdata.username)
                cy.get('#password').type(userdata.password)
                cy.get('.btn__primary--large').type('{enter}')

                if(userdata.username == '9963684670' && userdata.password == "Swamy123"){
                    cy.wait(40000)
                    cy.get('#news-module__title > .t-20',{timeout:60000}).should('have.text',"LinkedIn News")
                    cy.get('#ember18').click() 
                    cy.get('.global-nav__secondary-item--divider > .global-nav__secondary-link').click()
                
                }else{
                    cy.wait(6000)
                   cy.get('#error-for-username').should('have.text','Please enter a valid username')
                   cy.reload()
                }
            })
        })
    })

})