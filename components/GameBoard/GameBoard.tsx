'use client';

import { useState } from 'react';
import AdvancePhase from '@/components/AdvancePhase/AdvancePhase';
import GuessDisplay, { Guess } from '@/components/GuessDisplay/GuessDisplay';
import TurnPhase, { PhaseType, TurnPhases } from '@/components/TurnPhase/TurnPhase';
import { Game, updateGame } from '@/remote/client';
import GuessDisplayStatic from '@/components/GuessDisplay/GuessDisplayStatic';

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

  const pickDisplay = (phase: PhaseType) => {
    if (phase === TurnPhases.GUESS) {
      return <GuessDisplay guess={g.guess} handleSetGuess={setGuess} />;
    }
    return <GuessDisplayStatic guess={g.guess} />;
  }

  return (
    <>
      <TurnPhase phase={g.phase} />
      <AdvancePhase phase={g.phase} handleSetPhase={setPhase} />
      {pickDisplay(g.phase)}
    </>
  );
}
