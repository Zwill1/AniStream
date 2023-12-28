
export interface AnimeVideoCard {
    id: string;
    name: string;
    url: string;
    player_url: string;
  }
  
  interface PropVideo {
    anime: AnimeVideoCard;
    index: number;
  }

function VideoEmbed({ anime, index } : PropVideo) {

    // console.log("video embed card");
    // console.log(anime);

  return (
    <>
        <div className="w-3/12">
            <iframe width="100%" height="315" src={anime.player_url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    </>
  )
}

export default VideoEmbed