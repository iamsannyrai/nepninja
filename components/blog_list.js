import { BlogItem } from "./blog_item";

export function BlogList({ blogList }) {
    return <div className="md:my-1">
        {blogList.map((blog) => (
            <BlogItem key={blog.title} blog={blog} />
        ))}
    </div>
}
