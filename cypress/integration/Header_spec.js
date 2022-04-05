describe('Header shows at the top of the application', () => {
  it('should display logo on home page', () => {
    cy.visit('http://localhost:3000/')
      .get('.logo')

  })
  it('should be able to navigate back to home page from individual pet page using back to home link', () => {
    cy.visit('http://localhost:3000/pet/1')
      .get('.nav-link').contains('Back to Home').click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/');
    })
  })

  it('should be able to navigate back to pet page from pet applications', () => {
    cy.visit('http://localhost:3000/pet/1/applications')
    .get('.nav-link').contains('Back to Clifford').click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/pet/1');    
    })
  }) 

  it('should be able to navigate back to home using page logo', () => {
    cy.visit('http://localhost:3000/pet/1/applications')
    .get('.logo').click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/');    
    })
  })

  it('should be able to navigate back to home using the logo from error page', () => {
    cy.visit('http://localhost:3000/asdfa')
    .get('.logo').click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/');    
    })
  })

})