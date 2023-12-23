describe("Navigation", () => {
  it("should navigate to the page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // logo renders
    cy.get('[data-testid="test-logo"]').should("be.visible");

    // can get jenny's cookie
    cy.get('[data-testid="test-cookie"]').should("exist");
    // .should("have.text", "Jenny's journey");

    // Verify that the button text contains "Jenny's journey"
    cy.get('[data-testid="test-cookie"]')
      .invoke("text")
      .should("include", "Jenny's journey");

    // Click Jenny's cookie button - { multiple: true } option to specify that you want to interact with all matching elements
    cy.get('[data-testid="test-cookie"]').click({ multiple: true });

    // Verify that the new url includes "/questionnaire"
    cy.url().should("include", "/questionnaire");
    // click the button of the questionnaire
    cy.get('[data-testid="started-button"]').click({ multiple: true });
    // jenny clicks remortgage option
    cy.get('[data-testid="remortgage-button"]').click({ multiple: true });
    // jenny clicks release equity option
    cy.get('[data-testid="release-button"]').click({ multiple: true });
    //navigates to dashboard
    cy.url().should("include", "/dashboard");
    //should display remortgage tool
    cy.get('[data-testid="remortgage-tool"]').should("exist");
    // jenny clicks remortgage toggle
    cy.get('[data-testid="remortgage-tool-button"]').click({ multiple: true });
    //should display equity release tool
    cy.get('[data-testid="textValue"]').should("exist");
  });
});
