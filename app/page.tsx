'use client';

import { useState } from 'react';
import AdvancePhase from '@/components/AdvancePhase/AdvancePhase';
import GuessDisplay, { Guess } from '@/components/Guess/Guess';
import TurnPhase, { PhaseType, TurnPhases } from '@/components/TurnPhase/TurnPhase';


export default function HomePage() {
  const [phase, setPhase] = useState<PhaseType>(TurnPhases.NONE);
  const [guess, setGuess] = useState<Guess>({
    upperLeft: 0,
    upperRight: 0,
    lowerLeft: 0,
    lowerRight: 0,
  })

  return (
    <>
      <TurnPhase phase={phase} />
      <AdvancePhase phase={phase} setPhaseAction={setPhase} />
      <GuessDisplay guess={guess} setGuessAction={setGuess} />
    </>
  );
}
