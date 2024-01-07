export default function ProfileCategoryStats() {
  return (
    <>
    <section className="w-full lg:w-9/12 lg:px-10">
      {/* Heading for 2 column */}
      <div>
        <h2 className="font-bold text-2xl">Statistics</h2>
      </div>
      <div className="flex">
        <div className="w-6/12 px-2">
          <div className="flex justify-between">
            <p>Anime Stats</p>
            <p>All Anime Stats</p>
          </div>
        </div>
        <div className="w-6/12 px-2">
          <div className="flex justify-between">
            <p>Last Anime Updates</p>
            <p>Anime History</p>
          </div>
        </div>
      </div>
      {/* Content data. Table 1 */}
      <div className="w-full lg:flex">      
        <div className="w-6/12">
          <div className="flex justify-between px-2">
            <p>Joined</p>
            <p>May 11, 2010</p>
          </div>
          <div className="flex">
            <div className="w-6/12">
              <div className="flex justify-between px-2">
                <p>Watching</p>
                <p>(number)</p>
              </div>
            </div>
            <div className="w-6/12">
              <div className="flex justify-between px-2">
                <p>Total Entries</p>
                <p>(number)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-6/12 px-5">1</div>
      </div>
      <div className="w-full lg:flex">      
        <div className="w-6/12 px-5">2</div>
        <div className="w-6/12 px-5">2</div>
      </div>
    </section>
    </>
  )
}
