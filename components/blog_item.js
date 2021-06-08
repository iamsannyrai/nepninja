import Link from "next/link"
import Image from "next/image"
import ReadableDate from "./utility/date_utility";

export function BlogItem({ blog, isLast }) {
    return <div className="flex mb-4 h-100 border rounded-lg px-4 py-2">
        <div className="flex-shrink-0 mr-6 mt-2">
            <Image src={blog.image} height={80} width={80} className="rounded" />
        </div>
        <div>
            <Link href={`/blogs/${blog.id}`}><a className="font-semibold text-lg font-serif hover:text-blue-500">{blog.title}</a></Link>
            <p className="text-gray-700">{blog.subtitle}</p>
            <span className="text-sm font-light mt-4"><ReadableDate dateString={blog.date} /></span>
        </div>
    </div>

}