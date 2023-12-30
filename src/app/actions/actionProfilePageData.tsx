"use server";

import ProfileCard from "./../components/ProfileCard";

export const fetchAnimeById = async (id : number) => {

    const response = await fetch(`https://shikimori.one/api/animes/${id}`);

    const data = await response.json();

    // console.log(data);

    // console.log("data from action " + data.image.original);

    return (
      <>
        <ProfileCard anime={data}  />
      </>
      );

};