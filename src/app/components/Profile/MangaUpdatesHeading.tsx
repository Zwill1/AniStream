import MangaUpdates from './MangaUpdates'

export default function MangaUpdatesHeading() {
  return (
    <>
        <div className="lg:w-6/12 w-full px-2">
            <div className="flex justify-between py-2">
            <p>Last Anime Updates</p>
            <p>Anime History</p>
            </div>
            <MangaUpdates />
        </div>
    </>
  )
}
