import { useState } from 'react';
import each from 'jest-each';
import AdvancePhase from '@/components/AdvancePhase/AdvancePhase';
import { PhaseType, TurnPhases } from '@/components/TurnPhase/TurnPhase';

import { render, screen } from '@/test-utils';

describe('AdvancePhase', () => {
  each([
    [TurnPhases.NONE, TurnPhases.GUESS],
    [TurnPhases.GUESS, TurnPhases.TEST],
    [TurnPhases.TEST, TurnPhases.DEDUCE],
    [TurnPhases.DEDUCE, TurnPhases.GUESS],
  ]).it(
    "advances from the '%s' phase to the '%s' phase",
    (currentPhase, wantPhase) => {
      let gotPhase = undefined;

      function setPhase(phase: PhaseType) {
        gotPhase = phase;
      }

      render(<AdvancePhase phase={currentPhase} setPhaseAction={setPhase} />);

      const button = screen.getByTitle('advance-phase-button');
      button.click();

      expect(gotPhase).toBe(wantPhase);
    }
  );
});
