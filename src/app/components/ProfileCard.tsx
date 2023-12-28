import Image from "next/image";
import Link from "next/link";

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
  screenshots: {
    preview: string
  }
  videos: {
    url: string;
    player_url: string;
  }
  rating: string;
  myanimelist_id: number;
}

interface PropProfile {
  anime: AnimeProfileCard;
}


function ProfileCard({ anime } : PropProfile) {

  // console.log("this is coming from profile card");
  // console.log(anime.name);

  return (

  <>
    <div className="grid grid-cols-6 p-4">
      <div className="max-w-sm rounded relative w-full">
        <div className="relative w-full h-[37vh]">
          <Image
            src={`https://shikimori.one${anime.image.original}`}
            alt={anime.name}
            fill
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-subgrid gap-10 col-span-5">
        <div className="col-start-1 px-10">
          <h2 className="text-3xl text-white font-extrabold">{anime.name} / <span className="text-gray-500 italic text-sm">{anime.english}</span></h2>
          <div className="flex flex-row w-full my-3">            
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

            <div className="w-3/12 flex flex-row gap-2 items-center">
              <Image
                src="../episodes.svg"
                alt="episodes"
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="text-base text-white font-bold">Episode: {anime.episodes}</p>
            </div>

            
            <p className="w-3/12">Aired On: {anime.aired_on}</p>
            <p className="w-3/12">Rating: {anime.rating}</p>
            <p className="w-3/12">Status: {anime.status}</p>
          </div>
          {/* Data toggle based on IF there is any profile data summary */}
          {
            anime.description ?
            <p>{anime.description}</p> :
            <p>No data for this profile</p>
          }
          <Link href={`https://myanimelist.net/anime/${anime.myanimelist_id}`} target="_blank">
            <button className="px-5 py-2 bg-red-500 mt-5">MyAnimeList Profile</button>
          </Link>
        </div>
      </div>
    </div>
  </>
  );
}

export default ProfileCard;