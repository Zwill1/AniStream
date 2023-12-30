"use server";

import VideoEmbed, {AnimeVideoCard} from "./../components/VideoEmbed";

export const fetchVideoEmbedById = async (id : number) => {

    const response = await fetch(`https://shikimori.one/api/animes/${id}`);

    const videoData = await response.json();

    // console.log("from video page");
    // console.log(videoData);

    return videoData.videos.map((item: AnimeVideoCard, index: number) => (
        <VideoEmbed key={item.id} anime={item} index={index} />
      ));

};