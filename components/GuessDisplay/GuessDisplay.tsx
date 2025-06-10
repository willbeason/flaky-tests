import { Button } from '@mantine/core';

export const GuessValue = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
};

export type GuessValueType = (typeof GuessValue)[keyof typeof GuessValue];

function nextGuess(guessValue: GuessValueType): GuessValueType {
  const NEXT_GUESS = [1, 2, 3, 0] as const;
  return NEXT_GUESS[guessValue];
}

export type Guess = {
  upperLeft: GuessValueType;
  upperRight: GuessValueType;
  lowerLeft: GuessValueType;
  lowerRight: GuessValueType;
};

export function GuessDisplayButton({
  guess,
  guessKey,
  handleSetGuess,
}: {
  guess: Guess;
  guessKey: keyof Guess;
  handleSetGuess: (guess: Guess) => void;
}) {
  const incrementGuessCell = (guess: Guess) =>
    handleSetGuess({
      ...guess,
      [guessKey]: nextGuess(guess[guessKey]),
    });

  const buttonTitle = `increment-guess-${guessKey}-button`;

  return (
    <>
      <Button title={buttonTitle} onClick={() => incrementGuessCell(guess)}>
        {guess[guessKey]}
      </Button>
    </>
  );
}

export default function GuessDisplay({
  guess,
  handleSetGuess,
}: {
  guess: Guess;
  handleSetGuess: (guess: Guess) => void;
}) {
  return (
    <>
      <p>
        <GuessDisplayButton guess={guess} guessKey="upperLeft" handleSetGuess={handleSetGuess} />
        <GuessDisplayButton guess={guess} guessKey="upperRight" handleSetGuess={handleSetGuess} />
      </p>
      <p>
        <GuessDisplayButton guess={guess} guessKey="lowerLeft" handleSetGuess={handleSetGuess} />
        <GuessDisplayButton guess={guess} guessKey="lowerRight" handleSetGuess={handleSetGuess} />
      </p>
    </>
  );
}
