import Link from "next/link";
import AnimeUpdates from "./AnimeUpdates";

export default function AnimeUpdatesHeading() {
  return (
    <>
        <div className="lg:w-6/12 w-full px-2">
            <div className="flex justify-between py-2">
              <p className="font-bold italic text-red-500">Last Anime Updates</p>
              <p><Link href="/profile/anime-history" className="text-blue-500 hover:text-blue-700">Anime History</Link></p>
            </div>
            <AnimeUpdates />
        </div>
    </>
  )
}
