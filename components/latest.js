import Link from "next/link";
import Image from "next/image";
import ReadableDate from "./utility/date_utility";

export function LatestBlog({ blog }) {
    let category;

    if (blog.category) {
        category = <div className="text-white py-1 px-2 rounded bg-secondary cursor-pointer">{blog.category}</div>
    }
    return <div>
        <h1 className="font-body">MOST RECENT</h1>
        <div className="mt-6">
            <Image src={blog.image} height={400} width={550}/>
        </div>
        <div className="my-4 flex text-xs space-x-4">
            <div className="text-subtitle self-center"><ReadableDate dateString={blog.date} /></div>
            {category}
        </div>
        <a href={`/blogs/${blog.id}`} className="text-3xl font-bold font-body text-title">{blog.title}</a>
        <div className="my-2">
            <p className="text-subtitle">{blog.subtitle}</p>
        </div>
    </div>
}