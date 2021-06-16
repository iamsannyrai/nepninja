import { getSortedBlogList } from "../bloc/blog";
import { BlogList } from "../components/blog_list";
import AppLayout from "../components/layout";

export default function AllBlogs({ blogList }) {
    return <AppLayout child={<div className="my-4">
        <BlogList blogList={blogList} isViewAllPage={false} />
    </div>} />
}

// fetch data at build time
export async function getStaticProps() {
    const blogList = getSortedBlogList()
    return {
        props: {
            blogList: blogList
        }
    }
}