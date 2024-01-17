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
  episode_watched: number,
  updated_when: string
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
        <Image src={anime.image.original} width={100} height={100} alt="Image" className="max-w-full mb-4" />
        </div>
        <div className="flex-1 md:flex-auto">
        <div>
            <p className="text-center">{anime.name}</p>
            <p className="text-center">Watching <span className="font-bold">{anime.episode_watched}</span> / <span className="font-bold">{anime.episodes}</span></p>
            <p className="text-center"><span className="font-bold">{anime.score}</span></p>
            <p className="text-center">{anime.kind}</p>
        </div>
        </div>
        <div className="flex-1 md:flex-2">
        <p className="text-right">{anime.updated_when}</p>
        </div>
    </div>
  );
}

export default AnimeUpdatesCard;