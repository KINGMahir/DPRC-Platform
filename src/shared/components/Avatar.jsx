export default function Avatar({
    name,
    image = "",
    size = "large",
  }) {
  
    const sizes = {
      small: "h-10 w-10 text-sm",
      medium: "h-20 w-20 text-2xl",
      large: "h-36 w-36 text-5xl",
    };
  
  
    const initials = name
      ?.split(" ")
      .map(word => word[0])
      .join("")
      .slice(0,2);
  
  
    return (
      <div
        className={`
          flex
          items-center
          justify-center
          rounded-full
          bg-gray-200
          font-bold
          text-gray-500
          ${sizes[size]}
        `}
      >
  
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          initials
        )}
  
      </div>
    );
  }