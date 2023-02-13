describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should display the running total when input received', () => {
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('.display').should('contain', '666')
  })

  it('should update and display the result of an operation', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '25')
  })

  it('should be able to chain multiple operations together', () => {
    cy.get('#number5').click();
    cy.get('#operator-add').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '20')
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

  it('should be able to display a negative number', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2')
  })

  it('should be able to display decimal numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1.5')
  })

  it('should display an error when attempting to divide by zero', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error: Cannot divide by zero')
  })
})