describe("Reg form", () => {
  const clickButtons = (values: string): void => {
    const charFromValues = values.split("");
    charFromValues.forEach((char) => {
      cy.get("button").contains(char).click();
    })
  };

  const calculate = (expression: string, expectedResult: string): void => {
    clickButtons(expression);
    cy.get(Cypress.env("TOTAL")).should('have.text', expectedResult);
    cy.get(Cypress.env("MODIFIER")).click();
  }
  it("input numbers must be in range 0 ~ 999", () => {
    cy.visit("/");
    clickButtons("123111");
    cy.get(Cypress.env("TOTAL")).should("have.text", "123");
  })
  it("clear board", () => {
    cy.get(Cypress.env("MODIFIER")).click();
    cy.get(Cypress.env("TOTAL")).should("have.text", "0");
  })
  it("add numbers", () => {
    calculate("123+123=","246");
    calculate("123+123+","246");
    calculate("123+123+123=","369");
  })
  it("multiply numbers", () => {
    calculate("123X123=","15129");
    calculate("123X123X","15129");
    calculate("123X123X123=","1860867");
  })
  it("divide numbers", () => {
    calculate("123/123=","1");
    calculate("123/123/","1");
    calculate("123/123/123=","0");
  })
  it("subtract numbers", () => {
    calculate("123-123=","0");
    calculate("123-123-","0");
    calculate("123-123-123=","-123");
  })
})