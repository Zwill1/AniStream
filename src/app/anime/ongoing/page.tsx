import { fetchOngoingAnime } from "../../actions/actionOngoing"
import HeroAnime from "@/app/ui/HeroAnime"

export default async function OnGoing() {

  const data = await fetchOngoingAnime(12);

  console.log(fetchOngoingAnime);

  return (
    <>
      <section className="w-full">
        <HeroAnime message='Track your shows NOW!' btnURL='/signin' />
      </section>
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-white font-bold">Highest Rated Ongoing Anime</h2>

        <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {data}
        </section>
      </main>
    </>
  )
}
