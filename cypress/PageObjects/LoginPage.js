class Login{
    setUserName(username){
        cy.get('[data-testid="ContactName"]').type(username)
    }
    setEmail(email){
        cy.get('[data-testid="ContactEmail"]').type(email)
    }
    setPhoneNumber(phoneNumber){
        cy.get('[data-testid="ContactPhone"]').type(phoneNumber)
    }
   
    setSubject(subject){
        cy.get('[data-testid="ContactSubject"]').type(subject)
    }
    setMessage(message){
        cy.get('[data-testid="ContactDescription"]').type(message)
    }
    clickSubmit(){
        cy.get('[class="btn btn-outline-primary float-right"]').click()
    }
    verifyLogin(username){
        cy.get('div[class="col-sm-5"] div h2').should('have.text',`Thanks for getting in touch ${username}!`)
    }

  
    verifyFileds(message){
        cy.get('[class="alert alert-danger"]>p').contains(message)
    }


}

export default Login