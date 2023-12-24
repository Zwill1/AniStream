"use server";

import ProfileCard, { AnimePropCard } from "./components/ProfileCard";

export const fetchAnimeById = async (id : number) => {

    const testres = await fetch(`https://shikimori.one/api/animes/?id=50`);

    const testresdata = await testres.json();

    console.log(testresdata[0].id);
    console.log("done");


    // const response = await fetch(`https://shikimori.one/api/animes?id=${id}`);

    // const data = await response.json();

    // console.log(data);

    // return data.map((item: AnimePropCard, index: number) => (
    //     <ProfileCard key={item.id} anime={item} index={index} />
    //   ));
};