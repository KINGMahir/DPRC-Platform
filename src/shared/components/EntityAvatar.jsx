import {
    HiBuildingOffice2,
    HiUser,
    HiRocketLaunch,
    HiDocumentText,
    HiCpuChip,
  } from "react-icons/hi2";
  
  export default function EntityAvatar({
    image,
    title,
    type = "organization",
    size = "lg",
  }) {
  
    const sizes = {
      sm: "h-14 w-14",
      md: "h-20 w-20",
      lg: "h-28 w-28",
      xl: "h-36 w-36",
    };
  
    const icons = {
      organization: <HiBuildingOffice2 className="text-4xl" />,
      person: <HiUser className="text-4xl" />,
      project: <HiRocketLaunch className="text-4xl" />,
      publication: <HiDocumentText className="text-4xl" />,
      technology: <HiCpuChip className="text-4xl" />,
    };
  
    return (
      <div
        className={`
          ${sizes[size]}
  
          rounded-3xl
  
          border
          border-cyan-400/25
  
          bg-gradient-to-br
          from-cyan-500/10
          to-blue-500/10
  
          overflow-hidden
  
          flex
          flex-col
          items-center
          justify-center
  
          transition-all
          duration-300
  
          hover:scale-105
        `}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <>
            <div className="text-cyan-300">
              {icons[type]}
            </div>
  
            <div
              className="
                mt-2
                text-xs
                font-semibold
                tracking-widest
                opacity-80
              "
            >
              {title}
            </div>
          </>
        )}
      </div>
    );
  }