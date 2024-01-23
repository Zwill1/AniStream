import { useSession, signIn, signOut } from "next-auth/react"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Component() {
  const { data: session } = useSession();

  // Server component
  // get current path directory to pass active class depending on the page
  const pathname =  usePathname();

  if (session) {
    return (
      <>     
      <li className="p-1 border-b border-gray-200">
        <Link href="/profile" className={`${pathname === '/profile' ? 'active block' : 'block'}`}>
            Profile
        </Link>
      </li>
      <li className="p-1 border-b border-gray-200">
        <span className="block" onClick={() => signOut()}>
          Sign out
        </span>
      </li>
      </>
    )
  }
  return (
    <>
      <li className="p-1 cursor-pointer">
        <span className="block" onClick={() => signIn()}>
          Sign in
        </span>
      </li>
    </>
  )
}