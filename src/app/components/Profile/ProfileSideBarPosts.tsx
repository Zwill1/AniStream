import * as sidebarObj from "../../data/profileSideStatsBarData.json";

export default function ProfileSideBarPosts() {

  const profileStat = sidebarObj[0];
  // console.log(profileStat);

  return (
    <>
        <section className="py-2">
          <div className="flex justify-between px-2">
            <p className="text-white">History</p>
            <p className="text-white">{profileStat.History}</p>
          </div>
          <div className="flex justify-between px-2">
            <p className="text-white">Favorites</p>
            <p className="text-white">{profileStat.Favorites}</p>
          </div>
        </section>

        <section className="py-2">
            <div className="flex justify-between px-2 border-t border-gray-700">
              <p className="text-white">Forum Posts</p>
              <p className="text-white">{profileStat.ForumPosts}</p>
            </div>
            <div className="flex justify-between px-2">
              <p className="text-white">Reviews</p>
              <p className="text-white">{profileStat.Reviews}</p>
            </div>
            <div className="flex justify-between px-2">
              <p className="text-white">History</p>
              <p className="text-white">{profileStat.HistoryPost}</p>
            </div>
            <div className="flex justify-between px-2">
              <p className="text-white">Recommendations</p>
              <p className="text-white">{profileStat.Recommendations}</p>
            </div>
            <div className="flex justify-between px-2">
              <p className="text-white">Interests</p>
              <p className="text-white">{profileStat.Interests}</p>
            </div>
            <div className="flex justify-between px-2">
              <p className="text-white">Blog Posts</p>
              <p className="text-white">{profileStat.BlogPosts}</p>
            </div>
            <div className="flex justify-between px-2">
              <p className="text-white">Clubs</p>
              <p className="text-white">{profileStat.Clubs}</p>
            </div>
          </section>
          
          <section className="py-2">
            <div className="px-2 border-b border-gray-700">
                <h2 className="text-white">Friends</h2>
            </div>
            <div className="flex justify-between px-2">
                <p className="text-white">History</p>
                <p className="text-white">{profileStat.HistoryFriends}</p>
            </div>
            <div className="flex justify-between px-2">
                <p className="text-white">Clubs</p>
                <p className="text-white">{profileStat.FriendClubs}</p>
            </div>
          </section>
    </>
  )
}
