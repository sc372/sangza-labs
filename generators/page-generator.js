const { inputRequired } = require('./utils')

module.exports = (plop) => {
  plop.setGenerator('page', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '페이지명을 입력하세요.',
        validate: inputRequired('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../pages/{{dashCase name}}/index.tsx',
        templateFile: 'templates/page-tsx.template',
      },
    ],
  })
}
