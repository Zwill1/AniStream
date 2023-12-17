import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function Signin() {
  const session = await getServerSession(options);

  // sigin page for the user to land on. Once signed in, will redirect to /profile.
  // if not signed in, will require the sign in and then redirect

  if(session) {
    redirect('/profile')
  } 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    </main>
  )
}
