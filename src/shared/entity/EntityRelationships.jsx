import GlassPanel from "../components/GlassPanel";
import EntityRelationshipNode from "./EntityRelationshipNode";

export default function EntityRelationships({
  title = "Connected To",
  items = [],
  onSelect,
}) {
  return (
    <GlassPanel>

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-xl font-semibold">
          {title}
        </h2>

        <span className="text-sm opacity-60">
          {items.length} Connections
        </span>

      </div>

      <div className="flex flex-wrap gap-3">

        {items.map((item) => (

          <EntityRelationshipNode
  key={item.id || item.name}
  name={item.name}
  icon={item.icon}
  onClick={() => onSelect?.(item)}
/>

        ))}

      </div>

    </GlassPanel>
  );
}