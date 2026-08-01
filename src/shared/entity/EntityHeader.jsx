import GlassPanel from "../components/GlassPanel";
import Avatar from "../components/Avatar";
import Badge from "../components/Badge";
import Button from "../components/Button";


export default function EntityHeader({
  image,
  icon,
  title,
  subtitle,
  description,
  badges = [],
  actions = [],
  children,
}) {

  return (

    <GlassPanel
      variant="hero"
      className="
        relative
        overflow-hidden
      "
    >

      {/* Dynamic Background Field */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >

        <div
          className="
            absolute
            -top-20
            -right-20
            h-72
            w-72
            rounded-full
            bg-cyan-400/20
            blur-3xl
          "
        />


        <div
          className="
            absolute
            -bottom-20
            -left-20
            h-72
            w-72
            rounded-full
            bg-blue-500/20
            blur-3xl
          "
        />


      </div>



      <div
        className="
          relative
          z-10

          flex
          flex-col
          gap-8

          lg:flex-row
          lg:items-center
        "
      >


        {/* Identity Avatar */}

        <div
          className="
            flex
            justify-center

            lg:justify-start
          "
        >

          <Avatar
            src={image}
            alt={title}
            size="2xl"
            icon={icon}
          />

        </div>



        {/* Identity Information */}

        <div
          className="
            flex-1
            space-y-5
          "
        >


          <div>

            <h1
              className="
                text-4xl
                font-bold
                tracking-tight
              "
            >

              {title}

            </h1>


            {subtitle && (

              <p
                className="
                  mt-2
                  text-lg
                  opacity-80
                "
              >

                {subtitle}

              </p>

            )}

          </div>



          {description && (

            <p
              className="
                max-w-4xl
                leading-7
                opacity-90
              "
            >

              {description}

            </p>

          )}



          {/* Entity Tags */}

          {badges.length > 0 && (

            <div
              className="
                flex
                flex-wrap
                gap-3
              "
            >

              {badges.map((badge)=>(

                <Badge
                  key={badge}
                >

                  {badge}

                </Badge>

              ))}


            </div>

          )}



          {/* Extension Area */}

          {children}


        </div>




        {/* Actions */}

        {actions.length > 0 && (

          <div
            className="
              flex
              flex-col
              gap-3
            "
          >

            {actions.map((action)=>(

              <Button
                key={action.label}
                onClick={action.onClick}
              >

                {action.label}

              </Button>

            ))}

          </div>

        )}


      </div>


      {/* Future Knowledge Graph Anchor */}

      <div
        className="
          absolute
          right-6
          top-6
          h-3
          w-3
          rounded-full
          bg-cyan-400
          shadow-[0_0_20px_rgba(34,211,238,.8)]
        "
      />


    </GlassPanel>

  );

}