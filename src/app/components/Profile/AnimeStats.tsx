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
                <p>Watching</p>
                <p>{data.Watching}</p>
            </div>
            <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                <p>Total Entries</p>
                <p>{data.TotalEntries}</p>
            </div>
        </div>

        {/* Row #2 */}
        <div className="w-full lg:px-4 lg:flex lg:py-1">
            <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                <p>Completed</p>
                <p>{data.Completed}</p>
            </div>
            <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                <p>Rewatched</p>
                <p>{data.Rewatched}</p>
            </div>
        </div>

        {/* Row #3 */}
        <div className="w-full lg:px-4 lg:flex lg:py-1">
            <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                <p>On-Hold</p>
                <p>{data.OnHold}</p>
            </div>
            <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                <p>Episode</p>
                <p>{data.Episodes}</p>
            </div>
        </div>

        {/* Row #3 */}
        <div className="w-full lg:px-4 lg:flex lg:py-1">
            <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                <p>Dropped</p>
                <p>{data.Dropped}</p>
            </div>
            <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                <p>Plan to Watch</p>
                <p>{data.PlanToWatch}</p>
            </div>
        </div>

    </div>
    </>
  )
}
