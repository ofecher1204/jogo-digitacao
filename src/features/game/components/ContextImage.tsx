import { motion } from "framer-motion";
import { useGameStore } from "../../../store/useGameStore";

export const ContextImage = () => {
  const { lesson } = useGameStore();

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative"
    >
      <img
        src={lesson.image}
        alt="Context"
        className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl border-4 border-slate-800 shadow-2xl"
      />
    </motion.div>
  );
};
