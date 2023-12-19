
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './ui/Nav'
import Hero from './ui/Hero'

// layout

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <Hero />
        {/* <main className="max-w-7xl mx-auto bg-[#0F1117]"> */}
        <main className="w-full bg-[#0F1117]">
        {children}
        </main>
      </body>
    </html>
  )
}
