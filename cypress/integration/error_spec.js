describe('Error Component', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'POST',
        url: 'https://not-fur-gotten-be.herokuapp.com/graphql',
        headers: {
          'x-gql-operation-name': 'getAllPets',
        },
        times: 1
      },
      {
        "errors": [
          {
            "message": "Parse error on \"getPetById\" (IDENTIFIER) at [2, 3]",
            "locations": [
              {
                "line": 2,
                "column": 3
              }
            ]
          }
        ]
      }
    ).as('getAllPets');
  });
  
  it('should display an error message when page is not found', () => {
    cy.visit('http://localhost:3000/error')
      .get('header')
      .get('.error-message')
      .contains('This page cannot be found.')
      .get('.error-button')
  })

  it('should display a error message when an error occurs with the application', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@getAllPets')
      .get('header')
      .get('.error-message')
      .contains('Something went wrong. Please reload the page and try again.')
      .get('.error-button').click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/');
    });

  })
})