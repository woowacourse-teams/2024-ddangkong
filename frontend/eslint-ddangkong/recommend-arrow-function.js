module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: '함수를 선언할 때는 화살표 함수의 사용을 권장합니다.',
    },
    messages: {
      noFunctionKeyword: '{{name}} 함수를 선언할 때는 화살표 함수의 사용을 권장합니다.',
    },
  },

  create(context) {
    return {
      FunctionDeclaration(node) {
        // 클래스 메서드는 제외
        if (node.parent.type === 'ClassBody') return;

        context.report({
          node,
          messageId: 'noFunctionKeyword',
          data: {
            name: node.id ? node.id.name : 'anonymous',
          },
        });
      },
      FunctionExpression(node) {
        // 클래스 메서드는 제외
        if (node.parent.type === 'MethodDefinition') return;

        // 객체 메서드도 제외
        if (node.parent.type === 'Property' && node.parent.method === true) return;

        context.report({
          node,
          messageId: 'noFunctionKeyword',
          data: {
            name: node.id ? node.id.name : 'anonymous',
          },
        });
      },
    };
  },
};
