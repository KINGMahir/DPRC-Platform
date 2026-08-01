export default function StatusBadge({
    children,
    variant = "default",
  }) {
  
    const variants = {
  
      default: {
        dot: "bg-cyan-400",
        background: "bg-cyan-400/10",
        text: "text-cyan-300",
        border: "border-cyan-400/20",
      },
  
  
      success: {
        dot: "bg-emerald-400",
        background: "bg-emerald-400/10",
        text: "text-emerald-300",
        border: "border-emerald-400/20",
      },
  
  
      warning: {
        dot: "bg-yellow-400",
        background: "bg-yellow-400/10",
        text: "text-yellow-300",
        border: "border-yellow-400/20",
      },
  
  
      progress: {
        dot: "bg-orange-400",
        background: "bg-orange-400/10",
        text: "text-orange-300",
        border: "border-orange-400/20",
      },
  
    };
  
  
    const style =
      variants[variant] || variants.default;
  
  
    return (
  
      <span
        className={`
          inline-flex
          items-center
          gap-2
  
          rounded-full
  
          border
          ${style.border}
  
          ${style.background}
  
          px-3
          py-1
  
          text-sm
          font-medium
  
          ${style.text}
        `}
      >
  
        <span
          className={`
            h-2
            w-2
  
            rounded-full
  
            ${style.dot}
          `}
        />
  
        {children}
  
      </span>
  
    );
  
  }