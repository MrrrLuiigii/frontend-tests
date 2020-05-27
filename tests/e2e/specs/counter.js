// https://docs.cypress.io/api/introduction/api.html

describe("Tests for Counter component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Contains counter value", () => {
    cy.contains("p", "Counter value:");
    cy.contains("h1", "1");
  });

  it("Increment counter on button click", () => {
    cy.get(".incrementbutton").click();
    cy.contains("h1", "2");
  });

  it("Decrement counter on button click", () => {
    cy.get(".decrementbutton").click();
    cy.contains("h1", "0");
  });
});
