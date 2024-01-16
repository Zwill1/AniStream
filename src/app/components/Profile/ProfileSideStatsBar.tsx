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
            <ProfileSideStatsButton>Link one</ProfileSideStatsButton>
            <ProfileSideStatsButton>Link two</ProfileSideStatsButton>
          </div>
          <ProfileSideBarPosts />
        </div>
      </>
    )
  }
  