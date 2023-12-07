import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <>
    <section className="md:flex w-full flex-row-reverse">
    <div className="md:w-6/12 text-center flex content-center">
    <Image
      src="/images/hero-1900x400.png"
      alt="placeholder hero image"
      className="dark:invert"
      width={1900}
      height={400}
      priority
    />
    </div>
    <div className="md:w-6/12 text-center px-10 py-20 bg-gray-800">
      <h1 className="pb-2">Welcome to COMPANY NAME HERE</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <button className="mt-5 bg-black py-2 px-4">
        <Link href="/signin">Watch Now!</Link>
      </button>
    </div>
    </section>
    </>
  )
}
