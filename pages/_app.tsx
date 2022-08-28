import "@styles/globals.css";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import dayjs from "dayjs";

type TPage<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type TProps = AppProps & {
  Component: TPage;
};

function MyApp({ Component, pageProps }: TProps) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  dayjs.locale("ko");

  return (
    <RecoilRoot>
      <ThemeProvider defaultTheme="light" attribute="class">
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
