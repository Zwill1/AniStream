import { options } from "@/app/api/auth/[...nextauth]/options";
import MangaHistoryList from "@/app/components/MangaHistory/MangaHistoryList";
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"


export default async function AnimeHistory() {

  const session = await getServerSession(options);

  if(!session) {
    redirect('/api/auth/signin?callbackUrl=/profile/manga-history')
  } 

  return (
    <>
      <div className="w-full flex-wrap flex-row py-5 pt-10">
        <MangaHistoryList />
      </div>
    </>
  )
}
