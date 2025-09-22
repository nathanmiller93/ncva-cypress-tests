describe("Fundamentals test", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  }); //beforeEach will do the action added before each 'it.' is ran
  it("Contains correct header text", () => {
    cy.get('[data-test="fundamentals-header"]').contains(
      /Testing fundamentals/i
    ); //case insensitive
    cy.get('[data-test="fundamentals-header"]').should(
      "contain.text",
      "Testing Fundamentals"
    ); //another option
    cy.getDataTest("fundamentals-header").should(
      "contain.text",
      "Testing Fundamentals"
    ); //command example, check commands.js
  });
  it("Accordion works correctly", () => {
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    ); //text should not be visible until drop down is clicked
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click().pause; //clicks the dropdown
    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    ); //text should now be visible
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click().pause; //clicks again
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    ); //drop down should close, text again not visible
  });
});

//ensure 'npm run dev' is running localhost before running 'npx cypress open' in another terminal
//use 'it.only' to run only one test for better efficiency
