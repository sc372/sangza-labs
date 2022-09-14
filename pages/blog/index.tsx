import { GetStaticProps, NextPage } from "next";
import { PAGE_SIZE } from "shared/common/constants";
import { Post } from "shared/common/interfaces";
import MainLayout from "shared/components/layouts/MainLayout";
import Pagination from "shared/components/molecules/Pagination";
import PostThumbnail from "shared/components/molecules/PostThumbnail";
import { usePagination } from "shared/hooks/usePagination";
import { getAllBlogPosts } from "shared/utils/doc";

interface Props {
  posts: Array<Post>;
}

const BlogPage: NextPage<Props> = ({ posts }) => {
  const {
    currentPage,
    isPreview,
    isNext,
    pageNumbers,
    totalCount,
    dataForPage,
    onPageChange,
  } = usePagination({
    data: posts,
    pageSize: PAGE_SIZE,
  });

  return (
    <>
      {dataForPage?.map((post: Post, i: number) => (
        <PostThumbnail key={i} post={post} />
      ))}
      <Pagination
        onPageChange={onPageChange}
        currentPage={currentPage}
        isPreview={isPreview}
        isNext={isNext}
        pageNumbers={pageNumbers}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: await getAllBlogPosts(),
    },
  };
};

export default BlogPage;
// @ts-ignore
BlogPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
