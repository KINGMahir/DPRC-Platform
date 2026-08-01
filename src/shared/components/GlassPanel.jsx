import { glass } from "../../theme";

const variants = {

  default: {
    glow:
      "hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]",
  },

  hero: {
    glow:
      "hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]",
  },

  research: {
    glow:
      "hover:shadow-[0_0_45px_rgba(168,85,247,0.35)]",
  },

  success: {
    glow:
      "hover:shadow-[0_0_45px_rgba(34,197,94,0.35)]",
  },

  warning: {
    glow:
      "hover:shadow-[0_0_45px_rgba(234,179,8,0.35)]",
  },

};


export default function GlassPanel({
  children,
  className = "",
  variant = "default",
}) {

  const surface = variants[variant] || variants.default;


  return (

    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        transition-all
        duration-500

        hover:-translate-y-1

        ${surface.glow}

        ${className}
      `}
      style={{

        background: glass.background,

        backdropFilter: glass.blur,

        WebkitBackdropFilter: glass.blur,

        border: glass.border,

        boxShadow: glass.shadow,

      }}
    >

      {/* Animated light layer */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
        "
        style={{
          background:
          `
          radial-gradient(
            circle at top left,
            rgba(255,255,255,.25),
            transparent 45%
          )
          `,
        }}
      />


      {/* Content */}

      <div className="relative z-10 p-6">

        {children}

      </div>


    </div>

  );

}