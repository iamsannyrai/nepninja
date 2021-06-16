import Link from "next/link"
import Image from "next/image"
import ReadableDate from "./utility/date_utility";

export function BlogItem({ blog, isLast }) {
    let category;

    if (blog.category) {
        category = <div className="text-white py-1 px-2 rounded bg-secondary cursor-pointer">{blog.category}</div>
    }

    return <div className="flex mb-4 h-100  rounded-sm px-4">
        <div className="flex-shrink-0 mr-4 mt-2">
            <Image src={blog.image} height={80} width={80} className="rounded-sm" />
        </div>
        <div>
            <Link href={`/blogs/${blog.id}`}><a className="font-semibold text-lg font-body text-title">{blog.title}</a></Link>
            <p className="text-subtitle">{blog.subtitle}</p>
            <div className="mt-4 flex text-xs space-x-4">
                <div className="text-subtitle self-center"><ReadableDate dateString={blog.date} /></div>
                {category}
            </div>
        </div>
    </div>

}