describe("New Buyer Journey", () => {
  it("should navigate to the page", () => {
    // Load localhost:3000
    cy.visit("http://localhost:3000/");
    // check that that there are 2 buttons on the page and an image
    cy.contains("Jenny's journey").should("exist");
    cy.contains("Kat's journey").should("exist");
    cy.get('[data-testid="test-logo"]').should("be.visible");
    // click the second button
    cy.contains("Kat's journey").click();
    // if clicked, check that the url is now localhost:3000/questionnaire
    cy.url().should("include", "/questionnaire");
    // assert that we have made it to the questionnaire page
    // check that there is a heading that it contains Welcome to LendLogic
    cy.contains("Welcome to LendLogic!").should("exist");

    // check that there is a button that contains Get Started
    cy.contains("Let's get started!").should("exist");
    // check that there is a paragragh that contains "we're here to guide you"
    cy.contains("We're here to guide you").should("exist");
    // click the button
    cy.contains("Let's get started!").click();
    // expect to see a heading that contains "which of the following bes describes you?"
    cy.contains("Which of the following best describes you?").should("exist");
    cy.contains("New Buyer").should("exist");
    cy.contains("Remortgage").should("exist");
    cy.contains("Moving House").should("exist");
    cy.contains("Just Browsing").should("exist");
    // Kat clicks "New Buyer" button
    cy.contains("New Buyer").click();
    // expect to see a heading that contains "How comfortable are you with mortgage terminology?"
    cy.contains("How comfortable are you with mortgage terminology?").should(
      "exist"
    );
    cy.contains("I'm comfortable").should("exist");
    cy.contains("I'm not comfortable").should("exist");
    // Kat clicks "I'm not comfortable" button
    cy.contains("I'm not comfortable").click();
    // expect to see loading spinner
    cy.contains("Loading").should("exist");
    // expect to be redirected to /dashboard
    cy.url().should("include", "/dashboard");
    // expect to see "New Buyer Checklist" heading with "find out more" button
    cy.contains("New Buyer Checklist").should("exist");
    cy.contains("Find Out More").should("exist");
    // expect to see new buyer report
    cy.contains("New Buyer Report").should("exist");
    // expect to see paragraph containing £15000
    cy.contains("£15000").should("exist");
    // Kat enters postcode into input field
    cy.get('input[placeholder*="Enter postcode"]').type("B1 1AB");
    // Kat clicks search button
    cy.get('button:contains("Search")').click();
    // expect to see updated postcode and deposit in paragraph
    cy.contains("£30000").should("exist");
    // Kat clicks "find out more" button
    cy.get('[data-testid="newbuyerreport-findoutmore"]').click();
    // expect see paragraph containing "your monthly savings could be"
    cy.contains("Your monthly saving could be").should("exist");
    // expect to see a button containing text "hide"
    cy.get('button:contains("Hide")').should("exist");
  });
});
