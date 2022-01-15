import Link from 'next/link'
import Head from "next/head"
export default function Navbar(){
    const pages = [
        {
            text: "Deal",
            link: "/Game"
        },
        {
            text: "Leaderboard",
            link: "/Leaderboard"
        },
        {
            text: "Login",
            link: "/Login"
        }
    ]

    return(
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="/dist/output.css" rel="stylesheet"></link>
            </Head>
            <ul className='list-none flex justify-around p-4 items-center bg-blue-light'>
                <Link href="/">
                    <a  className=" text-[#fff] bg-blue-dark font-sans font-bold px-16 py-5 text-base rounded-lg mr-64">
                        <p>Home</p>
                    </a>
                </Link>
                {pages.map((page,index)=>{
                    return(
                    <li key={index}>
                        <Link href={page.link}>
                            <a  className="text-gray-dark font-sans font-bold text-base">{page.text}</a>
                        </Link>
                    </li>
                    )
                })}
                
            </ul>
        </>
    )
}