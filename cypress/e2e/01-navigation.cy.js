  describe("NCVA Website checks", () => {
    beforeEach(() => {
      cy.openHomePage();
      cy.acceptCookiesIfPresent();
    });
  
    it("Loads homepage and shows the title", () => {
      cy.title().should("include", "NCVA – Northumberland Community and Voluntary Action – helping communities organise in England's border country"); 
    });
  
    it("Navigates to volunteering page", () => {
      cy.openVolunteeringPage();
      cy.contains("Volunteering").should("exist");
    });
  
    it("Checks contact page", () => {
      cy.openContactPage();
      cy.contains("01670").should("exist");
    });
  });