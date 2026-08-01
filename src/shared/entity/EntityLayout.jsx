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
    <Container className="space-y-8">

      {/* Hero */}
      {hero}


      {/* Main Entity Flow */}
      <div className="space-y-8">

        {/* Quick information */}
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