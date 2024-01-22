import ProfileSideBarPosts from "./ProfileSideBarPosts"
import ProfileSideStatsButton from "../ProfileSideStatsButton"

export default function ProfileSideStatsBar() {
    return (
      <>
        <div className="w-full lg:w-3/12">
          <div className="flex justify-between px-2">
            <p>Last Online</p>
            <p>Now</p>
          </div>
          <div className="flex justify-between px-2">
            <p>Joined</p>
            <p>May 11, 2010</p>
          </div>
          <div className="flex justify-between px-2 gap-2">
            <ProfileSideStatsButton url={"/profile/anime-history"}>Anime History</ProfileSideStatsButton>
            <ProfileSideStatsButton url={"/profile/manga-history"}>Manga History</ProfileSideStatsButton>
          </div>
          <ProfileSideBarPosts />
        </div>
      </>
    )
  }
  