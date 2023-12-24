"use server";

import ProfileCard from "./components/ProfileCard";

export const fetchAnimeById = async (id : number) => {

    const response = await fetch(`https://shikimori.one/api/animes/${id}`);

    const data = await response.json();

    // console.log(data);

    // console.log("data from action " + data.image.original);

    return (
        // <p>id: {data.id} / {data.name} / {data.image.original}</p>
        <ProfileCard anime={data.name} image={data.image.original} engName={data.english[0]} />
      );

};