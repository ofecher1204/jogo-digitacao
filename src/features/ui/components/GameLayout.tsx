import { useGameStore } from "../../../store/useGameStore";
import { ProgressBar } from "./ProgressBar";
import { ResultModal } from "./ResultModal";
import { TypingArea } from "../../game/components/TypingArea";
import { GameFeedback } from "../../game/components/GameFeedback";
import { ContextImage } from "../../game/components/ContextImage";
import { TranslationDisplay } from "../../game/components/TranslationDisplay";

export const GameLayout = () => {
  const { status, cursor, lesson } = useGameStore();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-[var(--color-game-bg)] transition-colors duration-500">
      
      {/* 1. Results Screen Overlay */}
      {status === "finished" && <ResultModal />}

      {/* 2. Streak Feedback */}
      <GameFeedback />

      {/* 3. Progress Bar */}
      <div className="w-full max-w-3xl mb-12 flex justify-center">
        <ProgressBar current={cursor} total={lesson.text.length} />
      </div>

      {/* 4. Main Content Container */}
      <div className="flex flex-col items-center w-full max-w-4xl gap-8">
        
        <ContextImage />

        <TypingArea />

        <TranslationDisplay />

      </div>
    </div>
  );
};
