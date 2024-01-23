import Link from "next/link";

interface Prop {
  children: React.ReactNode;
  url: string;
}

// { children }: { children: React.ReactNode }

export default function ProfileSideStatsButton({ children, url }: Prop) {
    return (
      <>
          <button className={`px-5 py-2 mt-5 bg-red-500 w-full block`}>
            <Link className="block text-white font-bold" href={url}>{children}</Link>
          </button>
      </>
    )
  }
  