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
            <Image src={blog.thumbnail} height={400} width={550} />
        </div>
        <div className="my-4 flex text-xs space-x-4">
            <div className="flex space-x-1">
                <img class="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div className="text-title self-center">Chris Sperandio on <ReadableDate dateString={blog.date} /></div>
            </div>
            {category}
        </div>
        <a href={`/blogs/${blog.id}`} className="text-3xl font-bold font-body text-title">{blog.title}</a>
        <div className="my-2">
            <p className="text-subtitle">{blog.description}</p>
        </div>
    </div>
}