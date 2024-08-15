describe('Login Test', () => {
  it('should open the login page and log in', () => {
    cy.visit('https://www.edu.goit.global/account/login');
    cy.login('user888@gmail.com', '1234567890');
    cy.get('.css-7afvtf').click(); // Kliknięcie w prawym górnym rogu, aby otworzyć menu
    cy.contains('Log out').click(); // Wylogowanie
    cy.url().should('include', '/account/login'); // Sprawdzenie, czy wróciliśmy do strony logowania
  });
});
describe('Login Test 2', () => {
  it('Logs in and logs out successfully with different credentials', () => {
    cy.visit('https://www.edu.goit.global/account/login');
    cy.login('testowyqa@qa.team', 'QA!automation-1');
    cy.get('.css-7afvtf').click();
    cy.contains('Log out').click();

    cy.url().should('include', '/account/login');
  });
});
