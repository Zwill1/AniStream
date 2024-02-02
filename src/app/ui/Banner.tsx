"use client";

import Image from "next/image";

function BannerHero() {
    return (
      <>
        <div className="md:w-6/12 text-center flex content-center">
        <Image
          src=""
          alt="placeholder hero image"
          className="dark:invert heroImage"
          width={1900}
          height={400}
          priority
        />
        <style jsx>{`
        /* displays anything past 1500px */
          .heroImage {
            background: red;
          }
        /* displays anything under 1500px */ 
          @media (max-width: 1500px) {
            .heroImage {
              background: yellow;
            }
          }
          @media (max-width: 1200px) {
            .heroImage {
              background: pink;
            }
          }
          @media (max-width: 900px) {
            .heroImage {
              background: blue;
            }
          }
          @media (max-width: 600px) {
            .heroImage {
              background: orange;
            }
          }
        `}</style>
        <style jsx>{`
          body {
            background: black;
          }
        `}</style>
      </div>
      </>
    )
  }
   
  export default BannerHero