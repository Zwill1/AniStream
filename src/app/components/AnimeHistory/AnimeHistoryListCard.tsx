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
    <div className="flex lg:w-6/12 px-10 lg:px-0 mx-auto border-t border-gray-600 p-5">
        <div className="flex-1 md:flex-2">
        <Image src={anime.image.original} width={75} height={75} alt="Image" className="max-w-full mb-4" />
        </div>
        <div className="flex-1 md:flex-auto">
        <div>
            <p className="text-center text-sm text-white">{anime.name}</p>
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

export default AnimeHistoryListCard;