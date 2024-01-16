import Image from "next/image";

export default function AnimeUpdates() {
  return (
    <>
        <div className="w-full">
          {/* bring in a card map list of a json file */}
          {/* Items-center to vertical align */}
          
          <div className="flex">
            <div className="flex-1 md:flex-2">
              <Image src={`https://i.pravatar.cc/100?u=zz`} width={100} height={100} alt="Image" className="max-w-full mb-4" />
            </div>
            <div className="flex-1 md:flex-2">
              <div>
                <p className="text-center">(Anime Name)</p>
                <p className="text-center">Watching (Number)/(Number)</p>
              </div>
            </div>
            <div className="flex-1 md:flex-auto">
              <p className="text-center">Time</p>
            </div>
          </div>
        </div>
    </>
  )
}
