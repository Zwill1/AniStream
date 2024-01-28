"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function FooterSessionLogList() {

  const {data: session} = useSession();
  const pathname = usePathname();

  if (session) {
    return (
      <>
        <li className="text-xs cursor-pointer leading-6">
          <Link href="/profile" className={`${pathname === '/profile' ? 'active block cursor-pointer' : 'block cursor-pointer;'}`}>Profile</Link>
        </li>
        <li className="text-xs cursor-pointer leading-6" onClick={() => signOut()}>Sign Out</li>  
      </>
    )
  }
  return (
    <>
      <li className="text-xs cursor-pointer leading-6" onClick={() => signIn()}>Sign In</li>
      <li className="text-xs leading-6">
        <Link href="/profile" className={`${pathname === '/profile' ? 'active block cursor-pointer' : 'block cursor-pointer'}`}>Profile</Link>
      </li>
    </>
  )
}
