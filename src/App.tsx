import { useGameInput } from "./features/game/hooks/useGameInput";
import { GameLayout } from "./features/ui/components/GameLayout";

function App() {
  // Initialize game input listener
  useGameInput();

  return (
    <GameLayout />
  );
}

export default App;