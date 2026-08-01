import EntityLayout from "./EntityLayout";
import EntityHeader from "./EntityHeader";
import EntityStats from "./EntityStats";
import EntityRelationships from "./EntityRelationships";

export default function EntityPage({
  entity,
  sections,
  timeline = null,
  metadata = null,
  graph = null,
  actions = [],
}) {
  return (
    <EntityLayout
      hero={
        <EntityHeader
          image={entity.image}
          icon={entity.icon}
          title={entity.title}
          subtitle={entity.subtitle}
          description={entity.description}
          badges={entity.badges}
          actions={actions}
        />
      }
      stats={
        <EntityStats
          stats={entity.stats}
        />
      }
      relationships={
        <EntityRelationships
          items={entity.relationships}
        />
      }
      timeline={timeline}
      metadata={metadata}
      graph={graph}
    >
      {sections}
    </EntityLayout>
  );
}