'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlinks() {

  const pathname =  usePathname();

  return (
    <div>
      <p><Link href="/" className={`link ${pathname === '/' ? 'active' : ''}`}>Home</Link></p>
      <p><Link href="/about" className={`link ${pathname === '/about' ? 'active' : ''}`}>About</Link></p>
    </div>
  )
}
