import AnimeStatsHeading from "./AnimeStatsHeading";
import AnimeUpdatesHeading from "./AnimeUpdatesHeading";
import MangaStatsHeading from "./MangaStatsHeading";
import MangaUpdatesHeading from "./MangaUpdatesHeading";

export default function ProfileCategoryStats() {
  return (
    <>
    <section className="w-full lg:w-9/12 lg:px-10">
      {/* Heading for 2 column */}
      <div>
        <h2 className="font-bold text-2xl">Statistics</h2>
      </div>
      <div className="lg:flex w-full">
        <AnimeStatsHeading />
        <AnimeUpdatesHeading />
      </div>
      <div className="lg:flex w-full">
        <MangaStatsHeading />
        <MangaUpdatesHeading />
      </div>
      
      {/* <div className="w-full lg:flex">      
        <div className="w-6/12 px-5">2</div>
        <div className="w-6/12 px-5">2</div>
      </div> */}
    </section>
    </>
  )
}
