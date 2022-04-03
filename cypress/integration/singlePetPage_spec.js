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
        fixture: 'singlePetPage.json'
      }
    ).as('getSinglePet');
  });

  it('Should display the nav bar, title, and applications for a pet', () => {
    cy.visit('http://localhost:3000/pet/1/')
    cy.wait('@getSinglePet')
      .get('h1')
      .contains('Not Fur-gotten')
      .get('p')
      .contains('Back to Home Page')
      .get('.about-owner-nav')
      .contains('Read More About the Owner »')
      .get('.single-pet-owner-name')
      .contains('Clifford')
      .get('.single-pet-age')
      .contains('2 years old')
      .get('.single-pet-gender')
      .contains('Male')
      .get('.single-pet-type')
      .contains('dog')
      .get('.single-pet-description')
      .contains("Big Red Dog, likes kids")
      .get('img')
      .should('exist')
      .get('.view-app-button')
      .contains('View Applications')
      .get('.submit-app-button') 
      .contains('Submit Application')
  })

  it('Should show owner information on click of Read More About the owner', () => {
    cy.visit('http://localhost:3000/pet/1/')
    cy.wait('@getSinglePet')
    .get('.pet-owner-nav-link').click()
    .get('.pet-owner-nav-link')
    .contains('Go back to Clifford')
    .get('.single-pet-owner-name')
    .contains('Joe')
    .get('.owner-story')
    .contains('My owner is going into assisted living next month and he is worried about what will happen to me')
  })
})