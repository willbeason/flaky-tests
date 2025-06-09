'use client';

import { Button } from '@mantine/core';
import { PhaseType, TurnPhases } from '../TurnPhase/TurnPhase';

function advanceMessage(phase: PhaseType): string {
  switch (phase) {
    case TurnPhases.NONE:
      return 'Start Game';
    case TurnPhases.GUESS:
      return 'Confirm Guess';
    case TurnPhases.TEST:
      return 'Skip Tests';
    case TurnPhases.DEDUCE:
      return 'Done Deducing';
  }
}

function nextPhase(phase: PhaseType): PhaseType {
  switch (phase) {
    case TurnPhases.NONE:
    case TurnPhases.DEDUCE:
      return TurnPhases.GUESS;
    case TurnPhases.GUESS:
      return TurnPhases.TEST;
    case TurnPhases.TEST:
      return TurnPhases.DEDUCE;
  }
}

export default function AdvancePhase({
  phase,
  setPhaseAction,
}: {
  phase: PhaseType;
  setPhaseAction: (phase: PhaseType) => void;
}) {
  return (
    <>
      <Button title="advance-phase-button" onClick={() => setPhaseAction(nextPhase(phase))}>{advanceMessage(phase)}</Button>
    </>
  );
}
