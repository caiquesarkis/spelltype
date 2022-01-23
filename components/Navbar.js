import Link from 'next/link'
import Head from "next/head"
export default function Navbar(){
    return(
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="/dist/output.css" rel="stylesheet"></link>
            </Head>
            <ul className='list-none flex justify-start p-4 items-center bg-gray-dark'>
                <Link href="/">
                    <a  className=" text-gray-dark bg-gray-light font-sans font-bold px-16 py-5 ml-20 text-base rounded-lg ">
                        <p>Home</p>
                    </a>
                </Link>
            </ul>
        </>
    )
}