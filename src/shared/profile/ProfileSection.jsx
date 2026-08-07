export default function ProfileSection({

    id,
    title,
    subtitle,
    children,
  
  }) {
  
    return (
  
      <section
        id={id}
        className="
          py-20
          scroll-mt-24
        "
      >
  
        <div
          className="
            max-w-4xl
          "
        >
  
          {subtitle && (
  
            <p
              className="
                uppercase
                tracking-[0.25em]
                text-xs
                font-semibold
                text-cyan-400
              "
            >
              {subtitle}
            </p>
  
          )}
  
          <h2
            className="
              mt-3
              text-4xl
              md:text-5xl
              font-bold
              tracking-tight
            "
          >
            {title}
          </h2>
  
        </div>
  
        <div
          className="
            mt-12
          "
        >
  
          {children}
  
        </div>
  
      </section>
  
    );
  
  }