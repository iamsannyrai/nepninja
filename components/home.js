import Image from "next/image";
import Link from "next/link";
import { BlogList } from "./blog_list";
import { LatestBlog } from "./latest";

export function HomeContent({ blog, blogList }) {
    return <div className="my-2 px-4">
        <div className="md:flex md:space-x-4">
            <LatestBlog blog={blog} />
            <BlogList blogList={blogList} />
        </div>
        <div className="my-4">
            <h1 className="text-center text-lg font-body text-gray-600">WHAT WE'VE BEEN COOKING FOR YOU ?</h1>
            <div className="mt-6 md:flex justify-center space-y-5 md:space-y-0 md:space-x-8 ">
                <Link href="/">
                    <figure className="md:flex p-8 md:p-0 bg-white shadow-md hover:shadow-2xl cursor-pointer">
                        <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" width="384" height="512" />
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <p className="font-body">
                                <font className="font-semibold text-secondary">Podcast</font> where we discuss about life and technology.
                            </p>
                        </div>
                    </figure>
                </Link>

                <Link href="https://www.youtube.com/channel/UCFXhpprZ8p3uljj5X7hUVfw">
                    <figure className="md:flex p-8 md:p-0 bg-white shadow-md hover:shadow-2xl cursor-pointer">
                        <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" alt="" width="384" height="512" />
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <p className="font-body">
                                <font className="font-semibold text-secondary">Youtube videos</font> where we upload various tutorial videos.
                            </p>
                        </div>
                    </figure>
                </Link>
            </div>
        </div>
        <div className="h-4"></div>
    </div >
}