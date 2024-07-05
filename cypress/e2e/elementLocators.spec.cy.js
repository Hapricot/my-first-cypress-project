describe('Element locator practice', () => {
    it('Can locate an element six different ways', () => {

        cy.visit('https://thinking-tester-contact-list.herokuapp.com')

        //locate the element by id
        cy.get('#email').type('alba1@fake.com')

        //locate the element by type
        cy.get("[type = 'password']").type('Atest123456')

        //locate the element by text
        cy.contains('Submit').click()

        //locate the element by class
        cy.get('.logout').click()

        //locate the element by css
        cy.get('input').first().type('alba1@fake.com')

        //locate the element by Xpath if xpath was supported
        //cy.get('//form/p[2]/input').type('Atest123456')

        //locate an element by automation id my app doesen't have any automation ids
        //cy.get('[data-cy="submit"]').click()


    })
})