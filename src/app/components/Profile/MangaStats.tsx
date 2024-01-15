import * as mangaObj from '../../data/mangaStatsData.json';
export default function MangaStats() {

    // bring in a local json file with all the stats for anime being watched

    const mangaData = mangaObj[0];
    // console.log(mangaData.Reading);

    return (
      <>
      <div className="w-full">
          
          {/* Row #1 */}
          <div className="w-full lg:px-4 lg:flex lg:py-1">
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p className="flex items-center"><span className="w-3 h-3 rounded-full bg-green-500 block mx-2"></span>Reading</p>
                  <p className="font-bold">{mangaData.Reading}</p>
              </div>
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p className="flex items-center"><span className="w-3 h-3 rounded-full bg-white block mx-2"></span>Total Entries</p>
                  <p className="font-bold">{mangaData.TotalEntries}</p>
              </div>
          </div>
  
          {/* Row #2 */}
          <div className="w-full lg:px-4 lg:flex lg:py-1">
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p className="flex items-center"><span className="w-3 h-3 rounded-full bg-blue-500 block mx-2"></span>Completed</p>
                  <p className="font-bold">{mangaData.Completed}</p>
              </div>
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p className="flex items-center"><span className="w-3 h-3 rounded-full bg-pink-500 block mx-2"></span>Reread</p>
                  <p className="font-bold">{mangaData.Reread}</p>
              </div>
          </div>
  
          {/* Row #3 */}
          <div className="w-full lg:px-4 lg:flex lg:py-1">
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p className="flex items-center"><span className="w-3 h-3 rounded-full bg-yellow-500 block mx-2"></span>On-Hold</p>
                  <p className="font-bold">{mangaData.OnHold}</p>
              </div>
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p className="flex items-center"><span className="w-3 h-3 rounded-full bg-purple-500 block mx-2"></span>Chapters</p>
                  <p className="font-bold">{mangaData.Chapters}</p>
              </div>
          </div>
  
          {/* Row #3 */}
          <div className="w-full lg:px-4 lg:flex lg:py-1">
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p className="flex items-center"><span className="w-3 h-3 rounded-full bg-red-500 block mx-2"></span>Dropped</p>
                  <p className="font-bold">{mangaData.Dropped}</p>
              </div>
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p className="flex items-center"><span className="w-3 h-3 rounded-full bg-gray-500 block mx-2"></span>Plan to Read</p>
                  <p className="font-bold">{mangaData.PlanToRead}</p>
              </div>
          </div>
  
      </div>
      </>
    )
  }
  