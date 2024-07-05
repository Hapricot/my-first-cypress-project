const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    username: 'alba1@fake.com',
    password: 'Atest123456',
    url: 'https://thinking-tester-contact-list.herokuapp.com/'
  }
});
