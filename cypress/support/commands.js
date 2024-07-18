// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import 'cypress-iframe';
// import '@4tw/cypress-drag-drop';

// require('@4tw/cypress-drag-drop')



Cypress.Commands.add('clickLink', (label) =>{
    cy.get('a').contains(label).click();

})

//Custom command for Overwriting existing contains command
// Cypress.Commands.overwriteQuery('contains',
//    (originalFn, subject, filter, text, options = {}) => {
//        // determine if a filter argument was passed
//        if (typeof text === 'object') {
//            options = text
//            text = filter
//            filter = undefined
//        }

//        options.matchCase = false

//        return originalFn(subject, filter, text, options)
//    }
// )

//Custom command for login
Cypress.Commands.add("loginapp", (email, password) => {
   
   cy.get('#Email').type(email);

   cy.get('#Password').type(password);
   cy.get("button[class='button-1 login-button']").click();
});


    Cypress.Commands.add("Loginapp", (email, password) => {
      
        cy.get('#username').type(email)
        
        
        cy.get('#password').type(password);
       cy.get('.btn__primary--large').type('{enter}')
        
       
     });
 

