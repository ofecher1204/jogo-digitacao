import { motion } from "framer-motion";
import { useGameStore } from "../../../store/useGameStore";

export const TranslationDisplay = () => {
  const { lesson } = useGameStore();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-slate-500 text-xl md:text-2xl italic mt-4 text-center"
    >
      {lesson.translation}
    </motion.div>
  );
};
