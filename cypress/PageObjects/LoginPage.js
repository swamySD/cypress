class Form{
    setUserName(locator,username){
        cy.get(locator).type(username)
    }
    setEmail(locator,email){
        cy.get(locator).type(email)
    }
    setPhoneNumber(locator,phoneNumber){
        cy.get(locator).type(phoneNumber)
    }
   
    setSubject(locator,subject){
        cy.get(locator).type(subject)
    }
    setMessage(locator,message){
        cy.get(locator).type(message)
    }
    clickSubmit(locator){
        cy.get(locator).click()
    }
    verifyForm(locator,username){
        cy.get(locator).should('have.text',`Thanks for getting in touch ${username}!`)
    }

  
    verifyErrorFileds(locator,message){
        cy.get(locator).contains(message)
    }


}

export default Form