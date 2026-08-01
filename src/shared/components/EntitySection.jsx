import GlassPanel from "../components/GlassPanel";

export default function EntitySection({
  title,
  subtitle,
  children,
  variant = "default",
  className = "",
  action,
}) {
  return (
    <section className={`space-y-4 ${className}`}>

      <div className="flex items-center justify-between">

        <div>

          {title && (
            <h2 className="text-2xl font-semibold tracking-tight">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="mt-1 text-sm opacity-70">
              {subtitle}
            </p>
          )}

        </div>


        {action && (
          <div>
            {action}
          </div>
        )}

      </div>


      <GlassPanel variant={variant}>

        {children}

      </GlassPanel>


    </section>
  );
}