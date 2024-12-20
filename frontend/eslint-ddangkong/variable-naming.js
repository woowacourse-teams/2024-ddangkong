// variable-naming.js

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: ` 변수에 언더바(_)를 사용하는 경우 "대문자 + 언더바(_)"로 작성해야 합니다
          변수명이 소문자로 시작하는 경우 특수문자를 사용하지 않고 camelCase를 사용해야 합니다
        `,
    },
    fixable: null,
    schema: [],
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        const name = node.id.name;

        const hasUnderscore = /_/.test(name);
        const hasLowercase = /[a-z]/.test(name);

        const startsWithLowercase = /^[a-z]/.test(name);
        const hasSpecialCharacter = /[_$]/.test(name);

        if (hasUnderscore && hasLowercase) {
          context.report({
            node,
            message: `변수에 언더바(_)를 사용하는 경우 "대문자 + 언더바(_)"로 작성해야 합니다`,
            data: {
              name,
            },
          });
        } else if (startsWithLowercase && hasSpecialCharacter) {
          context.report({
            node,
            message:
              '변수명이 소문자로 시작하는 경우 특수문자를 사용하지 않고 camelCase를 사용해야 합니다',
            data: {
              name,
            },
          });
        }
      },
    };
  },
};
