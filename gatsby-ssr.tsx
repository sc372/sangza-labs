import React from 'react'
import { GatsbySSR } from 'gatsby'
import { RecoilRoot } from 'recoil'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
  return <RecoilRoot>{element}</RecoilRoot>
}
