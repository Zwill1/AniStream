import FooterSessionLogList from "../components/Footer/FooterSessionLogList";

export default function Footer() {
  return (
    <>
    <section className="pt-5 w-full bg-[#0F1117]">
    <div className="lg:flex">
      <div className="lg:w-4/12 text-white text-center py-2 lg:py-0">
        <h4 className="text-sm font-bold mb-2">Additional Links</h4>
        <p className="text-xs">Home</p>
        <p className="text-xs">Anime</p>
        <p className="text-xs">Ongoing</p>
      </div>
      <div className="lg:w-4/12 text-white text-center py-2">
        <h4 className="text-sm font-bold mb-2">Anime Categories</h4>
        <p className="text-xs">Explore By Popularity</p>
        <p className="text-xs">Explore By Random</p>
        <p className="text-xs">Explore By Alphabetical Order</p>
        <p className="text-xs">Explore By Type</p>
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
