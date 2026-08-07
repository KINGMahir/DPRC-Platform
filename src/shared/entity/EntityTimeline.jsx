export default function EntityTimeline({
  items = [],
}) {

  if (!items.length) {
    return null;
  }


  return (

    <section
      className="
        py-16
      "
    >


      <div className="mb-10">

        <h2
          className="
            text-3xl
            font-bold
          "
        >
          Activity Timeline
        </h2>

      </div>





      <div
        className="
          relative
          space-y-8

          before:absolute
          before:left-3
          before:top-0
          before:h-full
          before:w-px
          before:bg-white/10
        "
      >


        {items.map((item) => (

          <div
            key={item.id}
            className="
              group
              relative
              pl-10
            "
          >



            {/* Timeline Dot */}

            <div
              className="
                absolute
                left-0
                top-5

                h-6
                w-6

                rounded-full

                border
                border-cyan-400/40

                bg-black

                flex
                items-center
                justify-center
              "
            >

              <div
                className="
                  h-2
                  w-2

                  rounded-full

                  bg-cyan-400

                  transition-all
                  duration-300
                  ease-out

                  group-hover:h-2
                  group-hover:w-3

                  group-hover:shadow-[0_0_16px_rgba(34,211,238,.9)]
                "
              />

            </div>







            {/* Activity Card */}

            <div
              className="
                rounded-2xl

                border
                border-white/10

                bg-white/[0.03]

                p-6

                transition-all
                duration-300

                hover:-translate-y-1

                hover:border-cyan-400/30

                hover:shadow-[0_0_25px_rgba(34,211,238,.15)]
              "
            >


              <div
                className="
                  flex
                  flex-col

                  gap-4

                  sm:flex-row
                  sm:items-start
                  sm:justify-between
                "
              >

                <div>

                  <h3
                    className="
                      text-lg
                      font-semibold
                    "
                  >
                    {item.title || item.activity}
                  </h3>


                  {item.description && (

                    <p
                      className="
                        mt-3
                        leading-7
                        opacity-75
                      "
                    >
                      {item.description}
                    </p>

                  )}

                </div>


                <span
                  className="
                    text-sm
                    opacity-60
                    whitespace-nowrap
                  "
                >
                  {item.date}
                </span>


              </div>


            </div>


          </div>


        ))}


      </div>


    </section>

  );

}