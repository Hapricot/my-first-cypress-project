describe('Delete Contact Test', () => {
    it('Can delete a contact', () => {

      let random = Math.floor(Math.random() * 1000)

      cy.login()
      cy.addContact(random)

      cy.contains('User' + random + ' Test').click()
      cy.deleteContact()
      cy.get('.contactTableBodyRow').contains('User1' + random + ' Test1').should('not.exist')
    })

    it('Can delete another contact', () => {

      let random = Math.floor(Math.random() * 1000)

      cy.login()
      cy.addFullContact(random)

      cy.contains('User' + random + ' Test').click()
      cy.deleteContact()
      cy.get('.contactTableBodyRow').contains('User' + random + ' Test').should('not.exist')
    })
  })