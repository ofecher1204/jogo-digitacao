import { create } from "zustand";
import { Howl } from "howler";
import { lessons } from "../data/lessons";
import type { LearningUnit } from "../types";
import { commonWords } from "../data/dictionary";

const soundClick = new Howl({ src: ["click.mp3"], volume: 0.5 });
const soundError = new Howl({ src: ["error.mp3"], volume: 0.5 });
const soundWin = new Howl({ src: ["/win.mp3"], volume: 0.5 });

type GameStatus = "playing" | "finished";

interface GameState {
  currentLessonIndex: number;
  cursor: number;
  isError: boolean;
  lesson: LearningUnit;
  mistakes: Record<string, number>;
  streak: number;
  status: GameStatus;
  startTime: number;
  wpm: number;

  handleInput: (key: string) => void;
  nextLesson: () => void;
  restartLevel: () => void;
  startReviewLevel: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  currentLessonIndex: 0,
  cursor: 0,
  isError: false,
  lesson: lessons[0],
  mistakes: {},
  streak: 0,
  status: "playing",
  startTime: Date.now(),
  wpm: 0,

  handleInput: (key: string) => {
    const { lesson, cursor, mistakes, streak, status, startTime } = get();

    if (status === "finished") return;

    // ERRO 1 RESOLVIDO: Removida a redeclaração de 'targetChar'
    const targetChar = lesson.text[cursor];

    if (key.length > 1) return;

    if (key === targetChar) {
      soundClick.play();
      const nextCursor = cursor + 1;
      const nextStreak = streak + 1;

      if (nextCursor === lesson.text.length) {
        soundWin.play();
        const timeElapsed = (Date.now() - startTime) / 1000 / 60;
        const wordCount = lesson.text.length / 5;
        const finalWpm = Math.round(wordCount / timeElapsed);

        set({ cursor: nextCursor, status: "finished", wpm: finalWpm });
      } else {
        // Atualiza apenas se não terminou
        set({ cursor: nextCursor, isError: false, streak: nextStreak });
      }
    } else {
      soundError.play();
      const errorKey = targetChar.toLowerCase();

      set({
        isError: true,
        streak: 0,
        mistakes: {
          ...mistakes,
          [errorKey]: (mistakes[errorKey] || 0) + 1,
        },
      });

      setTimeout(() => set({ isError: false }), 300);
    }
  },

  nextLesson: () => {
    const { currentLessonIndex } = get();
    const nextIndex = (currentLessonIndex + 1) % lessons.length;

    set({
      currentLessonIndex: nextIndex,
      lesson: lessons[nextIndex],
      cursor: 0,
      isError: false,
      streak: 0,
      mistakes: {},
      status: "playing",
      startTime: Date.now(),
    });
  },

  restartLevel: () => {
    // ERRO 2 RESOLVIDO: Removido o '(state)' que não estava sendo usado
    set({
      cursor: 0,
      isError: false,
      streak: 0,
      mistakes: {},
      status: "playing",
      startTime: Date.now(),
    });
  },
  startReviewLevel: () => {
    const { mistakes } = get();
    const errorKeys = Object.keys(mistakes);

    if (errorKeys.length === 0) return;

    const reviewWords: string[] = [];
    
    errorKeys.forEach((key) => {
      const matches = commonWords
        .filter((w) => w.includes(key) && w.length > 2)
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);
      reviewWords.push(...matches);
    });

    if (reviewWords.length < 6) reviewWords.push("the", "and", "with");

    const drillText = reviewWords.sort(() => 0.5 - Math.random()).join(' ').toLowerCase();

    const reviewLesson: LearningUnit = {
      id: "review-1",
      domain: 'english', 
      sphere: 'academic',
      category: 'daily_life',
      level: 1,
      text: drillText,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
      translation: `Prática focada nas teclas: ${errorKeys.join(", ").toUpperCase()}`,
    };

    set({
      lesson: reviewLesson,
      cursor: 0,
      isError: false,
      streak: 0,
      mistakes: {}, // Reseta erros para a nova rodada
      status: "playing",
      startTime: Date.now(),
    });
  },
}));
