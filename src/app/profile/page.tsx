import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import Image from "next/image";
import { redirect } from "next/navigation"

// Loads stats under the profile image
import ProfileSideStatsBar from "../components/ProfileSideStatsBar";

export default async function Profile() {
  const session = await getServerSession(options);

  if(!session) {
    redirect('/api/auth/signin?callbackUrl=/profile')
  } 

  return (
    <>
      <div className="w-full lg:flex flex-wrap flex-row py-10">
        <div className="w-3/12 flex items-center justify-center">
          <Image
            src={`https://i.pravatar.cc/100?u=zz`}
            width={150}
            height={150}
            alt="alt"
            className="rounded-full"
          />
        </div>
        <div className="w-9/12">
          <p>Profile Name</p>
          <p>Profile Bio</p>
        </div>
      </div>
      <div className="w-full lg:flex flex-wrap flex-row">
        <ProfileSideStatsBar />
        <div className="w-9/12 bg-red-800">Profile desc</div>
      </div>
    </>
  )
}
