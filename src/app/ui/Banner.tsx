import Image from "next/image";

function BannerHero() {
    return (
      <>
      {/* Small screens */}
      <div className="sm:block md:hidden md:w-6/12 text-center flex content-center">
      <Image
        src="/images/hero-1900x400.png"
        alt="placeholder hero image"
        className="dark:invert heroImage"
        width={1900}
        height={400}
        priority
      />
    </div>

      {/* Medium screens */}
    <div className="hidden md:block lg:hidden md:w-full text-center flex content-center">
      <Image
        src="/images/hero-1900x1200.png"
        alt="placeholder hero image"
        className="dark:invert heroImage"
        width={1900}
        height={400}
        priority
      />
    </div>

      {/* Large screens */}
    <div className="hidden md:hidden lg:block xl:hidden lg:w-full text-center flex content-center">
      <Image
        src="/images/hero-1900x400.png"
        alt="placeholder hero image"
        className="dark:invert heroImage"
        width={1900}
        height={400}
        priority
      />
    </div>

      {/* XL screens */}
    <div className="hidden md:hidden xl:block md:w-6/12 text-center flex content-center">
      <Image
        src="/images/hero-1900x1200.png"
        alt="placeholder hero image"
        className="dark:invert heroImage"
        width={1900}
        height={400}
        priority
      />
    </div>
      </>
    )
  }
   
  export default BannerHero