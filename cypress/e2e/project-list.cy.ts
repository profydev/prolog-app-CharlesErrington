import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];

      // get all project cards
      cy.get("main")
        .find(".content-container-child")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          const getStatusText = (status: string): string => {
            switch (status) {
              case "info":
                return "Stable";
              case "warning":
                return "Warning";
              case "error":
                return "Critical";
              default:
                return "";
            }
          };
          cy.wrap($el).contains(getStatusText(mockProjects[index].status));
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });

    it("shows loading icon", () => {
      // stub the response from the server
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        delay: 2000, // simulate a 2 second delay in the response
        fixture: "projects.json",
      }).as("getProjects");

      // trigger the request
      cy.visit("http://localhost:3000/dashboard");

      // check that the loading icon is displayed
      cy.get(".loading-icon").should("exist");

      // wait for the request to complete
      cy.wait("@getProjects");

      // check that the loading icon is no longer displayed test
      cy.get(".loading-icon").should("not.exist");
    });
  });
});
