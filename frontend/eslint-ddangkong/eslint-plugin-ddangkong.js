const enforceIsBoolean = require('./enforce-is-boolean');
const variableNaming = require('./variable-naming');
const pageFolderMatch = require('./page-folder-match');
const componentFolderMatch = require('./component-folder-match');
const recommendArrowFunction = require('./recommend-arrow-function');

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
              'component-folder-match': componentFolderMatch,
              'recommend-arrow-function': recommendArrowFunction,
            },
          },
        },
        rules: {
          'ddangkong/enforce-is-boolean': 'error',
          'ddangkong/variable-naming': 'error',
          'ddangkong/page-folder-match': 'error',
          'ddangkong/component-folder-match': 'error',
          'ddangkong/recommend-arrow-function': 'warn',
        },
      },
    ],
  },
};

module.exports = plugin;
