import * as dataObj from "../../data/animeStatsData.json"
export default function AnimeStats() {

    // bring in a local json file with all the stats for anime being watched
    
    // const [data, setData] = useState(null)
    // const [isLoading, setLoading] = useState(true)
   
    // useEffect(() => {
    //   fetch('./src/app/data/animeStatsData.ts')
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setData(data)
    //       console.log(data);
    //       setLoading(false)
    //     })
    // }, [])
   
    // if (isLoading) return <p>Loading...</p>
    // if (!data) return <p>No Anime data</p>

    const data = dataObj[0];
    // console.log(data.Watching);

  return (
    <>
    <div className="w-full">
        
        {/* Row #1 */}
        <div className="w-full lg:px-4 lg:flex lg:py-1">
            <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                <p className="flex items-center text-white"><span className="w-3 h-3 rounded-full bg-green-500 block mx-2"></span>Watching</p>
                <p className="font-bold text-white">{data.Watching}</p>
            </div>
            <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                <p className="flex items-center text-white"><span className="w-3 h-3 rounded-full bg-white block mx-2"></span>Total Entries</p>
                <p className="font-bold text-white">{data.TotalEntries}</p>
            </div>
        </div>

        {/* Row #2 */}
        <div className="w-full lg:px-4 lg:flex lg:py-1">
            <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                <p className="flex items-center text-white"><span className="w-3 h-3 rounded-full bg-blue-500 block mx-2"></span>Completed</p>
                <p className="font-bold text-white">{data.Completed}</p>
            </div>
            <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                <p className="flex items-center text-white"><span className="w-3 h-3 rounded-full bg-pink-500 block mx-2"></span>Rewatched</p>
                <p className="font-bold text-white">{data.Rewatched}</p>
            </div>
        </div>

        {/* Row #3 */}
        <div className="w-full lg:px-4 lg:flex lg:py-1">
            <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                <p className="flex items-center text-white"><span className="w-3 h-3 rounded-full bg-yellow-500 block mx-2"></span>On-Hold</p>
                <p className="font-bold text-white">{data.OnHold}</p>
            </div>
            <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                <p className="flex items-center text-white"><span className="w-3 h-3 rounded-full bg-purple-500 block mx-2"></span>Episode</p>
                <p className="font-bold text-white">{data.Episodes}</p>
            </div>
        </div>

        {/* Row #3 */}
        <div className="w-full lg:px-4 lg:flex lg:py-1">
            <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                <p className="flex items-center text-white"><span className="w-3 h-3 rounded-full bg-red-500 block mx-2"></span>Dropped</p>
                <p className="font-bold text-white">{data.Dropped}</p>
            </div>
            <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                <p className="flex items-center text-white"><span className="w-3 h-3 rounded-full bg-gray-500 block mx-2"></span>Plan to Watch</p>
                <p className="font-bold text-white">{data.PlanToWatch}</p>
            </div>
        </div>

    </div>
    </>
  )
}
