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
        fixture: 'getNoPets.json'
      }
    ).as('noPets');

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
        fixture: 'newPetHomePage.json'
      }
    ).as('newPetAdded');

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
        fixture: 'petsForHomePage.json'
      }
    ).as('getAllPets');
  });

  it('should display all elements on the Home page', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@getAllPets')
      .get('header')
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
      .get('.rehome-button').click()
      .get('.modal')
      .get('.form-title')
      .should('have.text', 'Donation Form')
      .get('h3')
      .contains("Owner Information")
      .get('label')
      .contains('Full Name')
      .get('label')
      .contains('Email')
      .get('label')
      .contains('Owner Story')
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
  });

  it('should be able to fill out the form and submit a pet for adoption', () => {
    cy.intercept('POST', 'https://api.cloudinary.com/v1_1/dzfyvxcwi/upload', { fixture: 'urlForPet.json' }).as('restfulPOST')
    cy.intercept(
      {
        method: 'POST',
        url: 'https://not-fur-gotten-be.herokuapp.com/graphql',
        headers: {
          'x-gql-operation-name': 'createPet',
        }
      },
      {
        fixture: 'petSubmission.json'
      }
    ).as('petSubmission');
    cy.visit('http://localhost:3000/')
    cy.wait('@getAllPets')
      .get('.rehome-button').click()
      .get('input[id="ownerName"]')
      .type('Jack Sparrow')
      .get('input[id="ownerEmail"]')
      .type('captainsparrow@blackpearl.net')
      .get('textarea[id="ownerStory"]')
      .type('I am a seafairing pirate, and need a new home for my undead monkey.')
      .get('input[id="petName"]')
      .type('Jack')
      .get('input[id="age"]')
      .type('7')
      .get('input[id="type"]')
      .type('Monkey')
      .get('select[id="gender"]')
      .select('Male')
      .get('textarea[id="petDescription"]')
      .type('He\'s a little trickster. Keep an eye on your treasures, he has sticky fingers!')
      .get('input[type="file"]')
      .selectFile('src/test-file-image.jpg')
      .get('.submit-button').click()
      .wait(['@restfulPOST', '@newPetAdded', '@petSubmission'])
      .get('img[alt="Jack"]')
  });

  it('Should display a message when no pets are available for adoption', () => {
    cy.visit('http://localhost:3000/')
    cy.reload()
    cy.reload()
    cy.wait('@noPets')
      .get('.no-results').contains('No pets are currently up for adoption.')
  })

  it('should be able to navigate to a particular pet page on click', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@getAllPets')
      .get('a[href="/pet/1"]').click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/pet/1');
    });
  });

});
