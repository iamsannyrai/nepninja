import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'


export default function AppLayout({ child }) {
    return <>
        <Head>
            <title>NepNinja</title>
            <link
                href={`https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css`}
                rel="stylesheet" />
            <meta name="description" content="NepNinja Blog" />
        </Head>
        <Navbar />
        <main>{child}</main>
        <Footer />
    </>
}