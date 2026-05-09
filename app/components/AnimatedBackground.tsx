export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(139,92,246,0.1),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(6,182,212,0.08),transparent_40%)]" />
    </div>
  );
}
