

describe("check UI Elements",()=>{

    beforeEach(()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
    })

    // it("Checking radio buttons",()=>{
    //     cy.get('#product_549').should('be.visible')
    //     cy.get('#product_550').should('be.visible')
    //     cy.get('#product_551').should('be.visible')
    //     cy.get('#product_3186').should('be.visible')
    //     cy.get('#product_7441').should('be.visible')

    //     cy.get("#product_549").check().should('be.checked')
    //     cy.get("#product_550").should('not.be.checked')

    //     cy.get("#product_550").check().should('be.checked')
    //     cy.get("#product_549").should('not.be.checked')
    // })

    // it('Checking initial visiblility and state of radio buttons ',()=>{
     
    //     const radioButtons=['#product_549','#product_550','#product_551','#product_3186','#product_7441']
    //     // Check all radio buttons are visible
    //     radioButtons.forEach((selector)=>{
    //         cy.get(selector).should('be.visible')
    //     })
    //     // Check the initial state: the first radio button is checked
    //     cy.get('#product_549').check().should('be.checked');

    //       // Ensure other radio buttons are not checked initially
    //     radioButtons.slice(1).forEach((selector)=>{
    //         cy.get(selector).should('not.be.checked')
    //     })

    // })

    // it('checking the radio button selection behavior',()=>{
    //     const radioButtons=['#product_549','#product_550','#product_551','#product_3186','#product_7441']
    //      // Select each radio button and ensure it's the only one checked


        //  radioButtons.forEach((selector,index)=>{
        //     // Ensure other radio buttons are not checked
        //     cy.get(selector).check().should('be.checked')
        //     radioButtons.filter((_,i)=>i !== index).forEach((selector)=>{
        //         cy.get(selector).should('not.be.checked')
        //     })

        //  })

    // })

    // it("Checking if radio button retains its state after reload", () => {
    //     // Check a radio button and then reload the page to ensure state is retained
    //     cy.get("#product_550").check().should('be.checked')
    //     cy.reload()
    //     cy.get("#product_550").should('be.checked')
    //     // Ensure other radio buttons are not checked after reload
    //     cy.get('#product_549').should('not.be.checked')
    //     cy.get('#product_551').should('not.be.checked')
    //     cy.get('#product_3186').should('not.be.checked')
    //     cy.get('#product_7441').should('not.be.checked')
    // })

    it('checking radio buttons',()=>{
        //checking all the radio buttons are visible

        const radioButtons=['#deliverymethod_1','#deliverymethod_2','#deliverymethod_3']
        
        //checking all radio buttons are visible

        radioButtons.forEach((selector)=>{
            cy.get(selector).should('be.visible')
        })
        //check all radio buttons are not selected initally
         radioButtons.forEach((selector)=>{
            cy.get(selector).should('not.be.checked')
        })

        //for checking radio buttons behavior
        // it will check radio button if it check and will again loop through deleting the
        //chcecked item and checking for the remainig buttons should always stay in unchecked
        radioButtons.forEach((selector,index)=>{
            cy.get(selector).check().should('be.checked')

            radioButtons.filter((_,i)=> i !== index).forEach((unselectedId)=>{
                cy.get(unselectedId).should('not.be.checked')
            })
        })

       it('checking the radio buttons state after reload',()=>{
          //for checking radio buttons after reload
          cy.get('#deliverymethod_2').check().should('be.checked')
          cy.reload()
          cy.get('#deliverymethod_2').should('be.checked')
          cy.get('#deliverymethod_1').should('not.be.checked')
          cy.get('#deliverymethod_3').should('not.be.checked')
       })

  
    })
    

    //checking checkboxes

    

 


   
})