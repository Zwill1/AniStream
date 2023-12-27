import Image from "next/image";

export interface AnimeProfileCard {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
  english: string;
  description: string;
  aired_on: string;
  status: string;
}

interface PropProfile {
  anime: AnimeProfileCard;
}


function ProfileCard({ anime } : PropProfile) {

  // console.log("this is coming from profile card " + anime);

  return (

  <>
    <div className="grid grid-cols-6 p-4">
      <div className="max-w-sm rounded relative w-full">
        <div className="relative w-full h-[37vh]">
          <Image
            src={`https://shikimori.one${anime.image.original}}`}
            alt={anime.name}
            fill
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-subgrid gap-10 col-span-5">
        <div className="col-start-1 px-10">
          <h2 className="text-3xl text-white font-extrabold">{anime.name} / <span className="text-gray-500 italic text-sm">{anime.english}</span></h2>
          <div className="flex flex-row w-full">
            <div className="w-3/12 flex flex-row gap-2 items-center">
              <Image
                src="../star.svg"
                alt="star"
                width={18}
                height={18}
                className="object-contain"
              />
              <p className="text-base font-bold text-[#FFAD49]">Score: {anime.score}</p>
            </div>
            <p className="w-3/12">Episode: {anime.episodes}</p>
            <p className="w-3/12">Aired On: {anime.aired_on}</p>
            <p className="w-3/12">Status: {anime.status}</p>
          </div>
          <p>{anime.description}</p>
        </div>
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
          </div>
        </div>
      </div> */}
    </div>

  </>
  );
}

export default ProfileCard;