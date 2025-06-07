import classes from '@/components/TurnPhase/TurnPhase.module.css';

export const TurnPhases = {
  NONE: 'None',
  GUESS: 'Guess',
  TEST: 'Test',
  DEDUCE: 'Deduce',
} as const;

export const TurnPhasesOrder = [TurnPhases.GUESS, TurnPhases.TEST, TurnPhases.DEDUCE] as const;

export default function TurnPhase({
  phase,
}: {
  phase: (typeof TurnPhases)[keyof typeof TurnPhases];
}) {
  const turnPhases = TurnPhasesOrder.map((p) => {
    if (phase === p) {
      return (
        <div key={p} className={classes.active}>
          {p}
        </div>
      );
    }
    return (
      <div key={p} className={classes.inactive}>
        {p}
      </div>
    );
  });

  return <div>{turnPhases}</div>;
}
