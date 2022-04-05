describe('Error Component', () => {
  it('should display the nav bar and message', () => {
    cy.visit('http://localhost:3000/error')
      .get('header')
      .get('h1')
      .contains('Error Message TBD')
  })
})