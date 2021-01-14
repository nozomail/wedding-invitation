describe('Guest Names', () => {
  beforeEach(() => {
    cy.logout();
  });

  it('Guest 1', () => {
    cy.login(Cypress.env('TEST1_UID'));

    cy.visit('/#/');
    cy.wait(2000);
    cy.get('.CardEnvelope_guest').should('have.text', 'Mr. John &Mrs. Katherine Smith');

    cy.visit('/#/invitation');
    cy.get('.InvitationCard_guest').should('have.text', 'John, Katherine&family');
  });

  it('Guest 2', () => {
    cy.login(Cypress.env('TEST2_UID'));

    cy.visit('/#/');
    cy.wait(2000);
    cy.get('.CardEnvelope_guest').should('have.text', 'Mr. Nathan Williams& Ms. Sally Brown');

    cy.visit('/#/invitation');
    cy.get('.InvitationCard_guest').should('have.text', 'Nathan&Sally');
  });
});
