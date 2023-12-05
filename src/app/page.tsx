import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-5">
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      className="dark:invert"
      width={100}
      height={24}
      priority
    />

    </main>
  )
}
