describe('Not Fur-gotten Home Page User Flow', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'POST',
        url: 'https://not-fur-gotten-be.herokuapp.com/graphql',
        headers: {
          'x-gql-operation-name': 'getAllPets',
        }
      },
      {
        fixture: 'petsForHomePage.json'
      }
    ).as('getAllPets');
  });

  it('should display all elements on the Home page', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@getAllPets')
      .get('h1')
      .contains('Not Fur-gotten')
      .get('p')
      .contains('Back to Home Page')
      .get('.hero-banner-text')
      .contains('Find a forever home for your best friend.')
      .get('.rehome-button')
      .contains('Rehome Your Pet')
      .get('.home-page-subheader')
      .contains('Pets Available For Adoption')
      .get('.pet-container').children()
      .should('have.length', 5);
  });

  it('should be able to navigate to the donation form from the home page', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@getAllPets')
      .get('.rehome-button').click();
  })

  it('should be able to navigate to a particular pet page on click', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@getAllPets')
      .get('a[href="/pet/1"]').click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/pet/1');
    })
  })
});
