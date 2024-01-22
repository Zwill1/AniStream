import Image from "next/image"
import Link from "next/link"
import Button from "../components/Button"

export default function HeroAnime(){
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
      <h1 className="pb-2">Welcome to NextJS App</h1>
      <p>Welcome to NextJS App – a haven crafted with love for anime enthusiasts like you! Immerse yourself in a captivating realm where your passion for Japanese animation is celebrated. Whether youre an avid otaku or just embarking on your anime journey, our community is your home. Explore our carefully curated library featuring timeless classics and the latest releases, connecting you with unforgettable characters and epic stories. Engage in lively discussions within our forums, swap recommendations, and uncover hidden gems.</p>
      <Button url={"/anime/ongoing"}>Ongoing Page</Button>
    </div>
    </section>
    </>
  )
}
