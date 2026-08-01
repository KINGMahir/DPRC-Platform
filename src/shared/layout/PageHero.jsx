export default function PageHero({
    eyebrow,
    title,
    description,
    children,
  }) {
    return (
      <section className="mb-10">
  
        <p className="mb-3 uppercase tracking-[0.35em] text-cyan-400 text-sm">
          {eyebrow}
        </p>
  
        <h1 className="text-5xl font-bold text-white">
          {title}
        </h1>
  
        {description && (
          <p className="mt-5 max-w-3xl text-lg text-slate-400 leading-relaxed">
            {description}
          </p>
        )}
  
        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}
  
      </section>
    );
  }