import { FC } from 'react'

import { Post } from '@common/interfaces'

interface Props {
  categoryList?: Array<Post>
}

const CategoryListBox: FC<Props> = ({ categoryList }) => {
  console.log(categoryList)
  return <div></div>
}

export default CategoryListBox
