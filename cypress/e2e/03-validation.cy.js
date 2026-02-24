describe("Job Submission checks", () => {
  beforeEach(() => {
    cy.openJobSubmissionPage();
    cy.acceptCookiesIfPresent();
  });

  it("Enters valid info in each field", () => {
    const timestamp = new Date();
    const readableDate = timestamp.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const closingDate = new Date();
    closingDate.setDate(closingDate.getDate() + 90);
    const ReadableClosingDate = closingDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    cy.get('[name="wpforms[fields][1]"]').type(
      "Automation Test " + readableDate,
    ); //Your name
    cy.get('[name="wpforms[fields][2]"]').type(
      timestamp.toISOString() + "@email.com",
    ); //Your email
    cy.get('[name="wpf-temp-wpforms[fields][17]"]').type("07400123456"); //Your Phone
    cy.get('[name="wpforms[fields][4]"]').type("Automation Tester"); //Job Title
    cy.get('[name="wpforms[fields][5]"]').type("Miller Co."); //Organisation
    cy.get('.choice-1 > [name="wpforms[fields][6]"]').click(); //Member Check
    cy.get('input[type="file"]')
      .first()
      .selectFile("cypress/fixtures/image.png", { force: true }); //Logo
    cy.get(".dz-preview").should("exist"); //Logo upload check, refactor selector soon as input type is not specific
    cy.fixture("job-description.txt").then((desc) => {
      //Uploads description.txt from fixtures
      cy.get('[name="wpforms[fields][8]"]').type(desc, { delay: 0 }); //Job Description
    });
    cy.get('[name="wpforms[fields][9]"]').type("£25,000 per annum"); //Salary
    cy.fixture("hours-terms.txt").then((desc) => {
      //Uploads hours-terms.txt from fixtures
      cy.get('[name="wpforms[fields][12]"]').type(desc, { delay: 0 }); //Hours & Terms
    });
    cy.get('[name="wpforms[fields][11]"]').type("Northumberland"); //Location
    cy.get('[name="wpforms[fields][13]"]').type(ReadableClosingDate); //Closing Date

    cy.fixture("job-extra.txt").then((text) => {
      const lines = text
        .split(/\r?\n/) // handles Windows + Mac line endings
        .map((l) => l.trimEnd()); // keeps text tidy but preserves blank line

      const howToApply = lines.slice(0, 4).join("\n"); // lines 1–4
      const moreInfo = lines.slice(5, 8).join("\n"); // lines 6–8

      cy.get('[name="wpforms[fields][14]"]').type(howToApply, { delay: 0 }); // How to apply
      cy.get('[name="wpforms[fields][15]"]').type(moreInfo, { delay: 0 }); // More info
    });
  });

   it("Checks validation on three fields", () => {
    const timestamp = new Date();
    const readableDate = timestamp.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const closingDate = new Date();
    closingDate.setDate(closingDate.getDate() + 90);
    const ReadableClosingDate = closingDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    cy.get('[name="wpforms[fields][1]"]').type(
      "Automation Test " + readableDate,
    ); //Your name
    cy.get('[name="wpforms[fields][2]"]').type(
      timestamp.toISOString() + "@email.com",
    ); //Your email
    cy.get('[name="wpf-temp-wpforms[fields][17]"]').type("07400123456"); //Your Phone
});

});