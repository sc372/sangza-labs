const path = require('path')

module.exports = {
  // this will check Typescript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // This will lint and format TypeScript and                                             //JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    'next lint .',
    'prettier --write .',
    // `next lint ${filenames.join(' ')}`,
    // `prettier --write ${filenames.join(' ')}`,
  ],

  // this will Format MarkDown and JSON
  // '**/*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`,
}
