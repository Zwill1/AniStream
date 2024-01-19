import AnimeUpdatesList from "./AnimeUpdatesList";

export default function AnimeUpdates() {
  return (
    <>
        <div className="w-full">
          {/* bring in a card map list of a json file */}
          {/* Items-center to vertical align */}
          <AnimeUpdatesList />
        </div>
    </>
  )
}
