import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function Profile() {
  const session = await getServerSession(options);

  if(!session) {
    redirect('/api/auth/signin?callbackUrl=/profile')
  } 

  return (
    <div className="w-full">
      <main className="flex flex-col">
        <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        <p>Profile page</p>
        <p>Profile page</p>
        <p>Profile page</p>
        <p>Profile page</p>
        <p>Profile page</p>
        <p>Profile page</p>
        </section>
      </main>
    </div>
  )
}
