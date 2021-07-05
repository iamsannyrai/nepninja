import Link from 'next/link'

export function Navbar() {
    return <div className="h-12 md:h-16 flex px-4 md:px-10 items-center">
        <Link href='/'><a className="text-md sm:text-xl font-body font-bold text-secondary">NepNinja</a></Link>
    </div>
}