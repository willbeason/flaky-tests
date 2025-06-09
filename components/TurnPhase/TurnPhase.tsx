import classes from '@/components/TurnPhase/TurnPhase.module.css';

export const TurnPhases = {
  NONE: 'None',
  GUESS: 'Guess',
  TEST: 'Test',
  DEDUCE: 'Deduce',
} as const;

export type PhaseType = (typeof TurnPhases)[keyof typeof TurnPhases];

export const TurnPhasesOrder = [TurnPhases.GUESS, TurnPhases.TEST, TurnPhases.DEDUCE] as const;

export default function TurnPhase({ phase }: { phase: PhaseType }) {
  const turnPhases = TurnPhasesOrder.map((p) => {
    return (
      <div key={p} className={phase === p ? classes.active : classes.inactive}>
        {p}
      </div>
    );
  });

  return <div>{turnPhases}</div>;
}
