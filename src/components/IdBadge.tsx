import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import profile from "@/assets/profile.jpg";

/**
 * Physics-based ID badge hanging on a lanyard.
 * Drag it — it swings, then springs back. Pure framer-motion physics.
 */
const IdBadge = () => {
  const { tr } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);

  // Drag-controlled motion values (bound to the badge via style)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smoothed values for the lanyard cord (so it follows fluidly)
  const sx = useSpring(x, { stiffness: 120, damping: 14, mass: 0.8 });
  const sy = useSpring(y, { stiffness: 120, damping: 14, mass: 0.8 });

  // Rotation derived from horizontal displacement — like a real swinging badge
  const rotate = useTransform(sx, [-200, 200], [-22, 22]);

  // Lanyard SVG curve from anchor (200, 6) to badge top — follows badge
  const cordPath = useTransform(
    [sx, sy],
    ([cx, cy]: number[]) =>
      `M 200 6 Q ${200 + cx * 0.4} ${120 + cy * 0.3} ${200 + cx} ${220 + cy}`
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-start justify-center select-none"
      style={{ touchAction: "none" }}
    >
      {/* Anchor point at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground/80 shadow-soft z-20 pointer-events-none" />

      {/* Lanyard cord (SVG curve from anchor to badge top) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 400 500"
        preserveAspectRatio="none"
      >
        <motion.path
          d={cordPath}
          stroke="hsl(var(--foreground) / 0.85)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Draggable badge — drag is the source of truth, x/y track the drag */}
      <motion.div
        drag
        dragConstraints={{ left: -180, right: 180, top: -40, bottom: 200 }}
        dragElastic={0.6}
        dragTransition={{ bounceStiffness: 120, bounceDamping: 10 }}
        whileDrag={{ scale: 1.04 }}
        style={{ x, y, rotate }}
        className="absolute top-[210px] z-30 cursor-grab active:cursor-grabbing"
      >
        {/* Lanyard clip */}
        <div className="mx-auto w-10 h-5 rounded-t-md bg-gradient-to-b from-zinc-300 to-zinc-500 shadow-soft pointer-events-none" />
        <div className="mx-auto w-3 h-4 -mt-px bg-zinc-400 pointer-events-none" />

        {/* Card */}
        <div className="relative w-[260px] rounded-2xl overflow-hidden glass-strong shadow-lift border border-white/60">
          {/* Holographic shine overlay */}
          <div className="absolute inset-0 holo-shine opacity-20 mix-blend-screen pointer-events-none" />

          <div className="p-5">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              <span>ID · 2026</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="relative">
                <img
                  src={profile}
                  alt="Oleksandr Maksymenko"
                  className="w-16 h-16 rounded-xl object-cover border border-border shadow-soft pointer-events-none"
                  draggable={false}
                />
                <div className="absolute -inset-px rounded-xl ring-1 ring-primary/30 pointer-events-none" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{tr("badgeRole")}</div>
                <div className="text-base font-semibold leading-tight">Oleksandr</div>
                <div className="text-base font-semibold leading-tight">Maksymenko</div>
              </div>
            </div>

            {/* Holographic label */}
            <div className="mt-4 relative rounded-lg overflow-hidden">
              <div className="holo-shine absolute inset-0" />
              <div className="relative px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-foreground/90 mix-blend-multiply text-center">
                {tr("badgeLabel")}
              </div>
            </div>

            {/* Footer chip */}
            <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
              <span>IGNITION 8.1</span>
              <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
                {[...Array(7)].map((_, i) => (
                  <rect key={i} x={i * 4} y={i % 2 ? 2 : 0} width="2" height={i % 2 ? 10 : 14} fill="hsl(var(--foreground))" />
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Tiny hint */}
        <div className="mt-3 text-center text-[10px] font-mono uppercase tracking-widest text-muted-foreground pointer-events-none">
          ← drag me →
        </div>
      </motion.div>
    </div>
  );
};

export default IdBadge;
