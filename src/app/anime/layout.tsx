export default function layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="w-full bg-[#0F1117]">
        <div>{children}</div>
      </div>
    );
  }