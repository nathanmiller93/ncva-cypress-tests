# NCVA Automation – Cypress E2E Tests

This repository contains end-to-end (E2E) tests written using Cypress.  
It is a lightweight automation project focused purely on browser-based testing, without a local application build.

The tests are designed to run against a live website and are intended as a learning, practice, and experimentation space for Cypress-based QA automation.

## Purpose

This project exists to:

- Practice and refresh Cypress E2E automation skills  
- Explore modern Cypress features and conventions  
- Maintain a clean, minimal automation-only setup  
- Avoid unnecessary application or framework dependencies  

It does not contain a Next.js or React application. Any previous tutorial scaffolding has been intentionally removed.

## Project Structure

cypress/
e2e/ End-to-end test specs (.cy.js files)
fixtures/ Test data used by specs
support/ Custom commands and global test setup

cypress.config.js Cypress configuration
package.json Project dependencies and scripts

## Requirements

- Node.js (LTS recommended)
- npm

## Installation

Install dependencies from the project root:

npm install

## Running Cypress

Open Cypress in interactive mode:

npx cypress open

Run all tests headlessly (CLI / CI style):


## Test Conventions

- Test files follow the `.cy.js` naming convention
- Tests are written using Cypress’s default BDD-style syntax
- The project uses Cypress’s modern e2e folder structure
- No page objects or heavy abstractions are used unless justified

The focus is on clarity, maintainability, and understanding test behaviour.

## Notes

- Generated folders such as `node_modules`, `cypress/videos`, and `cypress/screenshots` are intentionally excluded from version control
- This repository is not intended to deploy or serve an application
- The target site under test may change over time

## Status

Active as a personal QA automation sandbox and refresher project.