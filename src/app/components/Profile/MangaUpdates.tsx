import MangaUpdatesList from "./MangaUpdatesList";

export default function MangaUpdates() {
  return (
    <>
        <div className="w-full">
            {/* bring in a card map of a json file */}
            <MangaUpdatesList />
        </div>
    </>
  )
}
