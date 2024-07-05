describe('Add Contact Test', () => {
    it('Can add a new contact', () => {

      let random = Math.floor(Math.random() * 1000)

      cy.login()
      cy.addContact(random)

      cy.contains('User' + random + ' Test').click()
      cy.get('#firstName').should('contain', `User${random}`)
      cy.get('#lastName').should('contain', 'Test')
      cy.get('#birthdate').should('contain', '2000-03-06')
      cy.get('#email').should('contain', 'user1test@fake.com')
      cy.get('#phone').should('contain', '622365698')

      cy.deleteContact()
    })

    it('Can add another contact', () => {

      let random = Math.floor(Math.random() * 1000)

      cy.login()
      cy.addFullContact(random)
      cy.deleteContact()
    })
  })