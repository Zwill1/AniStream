import { fetchAnimeByAlphabeticalOrder } from "../actions/actionAnimeByAlphabeticalOrder";
import { fetchAnimeByRandom } from "../actions/actionAnimeByRandom";
import { fetchAnimeByType } from "../actions/actionAnimeByType";
import { fetchAnimeLimitByPopularity } from "../actions/actionPopularityByLimit";
import ButtonLoad from "../components/ButtonLoad";
import HeroAnime from "../ui/HeroAnime";

// Buttons that load new data for the page from the API
import LoadMoreByPopularity from "../components/LoadMoreByPopularity";
import LoadMoreByRandom from "../components/LoadMoreByRandom";
import LoadMoreByAlphabeticalOrder from "../components/LoadMoreByAlphabeticalOrder";
import LoadMoreByType from "../components/LoadMoreByType";
import Footer from "../ui/Footer";


async function Anime() {

  const data = await fetchAnimeLimitByPopularity(1);

  const randomAnimeData = await fetchAnimeByRandom(1);

  const alphabeticalOrder = await fetchAnimeByAlphabeticalOrder(1);

  const animeByType = await fetchAnimeByType(1);

  return (
    <>
      <section className="w-full">
        <HeroAnime />
      </section>
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-white font-bold">Explore Anime By Popularity</h2>
        <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {/* This data relates to the popularity section */}
          {data}
        </section>
        <LoadMoreByPopularity />
        <h2 className="text-3xl text-white font-bold">Explore Anime By Random</h2>
        <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {/* This data relates to the Random data section */}
          {randomAnimeData}
        </section>
        <LoadMoreByRandom />
        <h2 className="text-3xl text-white font-bold">Explore Anime By Alphabetical Order</h2>
        <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {/* This data relates to the alphabetical order section */}
          {alphabeticalOrder}
        </section>
        <LoadMoreByAlphabeticalOrder />
        <h2 className="text-3xl text-white font-bold">Explore Anime By Type</h2>
        <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {/* This data relates to the anime by type section */}
          {animeByType}
        </section>
        <LoadMoreByType />
      </main>
    </>
  )
}

export default Anime;