import { motion } from "framer-motion";
import { useGameStore } from "../../../store/useGameStore";

export const TypingArea = () => {
  const { lesson, cursor, isError } = useGameStore();

  const charDone = lesson.text.slice(0, cursor);
  const charCurrent = lesson.text[cursor];
  const charRemaining = lesson.text.slice(cursor + 1);

  return (
    <div className="text-4xl md:text-5xl font-mono font-bold leading-relaxed text-center break-words w-full select-none">
      
      {/* Typed Text (Green/Success) */}
      <span className="text-[var(--color-game-cursor)]">
        {charDone}
      </span>

      {/* Current Character / Visual Cursor */}
      {cursor < lesson.text.length && (
        <motion.span 
          animate={isError ? { x: [-2, 2, -2, 2, 0] } : {}}
          transition={{ duration: 0.2 }}
          className={`
            inline-block rounded px-1 -mx-1 transition-colors duration-75
            ${isError ? 'bg-red-500 text-white' : 'bg-yellow-400 text-slate-900'}
          `}
        >
          {charCurrent === " " ? "\u00A0" : charCurrent}
        </motion.span>
      )}

      {/* Remaining Text (Gray/Ghost) */}
      <span className="text-slate-700 opacity-40">
        {charRemaining}
      </span>
    </div>
  );
};
