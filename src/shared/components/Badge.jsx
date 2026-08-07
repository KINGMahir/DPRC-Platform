export default function Badge({
  children,
  variant = "default",
}) {

  const variants = {

    default: {
      border: "border-cyan-400/30",
      background: "bg-cyan-400/5",
      text: "text-cyan-300",
      glow: "hover:shadow-[0_0_20px_rgba(34,211,238,.25)]",
    },


    blue: {
      border: "border-blue-400/30",
      background: "bg-blue-400/5",
      text: "text-blue-300",
      glow: "hover:shadow-[0_0_20px_rgba(96,165,250,.25)]",
    },


    green: {
      border: "border-emerald-400/30",
      background: "bg-emerald-400/5",
      text: "text-emerald-300",
      glow: "hover:shadow-[0_0_20px_rgba(52,211,153,.25)]",
    },


    violet: {
      border: "border-violet-400/30",
      background: "bg-violet-400/5",
      text: "text-violet-300",
      glow: "hover:shadow-[0_0_20px_rgba(168,85,247,.25)]",
    },


    gray: {
      border: "border-white/20",
      background: "bg-white/5",
      text: "text-white/70",
      glow: "hover:shadow-[0_0_20px_rgba(255,255,255,.12)]",
    },

  };


  const style = variants[variant] || variants.default;


  return (

    <span
      className={`
        inline-flex
        items-center

        rounded-full

        border

        ${style.border}

        ${style.background}

        ${style.text}

        px-4
        py-1.5

        text-sm
        font-medium

        transition-all
        duration-300

        ${style.glow}
      `}
    >
      {children}
    </span>

  );

}