import each from 'jest-each';
import TurnPhase, { PhaseType, TurnPhases } from '@/components/TurnPhase/TurnPhase';
import { render, screen } from '@/test-utils';

describe('TurnPhase', () => {
  describe('lists all phases', () => {
    Object.entries(TurnPhases).forEach(([_, phase]) => {
      it(`when in phase ${phase}`, () => {
        render(<TurnPhase phase={phase} />);

        expect(screen.queryByText(TurnPhases.GUESS)).toBeInTheDocument();
        expect(screen.queryByText(TurnPhases.TEST)).toBeInTheDocument();
        expect(screen.queryByText(TurnPhases.DEDUCE)).toBeInTheDocument();
      });
    });
  });

  each([
    [TurnPhases.NONE, TurnPhases.GUESS, 'inactive'],
    [TurnPhases.NONE, TurnPhases.TEST, 'inactive'],
    [TurnPhases.NONE, TurnPhases.DEDUCE, 'inactive'],

    [TurnPhases.GUESS, TurnPhases.GUESS, 'active'],
    [TurnPhases.GUESS, TurnPhases.TEST, 'inactive'],
    [TurnPhases.GUESS, TurnPhases.DEDUCE, 'inactive'],

    [TurnPhases.TEST, TurnPhases.GUESS, 'inactive'],
    [TurnPhases.TEST, TurnPhases.TEST, 'active'],
    [TurnPhases.TEST, TurnPhases.DEDUCE, 'inactive'],

    [TurnPhases.DEDUCE, TurnPhases.GUESS, 'inactive'],
    [TurnPhases.DEDUCE, TurnPhases.TEST, 'inactive'],
    [TurnPhases.DEDUCE, TurnPhases.DEDUCE, 'active'],
  ]).it(
    "during the '%s' phase lists the '%s' phase as '%s'",
    (currentPhase: PhaseType, phase: PhaseType, expected: string) => {
      render(<TurnPhase phase={currentPhase} />);

      const phaseText = screen.getByText(phase);

      expect(phaseText).toHaveClass(expected);
    }
  );
});
