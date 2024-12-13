// enforce-is-boolean.js

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        "Enforce that variables starting with 'is' must be of type boolean, and functions starting with 'is' must return a boolean value.",
    },
    fixable: null,
    schema: [],
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        if (node.id.type === 'Identifier' && node.id.name.startsWith('is')) {
          // Check if the variable is initialized with an arrow function
          if (node.init && node.init.type === 'ArrowFunctionExpression') {
            return; // Skip Arrow Functions to be handled in ArrowFunctionExpression
          }

          // Check if the variable is a boolean literal
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
      FunctionDeclaration(node) {
        if (node.id && node.id.name.startsWith('is')) {
          const returnStatements = node.body.body.filter(
            (statement) => statement.type === 'ReturnStatement',
          );

          for (const returnStatement of returnStatements) {
            if (
              returnStatement.argument &&
              (returnStatement.argument.type !== 'Literal' ||
                typeof returnStatement.argument.value !== 'boolean')
            ) {
              context.report({
                node: returnStatement,
                message: "Function '{{ functionName }}' must return a boolean value.",
                data: {
                  functionName: node.id.name,
                },
              });
            }
          }
        }
      },
      ArrowFunctionExpression(node) {
        if (node.parent.type === 'VariableDeclarator' && node.parent.id.name.startsWith('is')) {
          if (node.body.type === 'Literal' && typeof node.body.value !== 'boolean') {
            context.report({
              node: node.body,
              message: "Arrow function '{{ functionName }}' must return a boolean value.",
              data: {
                functionName: node.parent.id.name,
              },
            });
          } else if (
            node.body.type !== 'Literal' &&
            node.body.type !== 'Identifier' &&
            node.body.type !== 'BinaryExpression'
          ) {
            context.report({
              node: node.body,
              message: "Arrow function '{{ functionName }}' must return a boolean value.",
              data: {
                functionName: node.parent.id.name,
              },
            });
          }
        }
      },
    };
  },
};
