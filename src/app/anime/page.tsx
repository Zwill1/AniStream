import Link from "next/link";
import Button from "../components/Button";
import Hero from "../ui/Hero";

async function Anime() {

  return (
    <>
      <section className="w-full">
        <Hero />
      </section>
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-white font-bold">Explore Anime By Popularity</h2>
        <h2 className="text-3xl text-white font-bold">Explore Anime By Random</h2>
        <h2 className="text-3xl text-white font-bold">Explore Anime By Alphabetical Order</h2>
        <h2 className="text-3xl text-white font-bold">Explore Anime By Type (kind)</h2>

        <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          <p>data for page</p>
        </section>
        <p>load more btn</p>
        <Link href="/anime/ongoing">
            <Button>Ongoing Page</Button>
        </Link>
      </main>
    </>
  )
}

export default Anime;