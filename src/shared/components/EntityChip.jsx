import { motion } from "framer-motion";

export default function EntityChip({
  children,
  icon,
  variant = "default",
  onClick,
}) {
  const variants = {
    default: {
      border: "border-cyan-400/30",
      background: "bg-cyan-400/5",
      glow: "hover:shadow-[0_0_20px_rgba(34,211,238,.25)]",
      dot: "bg-cyan-400",
    },

    technology: {
      border: "border-sky-400/30",
      background: "bg-sky-400/5",
      glow: "hover:shadow-[0_0_20px_rgba(56,189,248,.35)]",
      dot: "bg-sky-400",
    },

    skill: {
      border: "border-blue-400/30",
      background: "bg-blue-400/5",
      glow: "hover:shadow-[0_0_20px_rgba(96,165,250,.35)]",
      dot: "bg-blue-400",
    },

    project: {
      border: "border-orange-400/30",
      background: "bg-orange-400/5",
      glow: "hover:shadow-[0_0_20px_rgba(251,146,60,.35)]",
      dot: "bg-orange-400",
    },

    publication: {
      border: "border-emerald-400/30",
      background: "bg-emerald-400/5",
      glow: "hover:shadow-[0_0_20px_rgba(52,211,153,.35)]",
      dot: "bg-emerald-400",
    },

    organization: {
      border: "border-violet-400/30",
      background: "bg-violet-400/5",
      glow: "hover:shadow-[0_0_20px_rgba(168,85,247,.35)]",
      dot: "bg-violet-400",
    },

    person: {
      border: "border-amber-400/30",
      background: "bg-amber-400/5",
      glow: "hover:shadow-[0_0_20px_rgba(251,191,36,.35)]",
      dot: "bg-amber-400",
    },

    research: {
      border: "border-teal-400/30",
      background: "bg-teal-400/5",
      glow: "hover:shadow-[0_0_20px_rgba(45,212,191,.35)]",
      dot: "bg-teal-400",
    },

    education: {
      border: "border-yellow-400/30",
      background: "bg-yellow-400/5",
      glow: "hover:shadow-[0_0_20px_rgba(250,204,21,.35)]",
      dot: "bg-yellow-400",
    },

    event: {
      border: "border-pink-400/30",
      background: "bg-pink-400/5",
      glow: "hover:shadow-[0_0_20px_rgba(244,114,182,.35)]",
      dot: "bg-pink-400",
    },

    dataset: {
      border: "border-slate-400/30",
      background: "bg-slate-400/5",
      glow: "hover:shadow-[0_0_20px_rgba(148,163,184,.35)]",
      dot: "bg-slate-400",
    },
  };

  const style = variants[variant] || variants.default;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{
        scale: 1.04,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        group
        inline-flex
        items-center
        gap-2

        rounded-full

        border
        ${style.border}

        ${style.background}

        px-4
        py-2

        text-sm
        font-medium

        cursor-pointer
        select-none

        transition-all
        duration-300

        ${style.glow}

        focus:outline-none
        focus:ring-2
        focus:ring-cyan-400/50
      `}
    >
      <span
        className={`
          h-2
          w-2

          rounded-full

          ${style.dot}

          opacity-0
          scale-0

          transition-all
          duration-300

          group-hover:opacity-100
          group-hover:scale-100
        `}
      />

      {icon && (
        <span className="flex items-center">
          {icon}
        </span>
      )}

      <span>{children}</span>
    </motion.button>
  );
}