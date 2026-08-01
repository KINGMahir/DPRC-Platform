import GlassPanel from "../components/GlassPanel";

export default function EntityTimeline({
  items = [],
  title = "Timeline",
}) {

  return (

    <GlassPanel
      variant="default"
    >

      <div className="mb-6">

        <h2
          className="
            text-xl
            font-semibold
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-1
            text-sm
            opacity-60
          "
        >
          Activity history and milestones
        </p>

      </div>



      <div
        className="
          relative
          space-y-8
          pl-8
        "
      >


        {/* Timeline Line */}

        <div
          className="
            absolute
            left-2
            top-2
            bottom-2

            w-px

            bg-gradient-to-b
            from-cyan-400/70
            via-blue-400/40
            to-transparent
          "
        />



        {items.map((item,index)=>(

          <div
            key={item.id || index}

            className="
              group
              relative
            "
          >


            {/* Node */}

            <div
              className="
                absolute
                -left-8
                top-1

                h-4
                w-4

                rounded-full

                bg-cyan-400

                shadow-[0_0_15px_rgba(34,211,238,.8)]

                transition-all
                duration-300

                group-hover:scale-125
              "
            />



            <div
              className="
                rounded-2xl
                border
                border-white/10

                bg-white/5

                p-4

                transition-all
                duration-300

                hover:border-cyan-400/40

                hover:bg-cyan-400/10

                hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
              "
            >

              <p
                className="
                  text-xs
                  uppercase
                  tracking-widest
                  opacity-60
                "
              >
                {item.date}
              </p>


              <h3
                className="
                  mt-1
                  font-semibold
                "
              >
                {item.title}
              </h3>


              {item.description && (

                <p
                  className="
                    mt-2
                    text-sm
                    opacity-70
                  "
                >

                  {item.description}

                </p>

              )}


            </div>


          </div>

        ))}


      </div>


    </GlassPanel>

  );

}