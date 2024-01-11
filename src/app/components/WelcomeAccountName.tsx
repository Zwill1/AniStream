import { useSession, signIn, signOut } from "next-auth/react"

export default function WelcomeAccountName() {
  const { data: session } = useSession();


  if (session) {
    return (
      <>     
      <li className="p-4 flex">
        <span>
          Welcome, <span className="italic font-bold">{session?.user.name}</span>
        </span>
      </li>
      </>
    )
  }
  return (
    <>
      <li className="p-4 flex">
        <span className="italic font-bold">
          Not Signed In
        </span>
      </li>
    </>
  )
}