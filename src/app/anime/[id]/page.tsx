import { fetchAnimeById } from "@/app/actionProfilePageData"

export default async function AnimeProfile({ params }: { params: { id: string } }) {

  const newUrlId = Number(params.id);

  console.log(params);  // string number
  console.log(newUrlId); // number converted from string

  const data = await fetchAnimeById(newUrlId);

  return (
    <>
      <div className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        {/* <h2 className="text-3xl text-white font-bold">Profile page id : {params.id} / {newUrlId}</h2> */}
        <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {data}
        </section>
      </div>
    </>
  )
}
