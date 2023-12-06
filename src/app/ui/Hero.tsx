import Image from "next/image"

export default function Hero() {
  return (
    <>
    <section>
    <Image
      src="/images/hero-1900x400.png"
      alt="placeholder hero image"
      className="dark:invert"
      width={1900}
      height={400}
      priority
    />
    </section>
    </>
  )
}
