  describe("NCVA Website checks", () => {
    beforeEach(() => {
      cy.visit("/"); // goes to https://www.northumberlandcva.org.uk/
    });
  
    it("Loads homepage and shows the title", () => {
      cy.title().should("include", "NCVA – Northumberland Community and Voluntary Action – helping communities organise in England's border country"); 
    });
  
    it("Navigates to volunteering page", () => {
      cy.visit("/volunteering");
      cy.contains("Volunteering").should("exist");
    });
  
    it("Checks contact page", () => {
      cy.visit("/contact-us");
      cy.contains("01670").should("exist"); // phone number check
    });
  });