import Head from 'next/head'
import {Navbar} from '../components/navbar'
import {Footer} from '../components/footer'


export default function AppLayout() {
    return <>
        <Head>
            <title>NepNinja</title>
            <meta name="description" content="NepNinja Blog" />
        </Head>
        <Navbar/>
        <main>Hello World</main>
        <Footer />
    </>
}