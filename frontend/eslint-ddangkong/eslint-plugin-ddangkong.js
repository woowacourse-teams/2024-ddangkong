const enforceIsBoolean = require('./enforce-is-boolean');
const variableNaming = require('./variable-naming');
const pageFolderMatch = require('./page-folder-match');

const plugin = {
  configs: {
    recommended: [
      {
        plugins: {
          ddangkong: {
            rules: {
              'enforce-is-boolean': enforceIsBoolean,
              'variable-naming': variableNaming,
              'page-folder-match': pageFolderMatch,
            },
          },
        },
        rules: {
          'ddangkong/enforce-is-boolean': 'error',
          'ddangkong/variable-naming': 'error',
          'ddangkong/page-folder-match': 'error',
        },
      },
    ],
  },
};

module.exports = plugin;
