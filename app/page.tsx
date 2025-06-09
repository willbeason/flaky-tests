'use client';

import { useState } from 'react';
import AdvancePhase from '@/components/AdvancePhase/AdvancePhase';
import TurnPhase, { PhaseType, TurnPhases } from '@/components/TurnPhase/TurnPhase';

export default function HomePage() {
  const [phase, setPhase] = useState<PhaseType>(TurnPhases.NONE);

  return (
    <>
      <TurnPhase phase={phase} />
      <AdvancePhase phase={phase} setPhaseAction={setPhase} />
    </>
  );
}
