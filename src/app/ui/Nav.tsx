// Use client to handle state management for mobile
'use client';

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavLoginLI from "@/app/components/NavLoginLI"
import WelcomeAccountName from "../components/WelcomeAccountName";
import NavMobileDropdownLoginLi from "../components/NavMobileDropdownLoginLi";

export default function Navlinks() {

  // Server component
  // get current path directory to pass active class depending on the page
  const pathname =  usePathname();

  // operates nav and mobile nav (use client)
  const [nav, setNav] = useState(false);
  const [isDropDown, setDropDown] = useState(false);

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  const dropDownClick = () => setDropDown(!isDropDown);

  return (
  <>
    <section className="border-b-2 border-black">
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
            <WelcomeAccountName />
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
            <li className="p-4 flex cursor-pointer" onClick={dropDownClick}>
                  {/* uses isdropdown state to change the icon on the dropdown */}
                  <span>Account {isDropDown ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>

                  {/* placing in a dropdown menu on click. Use state to set the menu */}
                  <ul className={!isDropDown ? "hidden" : "absolute w-[185px] bg-white float-left text-center top-[50px] pt-1 z-50" }>  
                    <NavLoginLI />
                  </ul>
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
          !nav ? "hidden" : "absolute bg-white w-full lg:hidden z-50"
        }>
        {/* <li className="border-zinc-300 w-full mx-auto pt-4 pb-4 text-center border-b border-gray-200">
          <Link href="/" className={`${pathname === '/' ? 'active' : ''}`} onClick={handleClose}>
            Home
          </Link>
        </li>
        <li className="border-zinc-300 w-full mx-auto pt-4 pb-4 text-center border-b border-gray-200">
          <Link href="/anime" className={`${pathname === '/anime' ? 'active' : ''}`} onClick={handleClose}>
            Anime
          </Link>
        </li>
        <li className="border-zinc-300 w-full mx-auto pt-4 pb-4 text-center border-b border-gray-200">
          <Link href="/signin" className={`${pathname === '/signin' ? 'active' : ''}`} onClick={handleClose}>
            Sign In
          </Link>
        </li>
        <li className="border-zinc-300 w-full mx-auto pt-4 pb-4 text-center border-b border-gray-200">
          <Link href="/api/auth/signout" className={`${pathname === '/signout' ? 'active' : ''}`} onClick={handleClose}>
            Sign Out
          </Link>
        </li> */}
        <NavMobileDropdownLoginLi />
      </ul>
    </section>
  </>
)
}
