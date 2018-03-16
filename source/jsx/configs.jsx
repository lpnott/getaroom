/**
 * The app keys and environment configuration object.
 * @attribute Configs
 * @param {String} env                 The environment.
 * @param {JSON}   Skylink             The app keys.
 * @param {String} Skylink.apiMCUKey   The MCU app key.
 * @param {String} Skylink.apiNoMCUKey The non-MCU (P2P) app key.
 * @param {Number} maxUsers            The max number of users that can connect to the app.
 * @type JSON
 * @public
 */
define([], function() {

  /*
    You need to replace these API keys and hostnames with
    your own. Then run 'grunt dev' on the console to transpile
    this file into .js
  */

  var config = {};

  switch (window.location.host) {

    case 'getaroom.io':
      config = {
        env: 'prod',
        Skylink: {
          apiMCUKey: '92898880-ab04-4f94-a82f-cabd7c0d120c',
          apiNoMCUKey: '691e9702-bdde-4611-889e-8c57eacbcfca'
        },
      };
      break;

    case 'dev.getaroom.io':
      config = {
        env: 'dev',
        Skylink: {
          apiMCUKey: '92898880-ab04-4f94-a82f-cabd7c0d120c',
          apiNoMCUKey: '691e9702-bdde-4611-889e-8c57eacbcfca'
        },
      };
      break;

    default:
      config = {
        env: 'localhost',
        Skylink: {
          apiMCUKey: '7bcba74c-ee42-4fb7-ba17-94a9edb3c1bf',
          apiNoMCUKey: 'd01af995-1e98-4116-8645-11bfc90c8d29'
        }
      };
  }

  // Note that the UI can support up to 20 peers but it is dependant on the user's device to be able to handle.
  config.maxUsers = 4;
  return config;

});
