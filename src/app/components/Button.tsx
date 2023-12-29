export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <>
        <button className="px-5 py-2 bg-red-500 mt-5">{children}</button>
    </>
  )
}
