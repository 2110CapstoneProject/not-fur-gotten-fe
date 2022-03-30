describe('Error Component', () => {
  it('should display the nav bar and message', () => {
    cy.visit('http://localhost:3000/error')
      .get('h1')
      .contains('Not Fur-gotten')
      .get('p')
      .contains('Back to Home Page')
      .get('h1')
      .contains('Error Message TBD')
  })
})