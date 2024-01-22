import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import Image from "next/image";
import { redirect } from "next/navigation"

// Loads stats under the profile image
import ProfileSideStatsBar from "../components/Profile/ProfileSideStatsBar";
import ProfileCategoryStats from "../components/Profile/ProfileCategoryStats";


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
          <h2 className="font-bold text-2xl">John Smith</h2>
          <p>Aenean porta ac eros eget suscipit. Ut euismod facilisis volutpat. Nullam nec tristique erat. Phasellus porttitor ornare dolor facilisis ullamcorper. Aliquam ac euismod neque, nec congue dui. Donec vel feugiat dui. In mattis vel magna at tincidunt. Cras vehicula mollis elit eget sodales. Mauris dolor massa, varius et tempor sit amet, pellentesque a ex. Curabitur ligula lacus, luctus quis feugiat a, pellentesque id quam. In ullamcorper egestas luctus. Proin placerat, metus sit amet rhoncus pretium, lectus felis efficitur lorem, ut feugiat elit nibh id ipsum. Nulla facilisis dictum justo non condimentum. Suspendisse a quam vitae nibh dapibus suscipit.</p>
        </div>
      </div>
      <div className="w-full lg:flex flex-wrap flex-row">
        <ProfileSideStatsBar />
        <ProfileCategoryStats />
      </div>
    </>
  )
}
