import { Button } from '@mantine/core';
import { Guess } from '@/components/GuessDisplay/GuessDisplay';

function GuessDisplayButtonStatic({ guess, guessKey }: { guess: Guess; guessKey: keyof Guess }) {
  const buttonTitle = `increment-guess-${guessKey}-button`;

  return (
    <>
      <Button title={buttonTitle} disabled>
        {guess[guessKey]}
      </Button>
    </>
  );
}

export default function GuessDisplayStatic({ guess }: { guess: Guess }) {
  return (
    <>
      <p>
        <GuessDisplayButtonStatic guess={guess} guessKey="upperLeft" />
        <GuessDisplayButtonStatic guess={guess} guessKey="upperRight" />
      </p>
      <p>
        <GuessDisplayButtonStatic guess={guess} guessKey="lowerLeft" />
        <GuessDisplayButtonStatic guess={guess} guessKey="lowerRight" />
      </p>
    </>
  );
}
