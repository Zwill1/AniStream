import Image from "next/image"
import Button from "../components/Button"
import BannerHero from "./Banner"

export default function Hero() {
  return (
    <>
    <section className="xl:flex w-full flex-row-reverse">
      {/* top banner for media queries */}
      <BannerHero />
    <div className="w-full xl:w-6/12 text-center px-10 py-20 bg-gray-800">
      <h1 className="pb-2 text-white font-bold text-2xl uppercase">Welcome to AniStream</h1>
      <p className="text-white">Welcome to NextJS App – a haven crafted with love for anime enthusiasts like you! Immerse yourself in a captivating realm where your passion for Japanese animation is celebrated. Whether youre an avid otaku or just embarking on your anime journey, our community is your home. Explore our carefully curated library featuring timeless classics and the latest releases, connecting you with unforgettable characters and epic stories. Engage in lively discussions within our forums, swap recommendations, and uncover hidden gems.</p>
      <Button url={"/signin"}>Sign in NOW!</Button>
    </div>
    </section>
    </>
  )
}
