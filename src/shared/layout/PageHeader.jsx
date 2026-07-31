export default function PageHeader({
    title,
    description,
  }) {
  
    return (
  
      <div className="
        mb-8
        space-y-2
      ">
  
  
        <h1 className="
          text-4xl
          font-bold
        ">
          {title}
        </h1>
  
  
  
        {description && (
  
          <p className="
            text-gray-600
            text-lg
          ">
            {description}
          </p>
  
        )}
  
  
      </div>
  
    );
  
  }