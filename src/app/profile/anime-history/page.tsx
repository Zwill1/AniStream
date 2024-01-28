import { options } from "@/app/api/auth/[...nextauth]/options";
import AnimeHistoryList from "@/app/components/AnimeHistory/AnimeHistoryList";
import Footer from "@/app/ui/Footer";
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"


export default async function AnimeHistory() {

  const session = await getServerSession(options);

  if(!session) {
    redirect('/api/auth/signin?callbackUrl=/profile/anime-history')
  } 

  return (
    <>
      <div className="w-full flex-wrap flex-row py-5 pt-10">
        <AnimeHistoryList />
      </div>
    </>
  )
}
