export default function PeriodDisplay({
    start,
    end,
  }) {
  
    return (
  
      <div
        className="
          mt-0
          flex
          items-center
          gap-2
          text-sm
          opacity-80
        "
      >
  
  
        <span>
          {start}
        </span>
  
  
        <div
          className="
            h-px
            w-12
            bg-cyan-400/40
          "
        />
  
  
        <span>
          {end}
        </span>
  
      </div>
  
    );
  
  }