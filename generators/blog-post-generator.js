const fs = require('fs')

const siteConfig = require('../site.config')
const { inputRequired } = require('./utils')

// const authors = JSON.parse(fs.readFileSync('./data/author.json'))

module.exports = (plop) => {
  plop.setGenerator('blog post', {
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: '블로그의 제목을 입력해주세요.',
        validate: inputRequired('title'),
      },
      {
        type: 'input',
        name: 'description',
        message: '블로그의 설명을 입력해주세요.',
      },
      {
        type: 'list',
        name: 'author',
        message: '블로그의 작성자를 입력해주세요.',
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
          path: '../data/blog/{{createdDate}}--{{dashCase title}}/index.md',
          templateFile: 'templates/blog-post-md.template',
        },
      ]
    },
  })
}
