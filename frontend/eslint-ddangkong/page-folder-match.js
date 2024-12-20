const path = require('path');
const fs = require('fs');

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: '페이지 폴더에 해당하는 파일이 존재하는지 확인합니다.',
    },
    schema: [],
  },
  create(context) {
    return {
      Program(node) {
        const filePath = context.filename; // 현재 파일의 경로
        const dirName = path.basename(path.dirname(filePath)); // 현재 파일이 속한 폴더 이름

        // "Page"로 끝나는 폴더만 검사
        if (dirName.endsWith('Page')) {
          const parentDir = path.dirname(path.dirname(filePath)); // 상위 디렉터리
          const expectedFileName = `${dirName}.tsx`;
          const expectedFilePath = path.join(parentDir, dirName, expectedFileName);

          if (!fs.existsSync(expectedFilePath)) {
            context.report({
              node,
              message: `pages 폴더 안에는 "${dirName}" 폴더에 해당하는 "${expectedFileName}" 파일이 있어야 합니다.`,
            });
          }
        }
      },
    };
  },
};
