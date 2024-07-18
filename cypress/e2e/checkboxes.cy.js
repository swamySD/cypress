// // describe('checkboxes',()=>{
// //     beforeEach(()=>{
// //         cy.visit('https://www.flipkart.com/')
// //     })

// //     it('checkboxes',()=>{
// //         cy.xpath("img[alt='Image'][src='https://rukminim2.flixcart.com/image/70/70/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=90']").click()
// //         cy.xpath("//div[@title='realme']//input[@type='checkbox']").should('be.visible')
// //         //selecting the single box element
// //         cy.xpath("//div[@title='realme']//input[@type='checkbox']").check('be.checked')
// //         //checking for the unselecting checkbox
// //         cy.xpath("//div[@title='realme']//input[@type='checkbox']").uncheck('not.be.checked')
// //     })
// // })

// // describe('checkboxes', () => {
// //     beforeEach(() => {
// //         cy.visit('https://www.flipkart.com/')
// //         // cy.xpath("//button[contains(text(), '✕')]").click() // Close the login pop-up
// //     })

// //     it('checkboxes', () => {
// //         cy.xpath("//img[@alt='Image' and @src='https://rukminim2.flixcart.com/image/70/70/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=90']").click()
// //         cy.xpath("//div[@title='realme']//input[@type='checkbox']").should('be.visible')
        
// //         // Selecting the single box element
// //         cy.xpath("//div[@title='realme']//input[@type='checkbox']").check({ force: true }).should('be.checked')

// //         // Checking for the unselecting checkbox
// //         cy.xpath("//div[@title='realme']//input[@type='checkbox']").uncheck({ force: true }).should('not.be.checked')
// //     })
// // })

// describe('checkboxes', () => {
//     beforeEach(() => {
//         cy.visit('https://www.flipkart.com/')
//   // Close the login pop-up
//     })

//     it('checkboxes', () => {
//         // Adjust the XPath to be more flexible and add a wait to ensure the image loads
//         cy.xpath("//body/div[@id='container']/div/div[@class='q8WwEU']/div[@class='_3zsGrb']/div[@class='_2-LWwB']/div/div[@class='css-175oi2r']/div[@class='css-175oi2r']/div[@class='css-175oi2r r-13awgt0 r-1iqfa7g r-60vfwk']/div[@class='css-175oi2r r-13awgt0 r-1iqfa7g r-60vfwk']/div[@class='_1ui5b4']/div[@class='yAlKeh']/div[@class='_2L0uxW']/div[@class='_3116_u']/div[@class='_1yQHx8 _2UnIQ_ _3ak8Rd _1kAmyc']/div/div[@class='css-175oi2r r-13awgt0 r-eqz5dr']/div/div/div/div[@class='_3n8fnawo _3n8fnaoj _3n8fnagd _3n8fna1 _3n8fna87 _1i2djtb9 _1i2djt0']/div/div[1]/div[1]/div[1]/a[1]/div[1]/div[1]").click()
        
//         // Wait for the checkbox to be visible before interacting
//         cy.xpath("//div[@title='realme']//input[@type='checkbox']").should('be.visible')
        
//         // Selecting the single box element
//         cy.xpath("//div[@title='realme']//input[@type='checkbox']").check({ force: true }).should('be.checked')

//         // Checking for the unselecting checkbox
//         cy.xpath("//div[@title='realme']//input[@type='checkbox']").uncheck({ force: true }).should('not.be.checked')
//     })
// })


// describe("checkboxes",()=>{


//     it('checkboxes',()=>{
//         cy.visit('https://thehouseofrare.com/pages/rare-rabbit')
//         cy.get("[name='q']").type('shirst').click()
//         cy.get("#argoid-facets-toggle--desktop").click()
//         cy.get("[value='shirt']")
//     })

// })

describe("checkboxes", () => {

    // Ignore uncaught exceptions from the application under test
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
    })

    it('checkboxes', () => {
        cy.visit('https://thehouseofrare.com/pages/rare-rabbit')
        
        // Using {force: true} to type into the hidden input element
        cy.get("[name='q']").type('shirts', { force: true }).click({ force: true })
        
        // Increase timeout for the next element
        cy.get("#argoid-facets-toggle--desktop").click()
        
        cy.get("input[type='checkbox'][class='argoid-facets-values__list-item--checkbox'][value='shirt']")
            .should('be.visible')
    })

})

