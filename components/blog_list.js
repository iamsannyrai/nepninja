import { BlogItem } from "./blog_item";

export function BlogList({ blogList }) {
    return <div className="md:my-1">
        {blogList.map((blog) => (
            <BlogItem key={blog.title} blog={blog} />
        ))}
        <div className="text-right mt-10">
            <button className="bg-blue-700 text-white px-3 py-1 rounded-md focus:outline-none hover:bg-blue-500">Explore All</button>
        </div>
    </div>
}
