import AnimeStats from "./AnimeStats";
import * as dataObjCount from "../../data/animeStatsData.json";
import Link from "next/link";

export default function AnimeStatsHeading() {

  // Calculations to get total days watched

  const averageEpisodeTime = 23;
  const hourly = 60;
  const hoursInDay = 24;

  const episodeTotalTime = dataObjCount[0].Episodes * averageEpisodeTime;
  const episodeTime = episodeTotalTime / hourly;
  const episodeTotalByDays = episodeTime / hoursInDay;

  // console.log(episodeTotalByDays);

  return (
    <>
        <div className="lg:w-6/12 w-full px-2">
            <div className="flex justify-between py-1 lg:py-2">
              <h3 className="font-bold italic text-red-500">Anime Stats</h3>
              <p><Link href="#" className="text-blue-500">All Anime Stats</Link></p>
            </div>
            <div className="flex justify-between py-1 lg:py-2">
              <p className="text-white">Days: <span className="font-bold">{episodeTotalByDays.toFixed(2)}</span></p>
              <p className="text-white">Mean Score: <span className="font-bold">0.00</span></p>
            </div>
            <AnimeStats />
        </div>
    </>
  )
}
