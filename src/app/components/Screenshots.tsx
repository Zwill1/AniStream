import Image from "next/image";

export interface ScreenshotCard {
    original: string;
    preview: string;
  }
  
  interface PropScreenshots {
    anime: ScreenshotCard;
    index: number;
  }

function VideoEmbed({ anime, index } : PropScreenshots) {

    console.log("screenshot card");
    console.log(anime);

  return (
    <>
        <div className="w-3/12">
            <Image
            src={`https://shikimori.one${anime.preview}`}
            alt={anime.preview}
            width={500}
            height={500}
            />
        </div>
    </>
  )
}

export default VideoEmbed