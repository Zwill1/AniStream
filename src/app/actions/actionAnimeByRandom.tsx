"use server";

import AnimeCard, { AnimeProp } from "./../components/AnimeCard";

export const fetchAnimeByRandom = async (limit : number) => {
    const response = await fetch(`https://shikimori.one/api/animes?order=random&limit=${limit}`);

    const data = await response.json();

    // console.log(data);

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ));
};