import MainLayout from "@components/layouts/MainLayout";
import type { NextPage } from "next";
import { ReactElement } from "react";

const IndexPage: NextPage = () => {
  return <>lsdkjfl</>;
};

export default IndexPage;

// @ts-ignore
IndexPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
