import AppLayout from '../components/layout'
import { HomeContent } from '../components/home'
import { getSortedBlogList } from '../bloc/blog'

export default function Home({ latestBlog, blogList }) {
  return <AppLayout child={<HomeContent blog={latestBlog} blogList={blogList} />} />
}

// fetch data at build time
export async function getStaticProps() {
  const blogList = getSortedBlogList()
  return {
    props: {
      latestBlog: blogList[0],
      blogList: blogList.slice(1,4)
    }
  }
}