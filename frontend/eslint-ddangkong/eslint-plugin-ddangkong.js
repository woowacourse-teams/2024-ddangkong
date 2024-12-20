const enforceIsBoolean = require('./enforce-is-boolean');
const variableNaming = require('./variable-naming');

const plugin = {
  configs: {
    recommended: [
      {
        plugins: {
          ddangkong: {
            rules: {
              'enforce-is-boolean': enforceIsBoolean,
              'variable-naming': variableNaming,
            },
          },
        },
        rules: {
          'ddangkong/enforce-is-boolean': 'error',
          'ddangkong/variable-naming': 'error',
        },
      },
    ],
  },
};

module.exports = plugin;
