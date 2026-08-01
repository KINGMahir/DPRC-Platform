export default function AppBackground({ children }) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
  
        {/* Background Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-slate-950
            via-blue-950
            to-indigo-950
          "
        />
  
        {/* Top Glow */}
        <div
          className="
            absolute
            -top-64
            left-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />
  
        {/* Left Glow */}
        <div
          className="
            absolute
            top-1/3
            -left-40
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-500/10
            blur-[120px]
          "
        />
  
        {/* Right Glow */}
        <div
          className="
            absolute
            bottom-0
            -right-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-indigo-500/10
            blur-[120px]
          "
        />
  
        {/* Grid Overlay */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
            [background-size:40px_40px]
          "
        />
  
        {/* Content */}
        <main className="relative z-10">
          {children}
        </main>
  
      </div>
    );
  }