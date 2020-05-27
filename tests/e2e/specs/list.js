// https://docs.cypress.io/api/introduction/api.html

describe("Tests for List component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Contains list with 1 item", () => {
    const listItems = cy.get("ul").children();
    listItems.should("have.length", 1);
  });

  it("Add listItem on button click", () => {
    cy.get(".incrementbutton").click();
    const listItems = cy.get("ul").children();
    listItems.should("have.length", 2);
  });

  it("Remove listItem on button click", () => {
    cy.get(".decrementbutton").click();
    const listItems = cy.get("ul").children();
    listItems.should("have.length", 0);
  });
});
