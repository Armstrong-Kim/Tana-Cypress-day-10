const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  return config;
}
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    setupNodeEvents,
    specPattern: "cypress/e2e/features/*.feature",
    chromeWebSecurity: false,
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome-report",
    overwrite: false,
    html: false,
    json: true,
  },
  
});