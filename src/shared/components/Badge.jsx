export default function Badge({
    children,
    variant = "blue",
  }) {
  
    const colors = {
      blue:
        "bg-blue-100 text-blue-700",
  
      green:
        "bg-green-100 text-green-700",
  
      gray:
        "bg-gray-100 text-gray-700",
    };
  
  
    return (
      <span
        className={`
          inline-flex
          rounded-full
          px-3
          py-1
          text-sm
          font-medium
          ${colors[variant]}
        `}
      >
        {children}
      </span>
    );
  }