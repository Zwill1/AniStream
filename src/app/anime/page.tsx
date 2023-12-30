import HeroAnime from "../ui/HeroAnime";


async function Anime() {

  return (
    <>
      <section className="w-full">
        <HeroAnime message="Ongoing Page" btnURL="/anime/ongoing" />
      </section>
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-white font-bold">Explore Anime By Popularity</h2>
        <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          <p>data for page</p>
        </section>
                <p>load more btn</p>
        <h2 className="text-3xl text-white font-bold">Explore Anime By Random</h2>
        <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          <p>data for page</p>
        </section>
                <p>load more btn</p>
        <h2 className="text-3xl text-white font-bold">Explore Anime By Alphabetical Order</h2>
        <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          <p>data for page</p>
        </section>
                <p>load more btn</p>
        <h2 className="text-3xl text-white font-bold">Explore Anime By Type (kind)</h2>
        <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          <p>data for page</p>
        </section>
        <p>load more btn</p>
      </main>
    </>
  )
}

export default Anime;