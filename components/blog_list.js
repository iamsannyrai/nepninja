import Link from "next/link";
import { BlogItem } from "./blog_item";

export function BlogList({ blogList }) {
    return <div className="md:my-1 space-y-4">
        <div className="text-right">
            <Link href="/"><a className="text-blue-500 flex justify-end space-x-2 items-center"><div>Explore All</div><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg></a></Link>
        </div>

        {blogList.map((blog) => (
            <BlogItem key={blog.title} blog={blog} />
        ))}
    </div>
}
