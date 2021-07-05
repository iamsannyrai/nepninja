import Link from "next/link"
import Image from "next/image"
import ReadableDate from "./utility/date_utility";

export function BlogItem({ blog, isLast }) {
    let category;

    if (blog.category) {
        category = <div className="text-white py-1 px-2 rounded bg-secondary cursor-pointer self-center">{blog.category}</div>
    }

    return <div className="flex mb-4 h-100  rounded-sm px-4">
        <div className="flex-shrink-0 mr-4 mt-2">
            <Image src={blog.thumbnail} height={80} width={80} />
        </div>
        <div>
            <Link href={`/blogs/${blog.id}`}><a className="font-semibold text-lg font-body text-title">{blog.title}</a></Link>
            <p className="text-subtitle">{blog.description}</p>
            <div className="mt-2 flex text-xs space-x-4">
                <div className="flex space-x-1">
                    <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <div className="text-title self-center">Chris Sperandio on <ReadableDate dateString={blog.date} /></div>
                </div>
                {category}
            </div>
        </div>
    </div>

}