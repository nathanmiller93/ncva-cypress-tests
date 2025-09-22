const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.northumberlandcva.org.uk',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
