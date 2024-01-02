import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession();

  // console.log("login btn comp");
  // console.log(session?.user.name);

  if (session) {
    return (
      <>     
      <li className="p-4 flex">
        <span>
          Welcome, <span className="italic font-bold">{session?.user.name}</span> <button className="px-2 bg-red-500" onClick={() => signOut()}>Sign out</button>
        </span>
      </li>
      </>
    )
  }
  return (
    <>
      <li className="p-4 flex">
        <span>
          Not signed in <button className="px-2 bg-red-500" onClick={() => signIn()}>Sign In</button>
        </span>
      </li>
    </>
  )
}