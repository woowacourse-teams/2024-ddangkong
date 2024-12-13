// enforce-is-boolean.js

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: "Enforce that variables starting with 'is' must be of type boolean.",
    },
    fixable: null, // No automatic fix provided for this rule
    schema: [],
  },
  create(context) {
    return {
      // Perform action on every variable declarator
      VariableDeclarator(node) {
        // Check if the variable name starts with 'is'
        if (node.id.type === 'Identifier' && node.id.name.startsWith('is')) {
          // Check if the initializer exists and its type is boolean
          if ((node.init && node.init.type !== 'Literal') || typeof node.init.value !== 'boolean') {
            context.report({
              node,
              message: "Variable '{{ variableName }}' must be initialized with a boolean value.",
              data: {
                variableName: node.id.name,
              },
            });
          }
        }
      },
    };
  },
};
