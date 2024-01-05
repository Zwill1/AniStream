export default function ProfileSideStatsButton({ children }: { children: React.ReactNode }) {
    return (
      <>
          <button className={`px-5 py-2 mt-5 bg-red-500 w-full`}>{children}</button>
      </>
    )
  }
  