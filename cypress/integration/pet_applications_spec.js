describe('Pet Applications Component', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'POST',
        url: 'https://not-fur-gotten-be.herokuapp.com/graphql',
        headers: {
          'x-gql-operation-name': 'getPetById',
        }
      },
      {
        fixture: 'zeroPetApplications.json'
      }
    ).as('zeroPetApplications');

    cy.intercept(
      {
        method: 'POST',
        url: 'https://not-fur-gotten-be.herokuapp.com/graphql',
        headers: {
          'x-gql-operation-name': 'getPetById',
        },
        times: 1
      },
      {
        fixture: 'petApplicationsPage.json'
      },
    ).as('singlePetApplications');

  });


  it('Should display the nav bar, title, and applications for a pet', () => {
    cy.visit('http://localhost:3000/pet/1/applications')
    cy.wait('@singlePetApplications')
      .get('h1')
      .contains('Not Fur-gotten')
      .get('p')
      .contains('Back to Home Page')
      .get('.application-title')
      .contains('Applications for Godzilla')
      .get('.application-container')
      .children()
      .should('have.length', 2)
      .contains('Lenny')
      .get('p')
      .contains('lenny@gmail.com')
      .get('p')
      .contains('Applicant Introduction:')
      .get('p')
      .contains('I love cats')
  })
})
