export default function PeriodDisplay({
    start,
    end,
  }) {
  
    return (
  
      <div
        className="
          mt-5
          flex
          items-center
          gap-3
          text-sm
          opacity-80
        "
      >
  
        <span
          className="
            h-2
            w-2
            rounded-full
            bg-cyan-400
          "
        />
  
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