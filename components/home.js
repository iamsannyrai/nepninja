import { LatestBlog } from "./latest";

export function Home({ blog }) {
    return <div>
        <div className="my-6 px-4 md:px-10 md:flex md:space-x-4">
            <LatestBlog blog={blog} />
        </div>
        <hr />
    </div >
}