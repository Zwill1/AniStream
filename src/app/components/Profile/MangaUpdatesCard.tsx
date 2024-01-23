import Image from "next/image";

export interface MangaUpdateProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  pages: number;
  online_rating: string;
  language: string;
  publisher: string;
  pub_date: string,
  updated_when: string
}

interface Prop {
  manga: MangaUpdateProp;
  index: number;
}

function MangaUpdatesCard({ manga, index }: Prop) {

  return (
    <div className="flex">
        <div className="flex-1 md:flex-2">
        <Image src={manga.image.original} width={75} height={75} alt="Image" className="max-w-full mb-4" />
        </div>
        <div className="flex-1 md:flex-auto">
        <div>
            <p className="text-center text-sm text-white">{manga.name}</p>
            <p className="text-center text-sm text-white"><span className="font-bold">{manga.pages}</span> Pages</p>
            <p className="text-center text-sm text-white">Rating: <span className="font-bold">{manga.online_rating}</span></p>
            <p className="text-center text-sm text-white">{manga.publisher}</p>
            <p className="text-center text-sm text-white">Released: {manga.pub_date}</p>
        </div>
        </div>
        <div className="flex-1 md:flex-2">
        <p className="text-right text-sm text-white">{manga.updated_when}</p>
        </div>
    </div>
  );
}

export default MangaUpdatesCard;