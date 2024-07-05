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

Cypress.Commands.add('login', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com')
    cy.get('#email').type('alba1@fake.com')
    cy.get('#password').type('Atest123456')
    cy.get('#submit').click()
})

Cypress.Commands.add('addFullContact', (random) => {
    cy.get('#add-contact').click()
    cy.get('#firstName').type('User' + random)
    cy.get('#lastName').type('Test')
    cy.get('#birthdate').type('2000-10-28')
    cy.get('#email').type('user2test@fake.com')
    cy.get('#phone').type('665983655')
    cy.get('#street1').type('Aqui')
    cy.get('#street2').type('2')
    cy.get('#city').type('Lejos')
    cy.get('#stateProvince').type('de Aqui')
    cy.get('#postalCode').type('56002')
    cy.get('#country').type('Fuera')
    cy.get('#submit').click()
})

Cypress.Commands.add('addContact', (random) => {
    cy.get('#add-contact').click()
    cy.get('#firstName').type('User' + random)
    cy.get('#lastName').type('Test')
    cy.get('#birthdate').type('2000-03-06')
    cy.get('#email').type('user1test@fake.com')
    cy.get('#phone').type('622365698')
    cy.get('#submit').click()
})

Cypress.Commands.add('deleteContact', () => {
    cy.get('#delete').click()
    cy.on('window:confirm', () => true)
})
