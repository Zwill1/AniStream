import { useSession, signIn, signOut } from "next-auth/react"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMobileDropdownLoginLi({handle} : any) {
  const { data: session } = useSession();

  // Server component
  // get current path directory to pass active class depending on the page
  const pathname =  usePathname();

  // add on click to mobile nav with client component for LI Link and testing it
  // console.log(handle);

  if (session) {
    return (
      <>
        <li className="border-zinc-300 w-full mx-auto pt-4 pb-4 text-center border-b border-gray-200 cursor-pointer">
            <Link href="/" className={`${pathname === '/' ? 'active block' : 'block'}`} onClick={handle}>
                Home
            </Link>
        </li>
        <li className="border-zinc-300 w-full mx-auto pt-4 pb-4 text-center border-b border-gray-200 cursor-pointer">
            <Link href="/anime" className={`${pathname === '/anime' ? 'active block' : 'block'}`} onClick={handle}>
                Anime
            </Link>
        </li>  
        <li className="border-zinc-300 w-full mx-auto pt-4 pb-4 text-center border-b border-gray-200 cursor-pointer">
            <Link href="/profile" className={`${pathname === '/profile' ? 'active block' : 'block'}`} onClick={handle}>
                Profile
            </Link>
        </li>
        <li className="border-zinc-300 w-full mx-auto pt-4 pb-4 text-center border-b border-gray-200 cursor-pointer" onClick={handle}>
            <span className="block" onClick={() => signOut()}>
                Sign out
            </span>
        </li>
      </>
    )
  }
  return (
    <>
        <li className="border-zinc-300 w-full mx-auto pt-4 pb-4 text-center border-b border-gray-200 cursor-pointer">
            <Link href="/" className={`${pathname === '/' ? 'active block' : 'block'}`} onClick={handle}>
                Home
            </Link>
        </li>
        <li className="border-zinc-300 w-full mx-auto pt-4 pb-4 text-center border-b border-gray-200 cursor-pointer">
            <Link href="/anime" className={`${pathname === '/anime' ? 'active block' : 'block'}`} onClick={handle}>
                Anime
            </Link>
        </li> 
        <li className="border-zinc-300 w-full mx-auto pt-4 pb-4 text-center border-b border-gray-200 cursor-pointer" onClick={handle}>
            <span className="block" onClick={() => signIn()}>
            Sign in
            </span>
        </li>
    </>
  )

}
