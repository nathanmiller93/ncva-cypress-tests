describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input"); //using an alias to reuse across the test for better efficiency '.as'
    cy.get("@subscribe-input").type("nathan@test.com"); //uses the alias above and types the following
    cy.contains(/Successfully subbed: nathan@test.com!/i).should("not.exist"); //happy path test, expected input
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: nathan@test.com!/i).should("exist");
    cy.wait(3000); //wait three seconds
    cy.contains(/Successfully subbed: nathan@test.com!/i).should("not.exist");

    cy.get("@subscribe-input").type("nathan@invalid.io"); //invalid input
    cy.contains(/Invalid email: nathan@invalid.io!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid email: nathan@invalid.io!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Invalid email: nathan@invalid.io!/i).should("not.exist");

    cy.contains(/fail!/i).should("not.exist"); //second invalid input
    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail!/i).should("exist");
  });
});
