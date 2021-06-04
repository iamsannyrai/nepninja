import Link from 'next/link'

export function Navbar() {
    return <div className="h-12 md:h-16 flex px-4 md:px-10 items-center shadow-md">
        <Link href='/'><a className="text-md sm:text-xl font-bold">NepNinja</a></Link>
    </div>
}