import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'


export default function AppLayout({ child }) {
    return <>
        <Head>
            <title>NepNinja</title>
            <meta name="description" content="NepNinja Blog" />
        </Head>
        <Navbar />
        <main>{child}</main>
        <Footer />
    </>
}