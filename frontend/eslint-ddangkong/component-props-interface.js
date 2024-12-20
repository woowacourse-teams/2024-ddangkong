module.exports = {
  meta: {
    type: 'suggestion', // 규칙의 성격
    docs: {
      description:
        "Ensure component props interface names follow the 'ComponentNameProps' convention",
      category: 'Best Practices',
      recommended: false,
    },
    schema: [], // 옵션 없음
    messages: {
      invalidPropsName: "The props interface '{{actual}}' should be named '{{expected}}'.",
    },
  },

  create(context) {
    return {
      ExportDefaultDeclaration(node) {
        const sourceCode = context.getSourceCode();
        const filePath = context.getFilename();

        // export default 변수 이름 추출
        const componentName = node.declaration.name;

        // 컴포넌트 이름이 대문자로 시작하지 않으면 검사하지 않음
        if (!/^[A-Z]/.test(componentName)) {
          return;
        }

        // components 폴더가 아닌 경우 검사하지 않음
        if (!filePath.includes('components')) {
          return;
        }

        // 파일의 모든 인터페이스 찾기
        const interfaces = sourceCode.ast.body.filter(
          (item) => item.type === 'TSInterfaceDeclaration',
        );

        // 컴포넌트 이름으로 선언된 변수 찾기
        const matchingDeclaration = sourceCode.ast.body.find(
          (item) =>
            item.type === 'VariableDeclaration' &&
            item.declarations.some((decl) => decl.id.name === componentName),
        );

        if (!matchingDeclaration) {
          return;
        }

        // 파라미터에 사용된 인터페이스 확인
        let usedInterface = null;

        matchingDeclaration.declarations.forEach((decl) => {
          if (decl.init?.type === 'ArrowFunctionExpression' && decl.init.params) {
            decl.init.params.forEach((param) => {
              if (param.typeAnnotation?.type === 'TSTypeAnnotation') {
                const typeNode = param.typeAnnotation.typeAnnotation;
                if (typeNode.type === 'TSTypeReference') {
                  const interfaceName = typeNode.typeName.name;
                  if (interfaceName !== 'PropsWithChildren') {
                    usedInterface = interfaceName;
                  }
                }
              }
            });
          }
        });

        // 올바른 인터페이스 이름 계산
        const expectedInterfaceName = `${componentName}Props`;

        // 사용된 인터페이스가 올바르지 않으면 에러 발생
        if (usedInterface && usedInterface !== expectedInterfaceName) {
          context.report({
            node,
            messageId: 'invalidPropsName',
            data: {
              actual: usedInterface,
              expected: expectedInterfaceName,
            },
          });
        }
      },
    };
  },
};
