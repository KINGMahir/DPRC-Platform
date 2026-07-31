export default function Card({
    children,
    className = "",
  }) {
    return (
      <section
        className={`
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-8
          shadow-sm
          ${className}
        `}
      >
        {children}
      </section>
    );
  }