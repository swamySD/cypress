

class Forms {
  fillInputField(selector, value) {
    cy.get(selector).clear().type(value); // Clear the field before typing
  }

  clickSubmit(locator) {
    cy.get(locator).click();
  }

  verifyForm(locator,username){
    cy.get(locator).should('have.text',`Thanks for getting in touch ${username}!`)
}

verifyErrorFileds(locator,message){
  cy.get(locator).contains(message)
}
}

export default Forms;
