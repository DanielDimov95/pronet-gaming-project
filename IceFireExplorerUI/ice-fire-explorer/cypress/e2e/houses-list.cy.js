describe('Houses List Page', () => {
  beforeEach(() => {
    window.localStorage.setItem('jwt_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE3NTAzNDgxMDMsImV4cCI6MTc1MDM1MTcwM30.UitAGFbHKBlwoMN6H1w3wiLqEatxR-0aZIAafb5iMRA');
    cy.visit('/houses');
  });
  
    it('should render the houses list', () => {
      cy.get('h2').contains('All Houses');
      cy.get('app-house-card').should('exist');
    });
  
    it('should filter houses by search', () => {
      cy.get('input[placeholder="Search by house name…"]').type('algood');
      cy.get('app-house-card').each(($el) => {
        cy.wrap($el).contains(/algood/i);
      });
    });
  
    it('should add and remove a favorite', () => {
      cy.get('app-house-card').first().find('button').click(); // Add to favorites
      cy.contains('Favorites').click();
      cy.get('app-house-card').should('have.length.at.least', 1);
      cy.get('app-house-card').first().find('button').click(); // Remove from favorites
      cy.get('app-house-card').should('have.length', 0);
    });
  
    it('should paginate', () => {
      cy.get('button').contains('Next').click();
      cy.get('span').contains(/Page 2/);
      cy.get('button').contains('Prev').click();
      cy.get('span').contains(/Page 1/);
    });

    it('should add a house to favorites from houses list and remove it from favorites page', () => {
      cy.get('app-house-card').first().find('button').click();
      cy.contains('Favorites').click();
      cy.get('app-house-card').should('have.length.at.least', 1);
      cy.get('app-house-card').first().find('button').click();
      cy.contains('No favorites yet.');
    });
  });