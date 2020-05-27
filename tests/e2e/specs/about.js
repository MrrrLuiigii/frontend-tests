// https://docs.cypress.io/api/introduction/api.html

describe("Tests for About page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Route to about", () => {
    cy.visit("/about");
    cy.contains("h1", "This is an about page");
  });
});
