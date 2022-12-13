const { inputRequired } = require('./utils')

module.exports = (plop) => {
  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '컴포넌트명을 입력하세요.',
        validate: inputRequired('name'),
      },
      {
        type: 'list',
        name: 'componentType',
        message: '컴포넌트 종류를 선택하세요.',
        choices: [
          {
            name: 'atoms',
            value: 'atoms',
          },
          {
            name: 'molecules',
            value: 'molecules',
          },
          {
            name: 'organisms',
            value: 'organisms',
          },
        ],
      },
    ],
    actions: (data) => {
      return [
        {
          type: 'add',
          path: '../components/{{componentType}}/{{dashCase name}}.tsx',
          templateFile: 'templates/component-tsx.template',
        },
      ]
    },
  })
}
