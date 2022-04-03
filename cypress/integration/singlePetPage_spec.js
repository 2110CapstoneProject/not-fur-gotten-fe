import { getDefaultNormalizer } from "@testing-library/react";

describe('Pet Applications Component', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'POST',
        url: 'https://not-fur-gotten-be.herokuapp.com/graphql',
        headers: {
          'x-gql-operation-name': 'getPetById',
        },
      },
      {
        fixture: 'updatedApplications.json'
      }
    ).as('updatedApplications');

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
        fixture: 'singlePetPage.json'
      }
    ).as('getSinglePet');


    cy.visit('http://localhost:3000/pet/1/')
    cy.wait('@getSinglePet')
  });

  it('Should display the nav bar, title, and information about a pet', () => {
    cy.get('h1')
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
      .contains('Application to Adopt')
  })

  it('Should show owner information on click of Read More About the owner', () => {
    cy.get('.pet-owner-nav-link').click()
      .get('.pet-owner-nav-link')
      .contains('Go back to Clifford')
      .get('.single-pet-owner-name')
      .contains('Joe')
      .get('.owner-story')
      .contains('My owner is going into assisted living next month and he is worried about what will happen to me')
  })

  it('Upon button click, it should display the application modal for adopting the currently displayed pet', () => {
    cy.get('.modal')
      .should('not.exist')
      .get('button')
      .eq(1)
      .click()
      .get('.modal')
      .should('exist')
      .get('.form-title')
      .should('have.text', 'Application Form for Clifford')
      .get('h3')
      .should('have.text', 'Contact Information')
      .get('label')
      .contains('Full Name')
      .get('label')
      .contains('Email')
      .get('label')
      .contains('Tell the owner')
      .get('button')
      .contains('Submit')
  });

  it('Should submit an application', () => {
    cy.intercept(
      {
        method: 'POST',
        url: 'https://not-fur-gotten-be.herokuapp.com/graphql',
        headers: {
          'x-gql-operation-name': 'createApplication',
        }
      },
      {
        fixture: 'applicationSubmission.json'
      }
    ).as('applicationSubmission');

    cy.get('button')
      .eq(1)
      .click()
      .get('input[id=name]')
      .type('Loki')
      .get('input[id=email]')
      .type('loki66@gmail.com')
      .get('textarea[id=applicantDescription]')
      .type('I am a super cool guy and my brother is the best. We would take great care of Clifford.')
      .get('button')
      .contains('Submit')
      .click()
      .wait(['@applicationSubmission', '@updatedApplications'])
      .get('button')
      .contains('View Applications')
      .click()
      .get('.application-container')
      .children()
      .should('have.length', 2)
      .get('.application-container')
      .children()
      .last()
      .contains('Loki')
  })
})