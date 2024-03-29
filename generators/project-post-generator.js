const fs = require('fs')

const siteConfig = require('../site.config')
const { inputRequired, inputPositiveIntegerAndRequired } = require('./utils')

// const authors = JSON.parse(fs.readFileSync('./data/author.json'))

module.exports = (plop) => {
  plop.setGenerator('project post', {
    prompts: [
      {
        type: 'input',
        name: 'categoryTitle',
        message: '프로젝트명을 입력해주세요.',
        validate: inputRequired('categoryTitle'),
      },
      {
        type: 'input',
        name: 'title',
        message: '프로젝트 포스트의 제목을 입력해주세요.',
        validate: inputRequired('title'),
      },
      {
        type: 'input',
        name: 'description',
        message: '프로젝트 포스트의 설명을 입력해주세요.',
      },
      {
        type: 'input',
        name: 'categoryOrder',
        message: '프로젝트 포스트의 순번을 입력해주세요.',
        validate: inputPositiveIntegerAndRequired('categoryOrder'),
      },
      {
        type: 'list',
        name: 'author',
        message: '프로젝트 포스트의 작성자를 입력해주세요.',
        choices: siteConfig.authors.map((a) => ({
          name: a.id,
          value: a.id,
        })),
      },
      {
        type: 'input',
        name: 'tags',
        message: '태그를 입력해주세요.(separate with coma)',
      },
      {
        type: 'confirm',
        name: 'draft',
        message: 'draft 버전 인가요?',
      },
    ],
    actions: (data) => {
      // Get current date
      data.createdDate = new Date().toISOString().split('T')[0]

      // Parse tags as yaml array
      if (data.tags) {
        data.tags = `\n  - ${data.tags.split(',').join('\n  - ')}`
      }

      return [
        {
          type: 'add',
          path: '../data/project/{{dashCase categoryTitle}}/{{createdDate}}--{{dashCase title}}/index.md',
          templateFile: 'templates/project-post-md.template',
        },
      ]
    },
  })
}
