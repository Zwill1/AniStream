import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import Link from "next/link";

// export interface AnimePropCard {
//   id: string;
//   name: string;
//   image: {
//     original: string;
//   };
//   kind: string;
//   episodes: number;
//   episodes_aired: number;
//   score: string;
// }

// interface Prop {
//   anime: AnimePropCard;
//   index: number;
// }


function ProfileCard({ anime, image, engName } : any) {

    console.log("This is the show " + anime);
  return (
    <div className="max-w-sm rounded relative w-full">
      <h2 className="text-3xl text-white font-bold">{anime}</h2>
      <h3>{engName}</h3>
      <div className="relative w-full h-[37vh]">
        <Image
          src={`https://shikimori.one${image}}`}
          alt={anime}
          fill
          className="rounded-xl"
        />
      </div>
      {/* <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
            <p>anime id: {anime.id}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ProfileCard;