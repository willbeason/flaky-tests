'use client';

import { useState } from 'react';
import AdvancePhase from '@/components/AdvancePhase/AdvancePhase';
import GuessDisplay, { Guess } from '@/components/Guess/Guess';
import TurnPhase, { PhaseType } from '@/components/TurnPhase/TurnPhase';
import { Game, updateGame } from '@/remote/client';

export default function GameBoard({ game }: { game: Game }) {
  const [g, setGame] = useState<Game>(game);

  const setPhase = async (phase: PhaseType) => {
    await updateGame({ ...g, phase });
    setGame({ ...g, phase });
  };

  const setGuess = async (guess: Guess) => {
    await updateGame({ ...g, guess });
    setGame({ ...g, guess });
  };

  return (
    <>
      <TurnPhase phase={g.phase} />
      <AdvancePhase phase={g.phase} handleSetPhase={setPhase} />
      <GuessDisplay guess={g.guess} handleSetGuess={setGuess} />
    </>
  );
}
