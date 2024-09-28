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
require('cypress-downloadfile/lib/downloadFileCommand');

Cypress.Commands.add("login", (url, username, password) => {
  cy.visit(url);
  cy.get('[placeholder="Username"]').type(username);
  cy.get('[placeholder="Password"]').type(password);
  cy.get(".orangehrm-login-button").click();
});

Cypress.Commands.add("selectDate", (selector, date, month, year) => {
 cy.get()
});
