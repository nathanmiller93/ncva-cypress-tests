Cypress.Commands.add("openHomePage", () => {
  cy.visit("/")  
})

Cypress.Commands.add("openVolunteeringPage", () => {
  cy.visit("/volunteering")
})

Cypress.Commands.add("openContactPage", () => {
  cy.visit("/contact-us")
})

Cypress.Commands.add("openJobSubmissionPage", () => {
  cy.visit("/submit-a-job")
})