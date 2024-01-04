export default function layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="h-screen flex-col md:flex-row md:overflow-hidden">
        {children}
      </div>
    );
  }