/**
 * AuroraBackground component.
 * Renders full-screen fixed background with slow animated gradient blobs.
 */
function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#020617]">
      {/* Aurora Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] md:w-[45vw] md:h-[45vw] rounded-full bg-indigo-500/10 blur-[80px] md:blur-[120px] animate-aurora" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] md:w-[45vw] md:h-[45vw] rounded-full bg-violet-500/10 blur-[80px] md:blur-[120px] animate-aurora [animation-delay:4s]" />
      <div className="absolute top-[30%] left-[40%] w-[50vw] h-[50vw] md:w-[35vw] md:h-[35vw] rounded-full bg-cyan-500/10 blur-[80px] md:blur-[120px] animate-aurora [animation-delay:8s]" />

      {/* Subtle overlay grid for tech aesthetic */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.015)_1px,transparent_0)] bg-[size:32px_32px] opacity-70" />
    </div>
  );
}

export default AuroraBackground;
