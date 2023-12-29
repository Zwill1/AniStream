// Use client to handle state management for mobile
'use client';

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navlinks() {

  // Server component
  // get current path directory to pass active class depending on the page
  const pathname =  usePathname();

  // operates nav and mobile nav (use client)
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
  <>
    <section className="border-b-2">
      <div className="flex justify-between md:w-full h-14 w-10/12 mx-auto container items-center">
        <div>
          <h1 className="flex">
            <Link
              href="/"
              className="font-bold mr-4 text-2xl sm:text-3xl md:text-4xl uppercase">
              NextJS App
            </Link>
          </h1>
        </div>
        <div>
          <ul className="hidden lg:flex pr-4">
            <li className="p-4">
              <Link href="/" className={`${pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li className="p-4">
              <Link href="/anime" className={`${pathname === '/anime' ? 'active' : ''}`}>
                Anime
              </Link>
            </li>
            <li className="p-4">
              <Link href="/schedule" className={`${pathname === '/schedule' ? 'active' : ''}`}>
                Schedule
              </Link>
            </li>
            <li className="p-4">
              <Link href="/signin" className={`${pathname === '/signin' ? 'active' : ''}`}>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-5" />
          ) : (
            <CloseIcon className="w-5" />
          )}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute bg-slate-700 w-full lg:hidden z-50"
        }>
        <li className="border-zinc-300 w-10/12 mx-auto pt-4 pb-4 text-center">
          <Link href="/" className={`${pathname === '/' ? 'active' : ''}`} onClick={handleClose}>
            Home
          </Link>
        </li>
        <li className="border-zinc-300 w-10/12 mx-auto pt-4 pb-4 text-center">
          <Link href="/anime" className={`${pathname === '/anime' ? 'active' : ''}`} onClick={handleClose}>
            Anime
          </Link>
        </li>
        <li className="border-zinc-300 w-10/12 mx-auto pt-4 pb-4 text-center">
          <Link href="/schedule" className={`${pathname === '/schedule' ? 'active' : ''}`} onClick={handleClose}>
            Schedule
          </Link>
        </li>
        <li className="border-zinc-300 w-10/12 mx-auto pt-4 pb-4 text-center">
          <Link href="/signin" className={`${pathname === '/signin' ? 'active' : ''}`} onClick={handleClose}>
            Sign In
          </Link>
        </li>
      </ul>
    </section>
  </>
)
}
