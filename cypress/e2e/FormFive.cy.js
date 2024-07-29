// cypress/integration/myTestSuite.spec.js
import { locators } from '../support/Constants';
import Forms from '../PageObjects/Form';

describe('forms', () => {
    before(() => {
        cy.visit(Cypress.env('BASE_URL'));
    });

  it('forms successful and invalid Cases', () => {
    cy.fixture('FormsData.json').then((data) => {
      const form = new Forms();

      // Successful case
      const { successCase } = data;

      // locators.contactForm.forEach((locator,index)=>{
      //   form.fillInputField(locator,successCase[index])
      // })
      form.fillInputField(locators.contactForm.userNameInput, successCase.username);
      form.fillInputField(locators.contactForm.emailInput, successCase.email);
      form.fillInputField(locators.contactForm.phoneNumberInput, successCase.phoneNumber);
      form.fillInputField(locators.contactForm.subjectInput, successCase.subject);
      form.fillInputField(locators.contactForm.messageInput, successCase.message);
      form.clickSubmit(locators.contactForm.submitButton);
      form.verifyForm(locators.contactForm.usernameVerification,successCase.username);
      cy.screenshot('success Data');

      cy.reload(); // Reload the page to reset the form

      // Failure case
      const { failureCase } = data;
      form.fillInputField(locators.contactForm.userNameInput, failureCase.username);
      form.fillInputField(locators.contactForm.emailInput, failureCase.email);
      form.fillInputField(locators.contactForm.phoneNumberInput, failureCase.phoneNumber);
      form.fillInputField(locators.contactForm.subjectInput, failureCase.subject);
      form.fillInputField(locators.contactForm.messageInput, failureCase.message);
      form.clickSubmit(locators.contactForm.submitButton);
      failureCase.errorMessages.forEach(eachMessage => {
        form.verifyErrorFileds(locators.contactForm.errorMessages,eachMessage);
    });
      cy.screenshot('Invalid Data');
    });
  });

 
});
