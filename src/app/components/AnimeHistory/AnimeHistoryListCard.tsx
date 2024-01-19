import Image from "next/image";

export interface AnimeHistoryListProp {
    id: string;
    name: string;
    image: {
        original: string;
    };
    kind: string;
    score: string;
    updated_when: string;
}

interface Prop {
    anime: AnimeHistoryListProp;
    index: number;
}

function AnimeHistoryListCard({anime, index}: Prop) {
  return (
    <div className="">
        <div className="flex-1 md:flex-2">
        <Image src={anime.image.original} width={75} height={75} alt="Image" className="max-w-full mb-4" />
        </div>
        <div className="flex-1 md:flex-auto">
        <div>
            <p className="text-center text-sm">{anime.name}</p>
            <p className="text-center text-sm"><span className="font-bold">{anime.score}</span></p>
            <p className="text-center text-sm">{anime.kind}</p>
        </div>
        </div>
        <div className="flex-1 md:flex-2">
        <p className="text-right text-sm">{anime.updated_when}</p>
        </div>
    </div>
  );
}

export default AnimeHistoryListCard;