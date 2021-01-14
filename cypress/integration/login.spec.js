describe('Login', () => {
  beforeEach(() => {
    cy.logout();
  });

  it('fails logging in with wrong email ', () => {
    cy.visit('login');

    cy.get('input[type=email]').type(Cypress.env('TEST1_EMAIL'));
    cy.get('input[type=password]').type(`010120{enter}`);

    cy.get('.u-text-red').should('contain', '.');
    cy.url().should('include', 'login');
  });

  it('fails logging in with wrong password ', () => {
    cy.visit('/#/login');

    cy.get('input[type=email]').type(Cypress.env('TEST1_EMAIL'));
    cy.get('input[type=password]').type(`10120{enter}`);

    cy.get('.u-text-red').should('contain', '.');
    cy.url().should('include', 'login');
  });

  it('logs in successfully', () => {
    cy.visit('/#/login');

    cy.get('input[type=email]').type(Cypress.env('TEST1_EMAIL'));
    cy.get('input[type=password]').type(`010120{enter}`);

    cy.get('.u-text-red').should('not.contain', '.');
    cy.url().should('not.include', 'login');
    cy.get('.Envelope').should('exist');
  });
});
