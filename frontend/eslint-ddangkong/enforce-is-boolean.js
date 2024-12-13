// enforce-is-boolean.js

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: "Enforce that variables starting with 'is' must be of type boolean.",
    },
    fixable: null,
    schema: [],
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        if (node.id.type === 'Identifier' && node.id.name.startsWith('is')) {
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
