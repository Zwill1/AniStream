import Link from "next/link";

interface Prop {
  children: React.ReactNode;
  url: string;
}

export default function Button({ children, url }: Prop) {
  return (
    <>
        <button className={`px-5 py-2 mt-5 bg-red-500`}>
          <Link href={url}>{children}</Link>
        </button>
    </>
  )
}
