import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import Image from "next/image";
import { redirect } from "next/navigation"

// Loads stats under the profile image
import ProfileSideStatsBar from "../components/Profile/ProfileSideStatsBar";
import ProfileCategoryStats from "../components/Profile/ProfileCategoryStats";
import Footer from "../ui/Footer";


export default async function Profile() {
  const session = await getServerSession(options);

  if(!session) {
    redirect('/api/auth/signin?callbackUrl=/profile')
  } 

  return (
    <>
      <div className="w-full lg:flex flex-wrap flex-row py-10">
        <div className="w-full lg:w-3/12 flex items-center justify-center">
          <Image
            src={`https://i.pravatar.cc/100?u=zz`}
            width={150}
            height={150}
            alt="alt"
            className="rounded-full"
          />
        </div>
        <div className="w-full lg:w-9/12 text-center lg:text-left px-6">
          <h2 className="font-bold text-3xl md:text-4xl text-white py-2">John Smith</h2>
          <p className="text-white">Florida-based anime enthusiast, finding joy in animated worlds. From sunny Florida, I embark on anime adventures, savoring diverse stories and characters as a cherished hobby. 🌴🎬👀</p>
        </div>
      </div>
      <div className="w-full lg:flex flex-wrap flex-row">
        <ProfileSideStatsBar />
        <ProfileCategoryStats />
      </div>
      <section className="w-full">
        <Footer />
      </section>
    </>
  )
}
