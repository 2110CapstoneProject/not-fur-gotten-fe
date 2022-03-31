describe('Donation Form Modal', () => {
  it('Should display the form on the page', () => {
    cy.visit('http://localhost:3000/donation')
      .get('h2')
      .should('have.text', 'Donation Form')
      .get('h3') 
      .contains("Owner Information")
      .get('label')
      .contains('Full Name')
      .get('label')
      .contains('Email')
      .get('label')
      .contains('Owner Story *Optional*')
      .get('h3')
      .contains('Pet Information')
      .get('label')
      .contains('Pet Name')
      .get('label')
      .contains('Age (years)')
      .get('label')
      .contains('Type')
      .get('label')
      .contains('Gender')
      .get('label')
      .contains('Description')
      .get('label')
      .contains('Add an image of your pet:')
      .get('[data-testid="image-upload"]')
      .should('exist')
      .get('button')
      .contains('Submit')
  })
})