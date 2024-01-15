import AnimeStats from "./AnimeStats";
import * as dataObjCount from "../../data/animeStatsData.json";

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
              <p>Anime Stats</p>
              <p>All Anime Stats</p>
            </div>
            <div className="flex justify-between py-1 lg:py-2">
              <p>Days: <span className="font-bold">{episodeTotalByDays.toFixed(2)}</span></p>
              <p>Mean Score: <span className="font-bold">0.00</span></p>
            </div>
            <AnimeStats />
        </div>
    </>
  )
}
