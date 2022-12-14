import '@styles/globals.css'
import { ReactNode } from 'react'

import dayjs from 'dayjs'
import { NextPage } from 'next'
import { ThemeProvider } from 'next-themes'
import { RecoilRoot } from 'recoil'

import { AppSeo } from '@components/molecules/seo'

import type { AppProps } from 'next/app'

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

type Props = AppProps & {
  Component: Page
}

function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page)

  dayjs.locale('ko')

  return (
    <RecoilRoot>
      <ThemeProvider attribute="class">
        <AppSeo />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
