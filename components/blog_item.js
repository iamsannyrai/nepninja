import Link from "next/link"
import Image from "next/image"
import ReadableDate from "./utility/date_utility";


export function BlogItem({ blog }) {
    return <div>
        <div className="flex mb-4 h-100">
            <div className="flex-shrink-0 mr-6">
                <Image src={blog.image} height={80} width={80} className="rounded-md" />
            </div>
            <div>
                <Link href="/"><a className="font-semibold text-lg font-serif hover:text-blue-500">{blog.title}</a></Link>
                <p className="text-gray-700">{blog.subtitle}</p>
                <span className="text-sm font-light mt-4"><ReadableDate dateString={blog.date} /></span>
            </div>
        </div>
        <hr className="mb-2" />
    </div>
}