import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function Profile() {
  const session = await getServerSession(options);

  if(!session) {
    redirect('/api/auth/signin?callbackUrl=/profile')
  } 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <p>Profile page</p>
    </main>
  )
}
