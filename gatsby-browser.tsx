import React from 'react'
import { RecoilRoot } from 'recoil'
import { GatsbyBrowser } from 'gatsby'

// gatsby-browser.js
require('prismjs/themes/prism-okaidia.css')
import './src/scss/index.scss'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return <RecoilRoot>{element}</RecoilRoot>
}
