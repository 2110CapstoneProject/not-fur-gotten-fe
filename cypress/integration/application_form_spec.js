describe('Applicant Form Modal', () => {
    it('Should display the form on the page', () => {
        cy.visit('http://localhost:3000/application')
            .get('h2')
            .should('have.text', 'Application Form')
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
});