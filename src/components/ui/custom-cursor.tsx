import { motion as motionClient } from "motion/react";

export default function CustomCursor({
  cursorX,
  cursorY,
  isHovering,
}: {
  cursorX: any;
  cursorY: any;
  isHovering: boolean;
}) {
  return (
    <motionClient.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isHovering ? 1 : 0,
        opacity: isHovering ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 35 }}
      className="pointer-events-none absolute top-0 left-0 z-50"
    >
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-accent shadow-lg">
        <span className="text-sm font-bold text-white text-center leading-tight">
          Book
          <br />
          Now
        </span>
      </div>
    </motionClient.div>
  );
}
