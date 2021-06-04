import { BlogList } from "./blog_list";
import { LatestBlog } from "./latest";

export function HomeContent({ blog, blogList }) {
    return <div>
        <div className="my-6 px-4 md:px-10 md:flex md:space-x-4">
            <LatestBlog blog={blog} />
            <div className="w-4"></div>
            <BlogList blogList={blogList} />
        </div>
        <hr />
    </div >
}