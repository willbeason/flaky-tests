import { Button } from '@mantine/core';

export const GuessValue = 0 | 1 | 2 | 3;

export type GuessValueType = typeof GuessValue;

export type Guess = {
  upperLeft: GuessValueType;
  upperRight: GuessValueType;
  lowerLeft: GuessValueType;
  lowerRight: GuessValueType;
};

function nextGuess(guessValue: GuessValueType): GuessValueType {
  return (guessValue + 1) % 4;
}

function GuessDisplayButton({ guessValue, key }: { guessValue: GuessValueType; key: keyof Guess }) {
  return (
    <>
      <Button title="increment-guess-{key}-button" key={key}>
        {guessValue}
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
  const incrementGuessCell = (guess: Guess, cell: keyof Guess) =>
    handleSetGuess({
      ...guess,
      [cell]: nextGuess(guess[cell]),
    });

  return (
    <>
      <p>
        <Button
          title="increment-upper-left-button"
          onClick={() => incrementGuessCell(guess, 'upperLeft')}
        >
          {guess.upperLeft}
        </Button>
        <Button
          title="increment-upper-right-button"
          onClick={() => incrementGuessCell(guess, 'upperRight')}
        >
          {guess.upperRight}
        </Button>
      </p>
      <p>
        <Button
          title="increment-lower-left-button"
          onClick={() => incrementGuessCell(guess, 'lowerLeft')}
        >
          {guess.lowerLeft}
        </Button>
        <Button
          title="increment-lower-right-button"
          onClick={() => incrementGuessCell(guess, 'lowerRight')}
        >
          {guess.lowerRight}
        </Button>
      </p>
    </>
  );
}
