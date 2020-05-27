// https://docs.cypress.io/api/introduction/api.html

describe("Tests for HelloWorld component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Contains the correct message property", () => {
    cy.contains("h1", "Welcome to Your Vue.js App");
  });
});
