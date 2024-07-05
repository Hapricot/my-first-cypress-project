describe('Update Contact Test', () => {

    beforeEach(() => {
        cy.login()
    })
    
        it('Can update a new contact', () => {

        let random = Math.floor(Math.random() * 1000)

        cy.addContact(random)
        cy.contains('User' + random + ' Test').click()
        cy.get('#edit-contact').click()
        cy.get('#firstName').clear().type('Update' + random)
        cy.get('#lastName').clear().type('Test')
        cy.get('#birthdate').clear().type('2010-03-05')
        cy.get('#email').clear().type('user3test@fake.com')
        cy.get('#phone').clear().type('655898525')
        cy.get('#submit').   click()
        cy.get('#return').click()

        cy.contains('Update' + random + ' Test').click()
        cy.get('#firstName').should('contain', `Update${random}`)
        cy.get('#lastName').should('contain', 'Test')
        cy.get('#birthdate').should('contain', '2010-03-05')
        cy.get('#email').should('contain', 'user3test@fake.com')
        cy.get('#phone').should('contain', '655898525')

        })

        xit('Returns and error when required field is missing', () => {

            cy.get('#add-contact').click()
            cy.get('#firstName').type('Cristina')
            cy.get('#submit').click()
            cy.get('#error').should('contain', 'Contact validation failed: lastName: Path `lastName` is required.')
        })

        it('Returns error when birthdate validation fails', () => {

            let random = Math.floor(Math.random() * 1000)

            cy.addContact(random)
            cy.contains('User' + random + ' Test').click()
            cy.get('#edit-contact').click()
            cy.get('#birthdate').clear().type('05-03-2001')
            cy.get('#submit').click()
            cy.get('#error').should('contain', 'Validation failed: birthdate: Birthdate is invalid')
            cy.get('#cancel').click()

        })

        // it('Can update another contact', () => {

        //   let random = Math.floor(Math.random() * 1000)

        //   cy.login()
        //   cy.addFullContact(random)
        //   cy.deleteContact()
        // })
    
    afterEach(() => {
        cy.deleteContact()
    })
  })