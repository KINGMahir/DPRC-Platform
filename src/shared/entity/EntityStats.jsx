import GlassPanel from "../components/GlassPanel";

export default function EntityStats({
  stats = [],
}) {

  return (

    <div
      className="
        grid
        gap-5

        sm:grid-cols-2
        xl:grid-cols-4
      "
    >

      {stats.map((item, index) => (

        <GlassPanel

          key={item.label}

          variant="default"

          className="
            group
            relative
            cursor-pointer
            overflow-hidden

            transition-all
            duration-500

            hover:-translate-y-1
            hover:scale-[1.02]
          "

        >


          {/* Energy Accent */}

          <div
            className="
              absolute
              inset-x-0
              top-0
              h-px

              bg-gradient-to-r
              from-transparent
              via-cyan-400/70
              to-transparent

              opacity-0

              transition-opacity
              duration-500

              group-hover:opacity-100
            "
          />



          <div
            className="
              relative
              space-y-3
            "
          >


            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                opacity-60
              "
            >

              {item.label}

            </p>



            <h2
              className="
                text-4xl
                font-bold
                tracking-tight
              "
            >

              {item.value}

            </h2>



            {item.description && (

              <p
                className="
                  text-sm
                  opacity-70
                "
              >

                {item.description}

              </p>

            )}



            {/* Future graph connection point */}

            <div
              className="
                absolute
                bottom-0
                right-0

                h-2
                w-2

                rounded-full

                bg-cyan-400

                opacity-0

                shadow-[0_0_15px_rgba(34,211,238,.8)]

                transition-opacity
                duration-500

                group-hover:opacity-100
              "
            />


          </div>


        </GlassPanel>

      ))}


    </div>

  );

}