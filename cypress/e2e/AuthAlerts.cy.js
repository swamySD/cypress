

describe('Auth alerts',()=>{

    it('auth-alerts',()=>{


        // cy.visit('https://the-internet.herokuapp.com/basic_auth',
        //    {auth: {username:'admin',password:'admin'} }
        // )

        // cy.get('#content > div > p').should('have.contain','Congratulations')

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('#content > div > p').should('have.contain','Congratulations')
    })
})