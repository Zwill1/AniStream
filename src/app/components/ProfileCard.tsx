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
  screenshots: {
    preview: string
  }
  videos: {
    url: string;
    player_url: string;
  }
  rating: string;
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
          <p>{anime.description}</p>
        </div>
      </div>
    </div>

    <div className="flex flex-row w-full pl-4">
      <h2 className="text-3xl text-white font-extrabold">Videos</h2>
    </div>
    <div className="flex flex-row w-full p-4 gap-4">
      <div className="w-3/12">
        <iframe width="100%" height="315" src={anime.videos[0].player_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="w-3/12 bg-red-100">
        <iframe width="100%" height="315" src={anime.videos[1].player_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>

    <div className="flex flex-row w-full pl-4">
      <h2 className="text-3xl text-white font-extrabold">Screenshots</h2>
    </div>
    <div className="flex flex-row w-full p-4 gap-4">
      <div className="w-3/12">
        <Image
          src={`https://shikimori.one${anime.screenshots[0].preview}`}
          alt={anime.name}
          width={500}
          height={500}
        />
      </div>
      <div className="w-3/12">
        <Image
          src={`https://shikimori.one${anime.screenshots[1].preview}`}
          alt={anime.name}
          width={500}
          height={500}
        />
      </div>
    </div>

  </>
  );
}

export default ProfileCard;