import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export default async function About() {
  const session = await getServerSession(options)

  return (
    <>
    {session ? (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <p>About page</p>
      </main>
    ) : (
      <main className="flex min-h-screen flex-col items-center justify-between">
      <p>no page access</p>
    </main>
    )}
    </>
  )
}
