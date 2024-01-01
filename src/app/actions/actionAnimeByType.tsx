"use server";

import AnimeCard, { AnimeProp } from "./../components/AnimeCard";

export const fetchAnimeByType = async (page : number) => {
    const response = await fetch(`https://shikimori.one/api/animes?page=${page}&order=kind&limit=6`);

    const data = await response.json();

    // console.log(data);

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ));
};