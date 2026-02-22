# NCVA Cypress Automation

This repository contains end-to-end (E2E) tests written in **Cypress** for the NCVA public website.

The focus of this project is:
- learning Cypress and modern E2E testing
- safe testing of public-facing pages and forms
- clean, readable test structure suitable for sharing or reuse

The tests do **not** submit data, log in, or interact with admin functionality.

---

## Prerequisites

Before running this project, make sure the following are installed on your machine.

### 1. Node.js (LTS)
Cypress requires Node.js.

- Download Node.js (LTS version):  
  https://nodejs.org/
- Verify installation:

Powershell Terminal
node -v
npm -v

### Installing the Project

1. Clone the repository

git clone <your-repo-url>
cd NCVA-Automation

2. Install dependencies

This installs Cypress and any supporting packages listed in package.json.

npm install

### Running Cypress

Open Cypress Test Runner (interactive mode)

This is the recommended way to run tests while developing or learning

npx cypress open

From the Cypress window:

Choose E2E Testing

Select a browser

Click a test file to run it

Run tests in headless mode (optional)

Useful for CI or quick checks.

npx cypress run

Project Structure

cypress/
  e2e/
    01-navigation.cy.js        # Basic navigation / smoke tests
    02-forms.cy.js             # Safe form interaction and validation tests
  fixtures/
    image.png                  # Test image used for upload field
    job-description.txt        # Example job description text
  support/
    commands/
      cookies.js               # Cookie banner helpers
      navigation.js            # Navigation helpers
    e2e.js                     # Support file loaded before tests

### What the Tests Do

Check key public pages load correctly

Navigate between pages

Interact with form fields safely

Upload a test image to a file upload field

Validate UI behaviour (without submitting forms)

### What the Tests Do NOT Do

No form submissions

No login or authentication

No admin or dashboard access

No database or server-side changes

This keeps the tests safe to run against a live public site and suitable for a public repository.

### Code Formatting

This project uses Prettier for formatting.

Recommended VS Code settings:

Prettier – Code formatter extension installed

Format on Save enabled

Formatting will run automatically when saving files.

### Notes

All selectors and assertions are intentionally conservative to avoid flaky tests.

File uploads use Cypress fixtures and do not persist data server-side.

The repository is designed as a learning and demonstration project.

### Troubleshooting

If Cypress does not open:

Ensure Node.js is installed correctly

Delete node_modules and re-run npm install

Run npx cypress verify