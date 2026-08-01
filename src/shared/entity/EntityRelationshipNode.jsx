import { motion } from "framer-motion";

export default function EntityRelationshipNode({
  name,
  icon,
  onClick,
}) {
  return (
    <motion.button
      onClick={onClick}

      whileHover={{
        scale: 1.08,
        y: -4,
      }}

      transition={{
        duration: 0.25,
      }}

      className="
        group
        relative

        flex
        items-center
        gap-2

        rounded-full

        border
        border-cyan-400/30

        bg-cyan-400/5

        px-5
        py-2

        text-sm

        transition-all

        hover:border-cyan-300

        hover:bg-cyan-400/15

        hover:shadow-[0_0_25px_rgba(34,211,238,.35)]
      "
    >

      <span
        className="
            h-2
            w-2
    
            rounded-full
    
            bg-cyan-400
    
            opacity-0
            scale-0
    
            shadow-[0_0_12px_rgba(34,211,238,.8)]
    
            transition-all
            duration-300
    
            group-hover:opacity-100
            group-hover:scale-100
    
            group-hover:animate-pulse
        "
      />

      {icon}

      {name}

    </motion.button>
  );
}