'use client';

import { useState } from 'react';
import AdvancePhase from '@/components/AdvancePhase/AdvancePhase';
import GuessDisplay, { Guess } from '@/components/Guess/Guess';
import TurnPhase, { PhaseType } from '@/components/TurnPhase/TurnPhase';
import { Game } from '@/remote/client';

export default function GameBoard({ game }: { game: Game }) {
  const [phase, setPhase] = useState<PhaseType>(game.phase);
  const [guess, setGuess] = useState<Guess>(game.guess);

  return (
    <>
      <TurnPhase phase={phase} />
      <AdvancePhase phase={phase} setPhaseAction={setPhase} />
      <GuessDisplay guess={guess} setGuessAction={setGuess} />
    </>
  );
}
