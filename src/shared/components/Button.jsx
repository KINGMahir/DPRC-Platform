export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
  }) {
  
    const styles = {
      primary:
        "bg-blue-700 text-white hover:bg-blue-800",
  
      secondary:
        "bg-gray-100 text-gray-800 hover:bg-gray-200",
  
      outline:
        "border border-gray-300 text-gray-700 hover:bg-gray-100",
    };
  
  
    return (
      <button
        className={`
          rounded-xl
          px-5
          py-3
          font-semibold
          transition
          ${styles[variant]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }