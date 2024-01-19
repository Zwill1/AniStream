export default function layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex-col md:flex-row">
        {children}
      </div>
    );
  }