
import Form from '../PageObjects/LoginPage'
import { locators } from '../support/Constants';

describe('forms', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('BASE_URL'));
    });

    it('form successfull case', () => {
        cy.fixture('FormsData.json').then((data) => {
            const form = new Form();
            const { successCase } = data;
            form.setUserName(locators.contactForm.userNameInput,successCase.username);
            form.setEmail(locators.contactForm.emailInput,successCase.email);
            form.setPhoneNumber(locators.contactForm.phoneNumberInput,successCase.phoneNumber);
            form.setSubject(locators.contactForm.subjectInput,successCase.subject);
            form.setMessage(locators.contactForm.messageInput,successCase.message);
            form.clickSubmit(locators.contactForm.submitButton);
            form.verifyForm(locators.contactForm.usernameVerification,successCase.username);
            
        });
    });
    it('form  invalid case', () => {
        cy.fixture('FormsData.json').then((data) => {
            const form = new Form();
            const { failureCase } = data;
            form.setUserName(locators.contactForm.userNameInput,failureCase.username);
            form.setEmail(locators.contactForm.emailInput,failureCase.email);
            form.setPhoneNumber(locators.contactForm.phoneNumberInput,failureCase.phoneNumber);
            form.setSubject(locators.contactForm.subjectInput,failureCase.subject);
            form.setMessage(locators.contactForm.messageInput,failureCase.message);
            form.clickSubmit(locators.contactForm.submitButton);
            failureCase.errorMessages.forEach(eachMessage => {
                form.verifyErrorFileds(locators.contactForm.errorMessages,eachMessage);
            });
        });
    });

  


});
