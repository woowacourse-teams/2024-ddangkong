const enforceIsBoolean = require('./enforce-is-boolean');

const plugin = {
  configs: {
    recommended: [
      {
        plugins: {
          ddangkong: {
            rules: {
              'enforce-is-boolean': enforceIsBoolean,
            },
          },
        },
        rules: {
          'ddangkong/enforce-is-boolean': 'error',
        },
      },
    ],
  },
};

module.exports = plugin;
