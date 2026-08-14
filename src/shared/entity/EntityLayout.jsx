import Container from "../layout/Container";

export default function EntityLayout({
  hero,
  stats,
  relationships,
  actions,
  children,
  timeline,
  metadata,
  graph,
}) {
  return (
    <Container>

      {/* Hero */}
      <div className="mb-6">
        {hero}
      </div>

      {/* Main Entity Flow */}
      <div className="space-y-6">

        {/* Quick Information */}
        {stats}

        {/* Connections */}
        {relationships}

        {/* Knowledge Sections */}
        {children}

        {/* Journey */}
        {timeline}

        {/* Additional Information */}
        {metadata}

        {/* Future Knowledge Graph */}
        {graph}

        {/* Actions */}
        {actions}

      </div>

    </Container>
  );
}