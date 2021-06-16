import { BlogList } from "./blog_list";
import { LatestBlog } from "./latest";

export function HomeContent({ blog, blogList }) {
    return <div>
        <div className="my-2 px-4 md:flex md:space-x-4">
            <LatestBlog blog={blog} />
            <BlogList blogList={blogList} />
        </div>
        <hr />
    </div >
}