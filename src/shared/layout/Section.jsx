export default function Section({ 
    title,
    children 
  }) {
  
    return (
  
      <section className="space-y-4">
  
  
        {title && (
  
          <h2 className="
            text-2xl
            font-bold
          ">
            {title}
          </h2>
  
        )}
  
  
  
        {children}
  
  
      </section>
  
    );
  
  }