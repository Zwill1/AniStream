import Link from "next/link";
import FooterSessionLogList from "../components/Footer/FooterSessionLogList";

export default function Footer() {
  return (
    <>
    <section className="pt-5 pb-5 w-full bg-[#0F1117]">
    <div className="lg:flex">
      <div className="lg:w-4/12 text-white text-center py-2 lg:py-0">
        <h4 className="text-sm font-bold mb-2">Additional Links</h4>
        <p className="text-xs">
          <Link href="/" className="leading-6">Home</Link>
        </p>
        <p className="text-xs">
          <Link href="/anime" className="leading-6">Anime</Link>
        </p>
        <p className="text-xs">
          <Link href="/anime/ongoing" className="leading-6">Ongoing</Link>
        </p>
      </div>
      <div className="lg:w-4/12 text-white text-center py-2">
        <h4 className="text-sm font-bold mb-2">
          Anime Categories
        </h4>
        <p className="text-xs">
          <Link href="/anime" className="leading-6">Explore By Popularity</Link>
        </p>
        <p className="text-xs">
          <Link href="/anime" className="leading-6">Explore By Random</Link>
        </p>
        <p className="text-xs">
          <Link href="/anime" className="leading-6">Explore By Alphabetical Order</Link>
        </p>
        <p className="text-xs">
          <Link href="/anime" className="leading-6">Explore By Type</Link>
        </p>
      </div>
      <div className="lg:w-4/12 text-white text-center py-2">
        <h4 className="text-sm font-bold mb-2">Account</h4>
        <ul>
          <FooterSessionLogList />
        </ul>
      </div>
    </div>
    </section>
    </>
  )
}
