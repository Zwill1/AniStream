"use server";

import AnimeCard, { AnimeProp } from "./../components/AnimeCard";

export const fetchOngoingAnime = async (limit : number) => {
    const response = await fetch(`https://shikimori.one/api/animes?status=ongoing&limit=${limit}&order=ranked`);

    const data = await response.json();

    // console.log(data);

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ));
};