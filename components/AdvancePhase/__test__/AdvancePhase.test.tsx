import each from 'jest-each';
import AdvancePhase from '@/components/AdvancePhase/AdvancePhase';
import { PhaseType, TurnPhases } from '@/components/TurnPhase/TurnPhase';
import { render, screen, userEvent } from '@/test-utils';

describe('AdvancePhase', () => {
  each([
    [TurnPhases.NONE, TurnPhases.GUESS],
    [TurnPhases.GUESS, TurnPhases.TEST],
    [TurnPhases.TEST, TurnPhases.DEDUCE],
    [TurnPhases.DEDUCE, TurnPhases.GUESS],
  ]).it(
    "advances from the '%s' phase to the '%s' phase",
    async (currentPhase: PhaseType, wantPhase: PhaseType) => {
      const setPhase = jest.fn();

      render(<AdvancePhase phase={currentPhase} handleSetPhase={setPhase} />);

      const button = screen.getByTitle('advance-phase-button');
      await userEvent.click(button);

      expect(setPhase).toHaveBeenCalledWith(wantPhase);
    }
  );
});
