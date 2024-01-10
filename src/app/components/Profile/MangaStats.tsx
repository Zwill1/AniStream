export default function MangaStats() {
    return (
      <>
      <div className="w-full">
          
          {/* Row #1 */}
          <div className="w-full lg:px-4 lg:flex lg:py-1">
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p>Watching</p>
                  <p>(number)</p>
              </div>
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p>Total Entries</p>
                  <p>(number)</p>
              </div>
          </div>
  
          {/* Row #2 */}
          <div className="w-full lg:px-4 lg:flex lg:py-1">
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p>Completed</p>
                  <p>(number)</p>
              </div>
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p>Rewatched</p>
                  <p>(number)</p>
              </div>
          </div>
  
          {/* Row #3 */}
          <div className="w-full lg:px-4 lg:flex lg:py-1">
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p>On-Hold</p>
                  <p>(number)</p>
              </div>
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p>Episode</p>
                  <p>(number)</p>
              </div>
          </div>
  
          {/* Row #3 */}
          <div className="w-full lg:px-4 lg:flex lg:py-1">
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p>Dropped</p>
                  <p>(number)</p>
              </div>
              <div className="flex lg:w-6/12 justify-between px-2 lg:px-10">
                  <p>Plan to Watch</p>
                  <p>(number)</p>
              </div>
          </div>
  
      </div>
      </>
    )
  }
  