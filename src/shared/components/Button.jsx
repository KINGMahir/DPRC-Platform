export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {

  const styles = {

    primary:
      `
        border
        border-cyan-400/30

        bg-cyan-400/10

        text-cyan-300

        hover:bg-cyan-400/20

        hover:border-cyan-400/60

        hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
      `,


    secondary:
      `
        border
        border-white/10

        bg-white/5

        text-white/80

        hover:bg-white/10

        hover:border-white/20

        hover:shadow-[0_0_20px_rgba(255,255,255,.12)]
      `,


    outline:
      `
        border
        border-white/20

        bg-transparent

        text-white/80

        hover:bg-white/5

        hover:border-cyan-400/40

        hover:text-cyan-300
      `,

  };


  return (

    <button

      className={`
        inline-flex
        items-center
        justify-center

        rounded-xl

        px-5
        py-3

        font-semibold

        transition-all
        duration-300

        cursor-pointer

        ${styles[variant]}

        ${className}
      `}

      {...props}

    >

      {children}

    </button>

  );

}