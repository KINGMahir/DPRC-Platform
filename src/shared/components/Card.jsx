import GlassPanel from "./GlassPanel";

export default function Card({
  children,
  className = "",
}) {
  return (
    <GlassPanel className={className}>
      {children}
    </GlassPanel>
  );
}