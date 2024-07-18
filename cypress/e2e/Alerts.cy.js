



describe('alerts',()=>{

    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    //javascipt Alert:It will have some text and an 'ok' button
        it('js Alert',()=>{
            
            cy.get('[onclick="jsAlert()"]').click()
            cy.on('window:alert',(t)=>{
                expect(t).to.contains('I am a JS Alert')
            })

            //here alert window automatically closed by cypress
            // cy.get('#result').contains('You successfully clicked an alert')
            cy.get('#result').should('have.text','You successfully clicked an alert')
    })


    //javascript confirmation alert :it will have ok and cancel buttons
    it('confirmation alert',()=>{
      cy.get('[onclick="jsConfirm()"]').click()
      //alert will automatically close the alert
      cy.on('window:confirm',(t)=>{
        expect(t).to.contains('I am a JS Confirm')
      })
    //automatically closed by cypress where internally maintined by ok
      cy.get('#result').should('have.text','You clicked: Ok')
    })

//js alert with ok and cancel buttons
    it('confirmation alert-cancel button',()=>{
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
        cy.on('window:confirm',()=>false)
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    //js prompt alert it will have some text wwith a text box for user input along with 'OK
    it('confirm with text area input prompt alert',()=>{
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        })
        cy.get('[onclick="jsPrompt()"]').click()
        //cypress will automatically closes the prompted message
        // cy.on('window:prompt',()=>false)
        cy.get('#result').should('have.text',"You entered: welcome")

    })

    //js authenticated Alert

    it('Authenticated alert',()=>{
        
    })


})