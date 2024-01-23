import Link from "next/link";

interface Prop {
  children: React.ReactNode;
  url: string;
  target?: string;
}

export default function Button({ children, url, target }: Prop) {
  return (
    <>
        <button className={`px-5 py-2 mt-5 bg-red-500 text-white font-bold`}>
          <Link target={target} href={url}>{children}</Link>
        </button>
    </>
  )
}
