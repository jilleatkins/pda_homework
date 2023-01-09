describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should display the running total', () => {
    cy.get('#number2').click();
    cy.get('#number6').click();
    cy.get('.display').should('contain', '26')
  })

  it('should display the update result of an operation', () => {
    cy.get('#number7').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('.display').should('contain', '14')
  })

  it('should be able to chain together multiple operations', () => {
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '15')
  })

  it('should be able to display large numbers', () => {
    cy.get('#number8').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number8').click();
    cy.get('#number1').click();
    cy.get('#number3').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '8008135')
  })

  it('should be able to display decimal numbers', () => {
    cy.get('#number8').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8.1')
  })

  it('should be able to display negative numbers', () => {
    cy.get('#number8').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })

  it('should display an error when attempting to divide by zero', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error: Cannot divide by zero')
  })
})