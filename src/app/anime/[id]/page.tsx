import { fetchAnimeById } from "@/app/actions/actionProfilePageData"
import { fetchVideoEmbedById } from "@/app/actions/actionVideoPageData";
import { fetchScreenshotsById } from "@/app/actions/actionScreenshotPageData";

export default async function AnimeProfile({ params }: { params: { id: string } }) {

  const newUrlId = Number(params.id);

  console.log(params);  // string number
  console.log(newUrlId); // number converted from string

  const data = await fetchAnimeById(newUrlId);

  const videoData = await fetchVideoEmbedById(newUrlId);

  const screenshotData = await fetchScreenshotsById(newUrlId);

  // console.log(data);

  return (
    <>
      {data}

      {/* This is the screenshots section of data pulled per the user ID fetch action in url params */}
      <div className="flex flex-row w-full pl-4">
        <h2 className="text-3xl text-white font-extrabold">Screenshots</h2>
      </div>
      <div className="flex flex-row w-full p-4 gap-4">
        {screenshotData}
      </div>

      {/* This is the videos section of data pulled per the user ID fetch action in url params */}
      <div className="flex flex-row w-full pl-4">
        <h2 className="text-3xl text-white font-extrabold">Videos</h2>
      </div>
      <div className="flex flex-row w-full p-4 gap-4">
        {videoData}
      </div>
    </>
  )
}
