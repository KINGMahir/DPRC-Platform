export default function Avatar({
  name,
  image = "",
  size = "large",
}) {

  const sizes = {

    small:
      "h-10 w-10 text-sm",

    medium:
      "h-20 w-20 text-2xl",

    large:
      "h-36 w-36 text-5xl",

  };


  const initials = name
    ?.split(" ")
    .map(word => word[0])
    .join("")
    .slice(0,2);



  return (

    <div
      className={`
        relative

        flex
        items-center
        justify-center

        overflow-hidden

        rounded-full

        border
        border-cyan-400/30

        bg-cyan-400/10

        text-cyan-300

        font-bold

        shadow-[0_0_30px_rgba(34,211,238,.25)]

        ${sizes[size]}
      `}
    >

      {image ? (

        <img
          src={image}
          alt={name}
          className="
            h-full
            w-full
            object-cover
          "
        />

      ) : (

        initials

      )}

    </div>

  );

}