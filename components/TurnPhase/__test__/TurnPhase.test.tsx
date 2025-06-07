import TurnPhase, { TurnPhases, TurnPhasesOrder } from '@/components/TurnPhase/TurnPhase';
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

  describe('highlights the current turn phase', () => {
    TurnPhasesOrder.forEach((phase) => {
      it(`when in phase ${phase}`, () => {
        render(<TurnPhase phase={phase} />);

        const playLabel = screen.getByText(phase);

        expect(playLabel).toHaveClass('active');
      });
    });
  });

  describe('does not highlight other phases', () => {
    Object.entries(TurnPhases).forEach(([_, current_phase]) => {
      it(`when in phase ${current_phase}`, () => {
        render(<TurnPhase phase={current_phase} />);

        TurnPhasesOrder.forEach((phase) => {
          if (phase === current_phase) {
            return;
          }

          const playLabel = screen.getByText(phase);

          expect(playLabel).toHaveClass('inactive');
        });
      });
    });
  });
});
