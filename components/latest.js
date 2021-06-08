import Link from "next/link";
import Image from "next/image";

export function LatestBlog({ blog }) {
    return <div className="my-1">
        <Link href={`/blogs/${blog.id}`}><a className="text-3xl font-bold font-serif hover:text-blue-600">{blog.title}</a></Link>
        <div className="my-2">
            <p>{blog.subtitle}</p>
        </div>
        <Image src={blog.image} height={400} width={500} className="rounded-md" />
    </div>
}