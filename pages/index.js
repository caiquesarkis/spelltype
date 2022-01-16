import Link from "next/link"

export default function Home() {
  return (
    <div> 
      <h1 className="text-5xl text-gray-dark font-bold text-center mt-24">Web Deal</h1>
      <h2 className="text-2xl text-gray font-thin text-center mt-2 mb-10">Play online with your friends🥶</h2>
      <div className="flex justify-around">
        <img className="shadow-2xl rounded-xl hover:-translate-y-8 transition-all cursor-pointer" src="/assets/red-card.png" />
        <img className="shadow-2xl rounded-xl hover:-translate-y-8 transition-all cursor-pointer" src="/assets/blue-card.png" />
        <img className="shadow-2xl rounded-xl hover:-translate-y-8 transition-all cursor-pointer" src="/assets/green-card.png" />
        <img className="shadow-2xl rounded-xl hover:-translate-y-8 transition-all cursor-pointer" src="/assets/pink-card.png" />
        <img className="shadow-2xl rounded-xl hover:-translate-y-8 transition-all cursor-pointer" src="/assets/yellow-card.png" />
      </div>
      <div className="flex justify-center">
        <Link href="/Game">
            <a  className="px-48 py-6 mt-32 mb-32 bg-pink rounded-lg shadow-xl">Play!</a>
        </Link>
      </div>
    </div>
  )
}
