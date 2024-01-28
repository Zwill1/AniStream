import FooterSessionLogList from "../components/Footer/FooterSessionLogList";

export default function Footer() {
  return (
    <>
    <section className="pt-5 w-full bg-[#0F1117]">
    <div className="lg:flex">
      <div className="lg:w-4/12 text-white text-center py-2 lg:py-0">
        <h4 className="text-sm font-bold mb-2">Footer</h4>
        <p className="text-xs">text</p>
      </div>
      <div className="lg:w-4/12 text-white text-center py-2">
        <h4 className="text-sm font-bold mb-2">Anime</h4>
        <p className="text-xs">text</p>
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
