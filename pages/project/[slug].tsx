import React from 'react'
import MainLayout from 'shared/components/layouts/MainLayout'
import { getAllProjectPosts } from 'shared/utils/doc'
import { GetStaticProps, NextPage } from 'next'
import { Post } from 'shared/common/interfaces'

interface Props {
  posts: Array<Post>
}

const ProjectPage: NextPage<Props> = ({ posts }) => {
  console.log(posts)
  return <></>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: await getAllProjectPosts(),
    },
  }
}

export default ProjectPage
// @ts-ignore
ProjectPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
