import { useEffect } from "react";
import { useGameStore } from "../../../store/useGameStore";

export const useGameInput = () => {
  const { status, handleInput } = useGameStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (status === "finished") return;
      
      // Prevent scroll with space only if focus is not on a real input
      if (e.key === " " && e.target === document.body) {
        e.preventDefault();
      }
      
      handleInput(e.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleInput, status]);
};
