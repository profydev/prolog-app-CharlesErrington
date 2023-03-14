import packageJson from "../../package.json";

describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("links are working", () => {
      // check that each link leads to the correct page
      cy.get(".footer")
        .contains("Docs")
        .should("have.attr", "href", "/dashboard#");

      cy.get(".footer")
        .contains("API")
        .should("have.attr", "href", "/dashboard#");

      cy.get(".footer")
        .contains("Help")
        .should("have.attr", "href", "/dashboard#");

      cy.get(".footer")
        .contains("Community")
        .should("have.attr", "href", "/dashboard#");
    });

    it("Contains correct version", () => {
      // check that each link leads to the correct page
      cy.get(".footer").contains(packageJson.version);
    });
  });
});
