import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function Profile() {
  const session = await getServerSession(options);

  if(!session) {
    redirect('/api/auth/signin?callbackUrl=/profile')
  } 

  return (
    <>
      <div className="w-full lg:flex flex-wrap flex-row">
        <p className="w-3/12 bg-red-300">Profile pic</p>
        <p className="w-9/12 bg-red-800">Profile desc</p>
      </div>
      <div className="w-full lg:flex flex-wrap flex-row">
        <p className="w-3/12 bg-red-300">Profile pic</p>
        <p className="w-9/12 bg-red-800">Profile desc</p>
      </div>
    </>
  )
}
