import { useGameStore } from "../../../store/useGameStore";
import { motion } from "framer-motion";

export const ResultModal = () => {
  const { wpm, mistakes, nextLesson, restartLevel, startReviewLevel, lesson } =
    useGameStore();

  const totalErrors = Object.values(mistakes).reduce((a: number, b: number) => a + b, 0);
  const accuracy = Math.max(0, 100 - totalErrors * 2); // Cálculo simples de precisão
  const hasErrors = totalErrors > 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/95 backdrop-blur-sm text-white"
    >
      <h2 className="text-5xl font-bold mb-4 text-cyan-400">
        Nível Concluído!
      </h2>

      {/* EXIBIÇÃO DA LIÇÃO (Resolvendo o erro da variável não lida) */}
      <div className="mb-8 text-center bg-slate-800/50 p-6 rounded-2xl border border-slate-700 max-w-md">
        <p className="text-2xl font-mono text-cyan-100 mb-2">"{lesson.text}"</p>
        <p className="text-slate-400 italic text-lg">{lesson.translation}</p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-12 text-center">
        <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
          <p className="text-slate-400 text-sm uppercase tracking-wider">
            Velocidade
          </p>
          <p className="text-4xl font-mono font-bold">
            {wpm} <span className="text-xl">WPM</span>
          </p>
        </div>
        <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
          <p className="text-slate-400 text-sm uppercase tracking-wider">
            Precisão
          </p>
          <p
            className={`text-4xl font-mono font-bold ${accuracy === 100 ? "text-green-400" : "text-yellow-400"}`}
          >
            {accuracy}%
          </p>
        </div>
      </div>

      {/* Análise de Erros (Estilo Kumon) */}
      {hasErrors && (
        <div className="mb-8 text-center">
          <p className="text-red-400 mb-2">Teclas problemáticas:</p>
          <div className="flex gap-2 justify-center">
            {Object.keys(mistakes).map((key) => (
              <span
                key={key}
                className="px-3 py-1 bg-red-500/20 border border-red-500 rounded text-red-200 font-mono"
              >
                {key}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-4">
        {/* Botão de Reiniciar (Padrão) */}
        <button
          onClick={restartLevel}
          className="px-6 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition font-bold"
        >
          Repetir Frase
        </button>

        {/* Botão de Revisão Focada (Só aparece se tiver erros) */}
        {hasErrors && (
          <button
            onClick={startReviewLevel}
            className="px-6 py-3 rounded-lg bg-yellow-600 hover:bg-yellow-500 transition font-bold text-white flex items-center gap-2"
          >
            <span>🛠️</span> Praticar Erros
          </button>
        )}

        {/* Botão Próximo (Destaque principal) */}
        <button
          onClick={nextLesson}
          className="px-8 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition font-bold shadow-lg shadow-cyan-500/30"
        >
          Próximo Nível →
        </button>
      </div>
    </motion.div>
  );
};