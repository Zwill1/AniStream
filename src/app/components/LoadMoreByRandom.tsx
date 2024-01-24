"use client";

import { useEffect, useState } from "react";
import { fetchAnimeByRandom } from "../actions/actionAnimeByRandom"; 
import AnimeCard from "./AnimeCard";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

let page = 2;

export type AnimeCard = JSX.Element;

function LoadMoreByRandom() {

  const [isSending, setIsSending] = useState(false);
  const [data, setData] = useState<AnimeCard[]>([]);

//   console.log(data);

  useEffect(() => {
    if(isSending){
    //   alert("Load more");
        fetchAnimeByRandom(page).then((res) =>{
        setData([...data, ...res]);
        page++
        setIsSending(false);
      });
    }
  }, [isSending, data]);

  return (
    <>
      <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <section>
        <button className="w-full px-5 py-2 bg-green-600 hover:bg-green-900 text-white font-bold" onClick={() => setIsSending(true)}>Load More <ChevronRightIcon /></button>
      </section>
    </>
  );
}

export default LoadMoreByRandom;