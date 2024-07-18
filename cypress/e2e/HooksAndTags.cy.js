//before
//after
//beforeEach
//AfterEach

describe('Search',()=>{

before(()=>{
    cy.log(' Launch app')
})

beforeEach(()=>{
    cy.log('Log into the application')
})

after(()=>{
    cy.log('Log out of the appliaction')
})

afterEach(()=>{
    cy.log('Close app')
})

    it('search',()=>{
        cy.log('**** searching ****')
    })

    it('advanced search',()=>{
        cy.log("***** advanced search ")
    })
})