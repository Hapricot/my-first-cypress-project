describe('Delete Contact Test', () => {
    it('Can delete a contact', () => {

      let random = Math.floor(Math.random() * 1000)

      cy.visit('https://thinking-tester-contact-list.herokuapp.com')
      cy.get('#email').type('alba1@fake.com')
      cy.get('#password').type('Atest123456')
      cy.get('#submit').click()
      cy.get('#add-contact').click()
      cy.get('#firstName').type('User1' + random)
      cy.get('#lastName').type('Test1')
      cy.get('#birthdate').type('2000-03-06')
      cy.get('#email').type('user1test@fake.com')
      cy.get('#phone').type('622365698')
      cy.get('#submit').click()

      cy.contains('User1' + random + ' Test1').click()
      cy.get('#delete').click()
      cy.on('window:confirm', () => true)
      cy.get('.contactTableBodyRow').contains('User1' + random + ' Test1').should('not.exist')
    })

    it('Can delete another contact', () => {

      let random = Math.floor(Math.random() * 1000)

      cy.visit('https://thinking-tester-contact-list.herokuapp.com')
      cy.get('#email').type('alba1@fake.com')
      cy.get('#password').type('Atest123456')
      cy.get('#submit').click()
      cy.get('#add-contact').click()
      cy.get('#firstName').type('User2' + random)
      cy.get('#lastName').type('Test2')
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

      cy.contains('User2' + random + ' Test2').click()
      cy.get('#delete').click()
      cy.on('window:confirm', () => true)
      cy.get('.contactTableBodyRow').contains('User2' + random + ' Test2').should('not.exist')
    })
  })