import React from 'react'

// gatsby-browser.js
require('prismjs/themes/prism-okaidia.css')
import './src/scss/index.scss'

export const wrapRootElement = ({ element }) => <>{element}</>
