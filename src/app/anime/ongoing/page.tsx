import { options } from "../../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { fetchOngoingAnime } from "../../actionOngoing"
import Hero from "../../ui/Hero"

export default async function OnGoing() {

  const session = await getServerSession(options)

  const data = await fetchOngoingAnime(12);

  console.log(fetchOngoingAnime);

  if(!session) {
    redirect('/api/auth/signin?callbackUrl=%2Fongoing')
  } 

  return (
    <>
    {/* {session ? (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <p>ongoing page</p>
      </main>
    ) : (
      <main className="flex min-h-screen flex-col items-center justify-between">
      <p>no page access</p>
    </main>
    )} */}
      <section className="w-full">
        <Hero />
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
