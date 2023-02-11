const fs = require('fs')

const matter = require('gray-matter')
const slash = require('slash')

process.argv.slice(3).forEach((dirtyPath) => {
  const path = slash(dirtyPath)
  if (!path.includes('/data/blog/')) {
    return
  }

  const orig = fs.readFileSync(path, 'utf-8')
  const parsedFile = matter(orig)
  const updatedDate = new Date().toISOString().split('T')[0]
  const updatedData = Object.assign({}, parsedFile.data, { updatedDate })
  const updatedContent = matter.stringify(parsedFile.content, updatedData)

  fs.writeFileSync(path, updatedContent, { encoding: 'utf-8' })
})
