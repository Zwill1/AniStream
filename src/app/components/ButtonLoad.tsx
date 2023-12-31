export default function ButtonLoad({ children }: { children: React.ReactNode }) {
    return (
      <>
          <button className={`px-5 py-2 bg-green-600`}>{children}</button>
      </>
    )
  }
  