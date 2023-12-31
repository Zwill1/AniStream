import { fetchAnimeByAlphabeticalOrder } from "../actions/actionAnimeByAlphabeticalOrder";
import { fetchAnimeByRandom } from "../actions/actionAnimeByRandom";
import { fetchAnimeByType } from "../actions/actionAnimeByType";
import { fetchAnimeLimitByPopularity } from "../actions/actionPopularityByLimit";
import ButtonLoad from "../components/ButtonLoad";
import HeroAnime from "../ui/HeroAnime";


async function Anime() {

  const data = await fetchAnimeLimitByPopularity(1,6);

  const randomAnimeData = await fetchAnimeByRandom(6);

  const alphabeticalOrder = await fetchAnimeByAlphabeticalOrder(6);

  const animeByType = await fetchAnimeByType(6);

  return (
    <>
      <section className="w-full">
        <HeroAnime message="Ongoing Page" btnURL="/anime/ongoing" />
      </section>
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-white font-bold">Explore Anime By Popularity</h2>
        <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {/* This data relates to the popularity section */}
          {data}
        </section>
        <ButtonLoad>Load More</ButtonLoad>
        <h2 className="text-3xl text-white font-bold">Explore Anime By Random</h2>
        <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {/* This data relates to the Random data section */}
          {randomAnimeData}
        </section>
        <ButtonLoad>Load More</ButtonLoad>
        <h2 className="text-3xl text-white font-bold">Explore Anime By Alphabetical Order</h2>
        <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {/* This data relates to the alphabetical order section */}
          {alphabeticalOrder}
        </section>
        <ButtonLoad>Load More</ButtonLoad>
        <h2 className="text-3xl text-white font-bold">Explore Anime By Type</h2>
        <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {/* This data relates to the anime by type section */}
          {animeByType}
        </section>
        <ButtonLoad>Load More</ButtonLoad>
      </main>
    </>
  )
}

export default Anime;