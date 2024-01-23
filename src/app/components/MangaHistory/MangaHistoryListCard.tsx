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
    pub_date: string;
    updated_when: string;
}

interface Prop {
    manga: MangaUpdateProp;
    index: number;
}

export default function MangaHistoryListCard({manga, index} : Prop) {
  return (
    <div className="flex lg:w-6/12 px-10 lg:px-0 mx-auto border-t border-gray-600 p-5">
        <div className="flex-1 md:flex-2">
        <Image src={manga.image.original} width={75} height={75} alt="Image" className="max-w-full mb-4" />
        </div>
        <div className="flex-1 md:flex-auto">
        <div>
            <p className="text-center text-sm text-white">{manga.name}</p>
            <p className="text-center text-sm text-white"><span className="font-bold">{manga.pages} Pages</span></p>
            <p className="text-center text-sm text-white"><span className="font-bold">{manga.online_rating}</span></p>
            <p className="text-center text-sm text-white">{manga.publisher}</p>
        </div>
        </div>
        <div className="flex-1 md:flex-2">
        <p className="text-right text-sm text-white">{manga.updated_when}</p>
        </div>
    </div>
  )
}
