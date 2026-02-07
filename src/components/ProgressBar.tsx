import { motion } from 'framer-motion';

type ProgressBarProps = {
  current: number;
  total: number;
};

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  // Calcula a porcentagem (0 a 100)
  const progress = Math.min((current / total) * 100, 100);

  return (
    <div className="w-full max-w-xl h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
    </div>
  );
};