import Link from "next/link";
import Image from "next/image";

export function LatestBlog({ blog }) {
    return <div className="my-1">
        <Link href="/"><a className="text-3xl font-bold font-serif hover:text-blue-600">{blog.title}</a></Link>
        <div className="my-4">
            <p>{blog.subtitle}</p>
        </div>
        <Image src={latest.image} height={400} width={500} />
    </div>
}