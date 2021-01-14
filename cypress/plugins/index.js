const admin = require('firebase-admin');
const cypressFirebasePlugin = require('cypress-firebase').plugin;

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  const extendedConfig = cypressFirebasePlugin(on, config, admin);
  return extendedConfig;
};
