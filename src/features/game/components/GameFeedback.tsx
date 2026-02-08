import { motion } from "framer-motion";
import { useGameStore } from "../../../store/useGameStore";

export const GameFeedback = () => {
  const { streak } = useGameStore();

  return (
    <div className="absolute top-10 right-10 flex items-center gap-2 font-mono font-bold text-xl text-orange-400">
      <span>🔥</span>
      <motion.span
        key={streak}
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        {streak}
      </motion.span>
    </div>
  );
};
