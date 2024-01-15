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
                  <p>Reading</p>
                  <p>{mangaData.Reading}</p>
              </div>
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p>Total Entries</p>
                  <p>{mangaData.TotalEntries}</p>
              </div>
          </div>
  
          {/* Row #2 */}
          <div className="w-full lg:px-4 lg:flex lg:py-1">
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p>Completed</p>
                  <p>{mangaData.Completed}</p>
              </div>
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p>Reread</p>
                  <p>{mangaData.Reread}</p>
              </div>
          </div>
  
          {/* Row #3 */}
          <div className="w-full lg:px-4 lg:flex lg:py-1">
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p>On-Hold</p>
                  <p>{mangaData.OnHold}</p>
              </div>
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p>Chapters</p>
                  <p>{mangaData.Chapters}</p>
              </div>
          </div>
  
          {/* Row #3 */}
          <div className="w-full lg:px-4 lg:flex lg:py-1">
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p>Dropped</p>
                  <p>{mangaData.Dropped}</p>
              </div>
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p>Plan to Read</p>
                  <p>{mangaData.PlanToRead}</p>
              </div>
          </div>
  
      </div>
      </>
    )
  }
  