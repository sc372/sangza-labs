import SearchInput from "@components/atoms/SearchInput";
import MainLayout from "@components/layouts/MainLayout";
import type { NextPage } from "next";
import { ReactElement } from "react";

const IndexPage: NextPage = () => {
  return (
    <>
      <SearchInput />
    </>
  );
};

export default IndexPage;

// @ts-ignore
IndexPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
