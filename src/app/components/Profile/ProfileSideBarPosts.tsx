import * as sidebarObj from "../../data/profileSideStatsBarData.json";

export default function ProfileSideBarPosts() {

  const profileStat = sidebarObj[0];
  // console.log(profileStat);

  return (
    <>
        <section className="py-2">
          <div className="flex justify-between px-2">
            <p>History</p>
            <p>{profileStat.History}</p>
          </div>
          <div className="flex justify-between px-2">
            <p>Favorites</p>
            <p>{profileStat.Favorites}</p>
          </div>
        </section>

        <section className="py-2">
            <div className="flex justify-between px-2 border-t border-gray-700">
              <p>Forum Posts</p>
              <p>{profileStat.ForumPosts}</p>
            </div>
            <div className="flex justify-between px-2">
              <p>Reviews</p>
              <p>{profileStat.Reviews}</p>
            </div>
            <div className="flex justify-between px-2">
              <p>History</p>
              <p>{profileStat.HistoryPost}</p>
            </div>
            <div className="flex justify-between px-2">
              <p>Recommendations</p>
              <p>{profileStat.Recommendations}</p>
            </div>
            <div className="flex justify-between px-2">
              <p>Interests</p>
              <p>{profileStat.Interests}</p>
            </div>
            <div className="flex justify-between px-2">
              <p>Blog Posts</p>
              <p>{profileStat.BlogPosts}</p>
            </div>
            <div className="flex justify-between px-2">
              <p>Clubs</p>
              <p>{profileStat.Clubs}</p>
            </div>
          </section>
          
          <section className="py-2">
            <div className="px-2 border-b border-gray-700">
                <h2>Friends</h2>
            </div>
            <div className="flex justify-between px-2">
                <p>History</p>
                <p>{profileStat.HistoryFriends}</p>
            </div>
            <div className="flex justify-between px-2">
                <p>Clubs</p>
                <p>{profileStat.FriendClubs}</p>
            </div>
          </section>
    </>
  )
}
