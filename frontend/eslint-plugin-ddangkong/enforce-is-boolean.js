module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'boolean 값 또는 boolean을 반환하는 함수는 변수명이 반드시 "is"로 시작해야 합니다.',
      recommended: true,
    },
    messages: {
      isPrefix: `변수명: "{{name}}". boolean 값 또는 boolean을 반환하는 함수는 "is"로 시작해야 합니다.`,
    },
  },
  create(context) {
    const isBooleanReturningFunction = (node) => {
      // 화살표 함수 또는 함수 표현식에서 boolean 반환 여부 확인
      if (node.type === 'ArrowFunctionExpression' || node.type === 'FunctionExpression') {
        if (
          node.body.type === 'Literal' &&
          typeof node.body.value === 'boolean' // true/false 리터럴 반환
        ) {
          return true;
        }
        if (
          node.body.type === 'BinaryExpression' &&
          ['==', '===', '!=', '!==', '>', '>=', '<', '<='].includes(node.body.operator) // BinaryExpression 반환
        ) {
          return true;
        }
      }
      return false;
    };

    return {
      VariableDeclarator(node) {
        const init = node.init;
        if (!init) return; // 초기화되지 않은 변수는 건너뜀

        if (
          (init.type === 'Literal' && typeof init.value === 'boolean') || // true/false 리터럴 확인
          (init.type === 'BinaryExpression' &&
            ['==', '===', '!=', '!==', '>', '>=', '<', '<='].includes(init.operator)) || // BinaryExpression 결과가 boolean인지 확인
          isBooleanReturningFunction(init) // boolean을 반환하는 함수 확인
        ) {
          const variableName = node.id.name;

          // 변수명이 "is"로 시작하지 않는 경우 에러 발생
          if (!variableName.startsWith('is')) {
            context.report({
              node,
              messageId: 'isPrefix',
              data: {
                name: variableName,
              },
            });
          }
        }
      },
    };
  },
};
