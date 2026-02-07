import { useEffect, useRef } from "react";
import { useGameStore } from "./store/useGameStore";
import { motion } from "framer-motion";
import { ProgressBar } from "./components/ProgressBar";
import { ResultsScreen } from "./components/ResultsScreen";

function App() {
  const { lesson, cursor, isError, handleInput, streak, status } = useGameStore();
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (status === "finished") return;
      // Previne scroll com espaço apenas se o foco não estiver em um input real
      if (e.key === " " && e.target === document.body) e.preventDefault();
      handleInput(e.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleInput, status]);

  // Divisão do texto para renderização semântica e segura
  const charDone = lesson.text.slice(0, cursor);
  const charCurrent = lesson.text[cursor];
  const charRemaining = lesson.text.slice(cursor + 1);

  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-[var(--color-game-bg)] transition-colors duration-500"
      ref={containerRef}
    >
      {/* 1. Tela de Resultados */}
      {status === "finished" && <ResultsScreen />}

      {/* 2. Feedback de Streak (Fogo) */}
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

      {/* 3. Barra de Progresso */}
      <div className="w-full max-w-3xl mb-12 flex justify-center">
        <ProgressBar current={cursor} total={lesson.text.length} />
      </div>

      {/* 4. Container de Conteúdo */}
      <div className="flex flex-col items-center w-full max-w-4xl gap-8">
        
        {/* Imagem de Contexto */}
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

        {/* 5. Área de Digitação (Multi-linha e Responsiva) */}
        <div className="text-4xl md:text-5xl font-mono font-bold leading-relaxed text-center break-words w-full select-none">
          
          {/* Texto já digitado (Verde/Sucesso) */}
          <span className="text-[var(--color-game-cursor)]">
            {charDone}
          </span>

          {/* Letra Atual / Cursor Visual */}
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

          {/* Texto Restante (Cinza/Fantasma) */}
          <span className="text-slate-700 opacity-40">
            {charRemaining}
          </span>
        </div>

        {/* 6. Tradução/Auxílio */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-slate-500 text-xl md:text-2xl italic mt-4 text-center"
        >
          {lesson.translation}
        </motion.div>

      </div>
    </div>
  );
}

export default App;