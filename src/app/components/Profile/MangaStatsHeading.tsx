import MangaStats from "./MangaStats";
import * as dataObjManga from "../../data/mangaStatsData.json";
import Link from "next/link";

export default function MangaStatsHeading() {

    // Calculations to get total days of reading

    const averageChapterTime = 1;
    const hourly = 60;
    const hoursInDay = 24;
  
    const chapterTotalTime = dataObjManga[0].Chapters * averageChapterTime;
    const chapterTime = chapterTotalTime / hourly;
    const chapterTotalByDays = chapterTime / hoursInDay;

    // console.log(chapterTotalByDays);

  return (
    <>
        <div className="lg:w-6/12 w-full px-2">
            <div className="flex justify-between py-1 lg:py-2">
              <h3 className="font-bold italic text-red-500">Manga Stats</h3>
              <p><Link href="#" className="text-blue-500">All Manga Stats</Link></p>
            </div>
            <div className="flex justify-between py-1 lg:py-2">
              <p>Days: <span className="font-bold">{chapterTotalByDays.toFixed(2)}</span></p>
              <p>Mean Score: <span className="font-bold">0.00</span></p>
            </div>
            <MangaStats />
        </div>
    </>
  )
}
