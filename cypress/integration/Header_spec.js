describe('Header shows at the top of the home page', () => {
  it('should display application name and navigation link', () => {
    cy.visit('http://localhost:3000/')
      .get('h1').contains('Not Fur-gotten')
      .get('p').contains('Back to Home Page')
  })

})