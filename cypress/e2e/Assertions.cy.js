


describe("Assertions demo",()=>{

it("implicit assertions",()=>{
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.url().should('include','orangehrmlive.com')//here checking some part of the url
  //here the visted url should be equal to provided url with eq keyword
  cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  cy.url().should('not.contain','orangehrms')
  .should('include','opensource-demo')

  cy.title().should('include','Orange')
  .and('eq','OrangeHRM')
  cy.get('.orangehrm-login-branding > img').should('be.visible')
  .and('exist')
  cy.get('[name="username"]').type('Admin')
  cy.get('[name="username"]').should('have.value','Admin')
})

// it('implicit assertions',()=>{
//   cy.visit('https://github.com/kumarswa')

//   cy.url().should('include','github.com/kumar')
//   .should('eq','https://github.com/kumarswa')
//   .should('not.contain','kumarswamy')
//     .should('contain','kumarswa')
  

// })
 

it('explicit assertions',()=>{
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('[name="username"]').type('Admin')
  cy.get('[name="password"]').type('admin123')
  cy.get('[type=submit]').click()

  let expectedName="kishn Ahmed"

cy.get(".oxd-userdropdown-name").then((x)=>{
 let actualName=x.text()

 //BDD type of assertion
  expect(actualName).to.equal(expectedName)
  expect(actualName).to.not.equal(expectedName)
   //TDD type of assertions
  //  assert.equal(actualName,expectedName)
  //  assert.notEqual(actualName,expectedName)
   
  
})
})


})