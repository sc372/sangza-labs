import React from 'react'
import { RecoilRoot } from 'recoil'

// gatsby-browser.js
require('prismjs/themes/prism-okaidia.css')
import './src/scss/index.scss'

export const wrapRootElement = ({ element }) => <RecoilRoot>{element}</RecoilRoot>
