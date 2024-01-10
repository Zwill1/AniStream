import MangaStats from "./MangaStats";

export default function MangaStatsHeading() {
  return (
    <>
        <div className="lg:w-6/12 w-full px-2">
            <div className="flex justify-between py-1 lg:py-2">
              <p>Anime Stats</p>
              <p>All Anime Stats</p>
            </div>
            <div className="flex justify-between py-1 lg:py-2">
              <p>Days: (Total)</p>
              <p>Mean Score: (Total)</p>
            </div>
            <MangaStats />
        </div>
    </>
  )
}
