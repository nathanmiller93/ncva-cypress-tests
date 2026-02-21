Cypress.Commands.add("acceptCookiesIfPresent", () => {
  cy.get("body").then(($body) => {
    if ($body.find("button:contains('Accept')").length > 0) {
      cy.contains("button", "Accept").click()
    }
  })
})