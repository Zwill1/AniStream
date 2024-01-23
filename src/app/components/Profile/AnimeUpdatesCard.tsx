import Image from "next/image";

export interface AnimeUpdateProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
  episode_watched: number;
  updated_when: string;
}

interface Prop {
  anime: AnimeUpdateProp;
  index: number;
}

function AnimeUpdatesCard({ anime, index }: Prop) {

    // console.log(anime);

  return (
    <div className="flex">
        <div className="flex-1 md:flex-2">
        <Image src={anime.image.original} width={75} height={75} alt="Image" className="max-w-full mb-4" />
        </div>
        <div className="flex-1 md:flex-auto">
        <div>
            <p className="text-center text-sm text-white">{anime.name}</p>
            <p className="text-center text-sm text-white">Watching <span className="font-bold">{anime.episode_watched}</span> / <span className="font-bold text-white">{anime.episodes}</span></p>
            <p className="text-center text-sm text-white"><span className="font-bold">{anime.score}</span></p>
            <p className="text-center text-sm text-white">{anime.kind}</p>
        </div>
        </div>
        <div className="flex-1 md:flex-2">
        <p className="text-right text-sm text-white">{anime.updated_when}</p>
        </div>
    </div>
  );
}

export default AnimeUpdatesCard;