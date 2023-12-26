import { fetchAnimeById } from "@/app/actionProfilePageData"

export default async function AnimeProfile({ params }: { params: { id: string } }) {

  const newUrlId = Number(params.id);

  console.log(params);  // string number
  console.log(newUrlId); // number converted from string

  const data = await fetchAnimeById(newUrlId);

  // console.log(data);

  return (
    <>
      {data}
    </>
  )
}
