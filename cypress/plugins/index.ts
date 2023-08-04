// cypress/plugins/index.ts

/// <reference types="cypress" />

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const webpackPreprocessor = require('@cypress/webpack-preprocessor')

/**
 * @type {Cypress.PluginConfig}
 */
// module.exports = (on, config) => {
module.exports = (on,) => {
  console.log('testing on SCRIPT_FILE:', process.env.CONFIG_ENV)
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  if(process.env.CONFIG_ENV != null ){
    process.env.CONFIG_ENV = process.env.CONFIG_ENV;
  }

  
  const options = {
    webpackOptions: require(`../../scripts/start`),
    watchOptions: {},
  }

  on('file:preprocessor', webpackPreprocessor(options))
}
