'use client';

import { Button } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';

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

export default function GuessDisplay({
  guess,
  setGuessAction,
}: {
  guess: Guess;
  setGuessAction: Dispatch<SetStateAction<Guess>>;
}) {
  function incrementUpperLeft(guess: Guess): Guess {
    return {
      ...guess,
      upperLeft: nextGuess(guess.upperLeft)
    }
  }

  function incrementUpperRight(guess: Guess) {
    return {
      ...guess,
      upperRight: nextGuess(guess.upperRight)
    }
  }

  function incrementLowerLeft(guess: Guess) {
    return {
      ...guess,
      lowerLeft: nextGuess(guess.lowerLeft)
    }
  }

  function incrementLowerRight(guess: Guess) {
    return {
      ...guess,
      lowerRight: nextGuess(guess.lowerRight)
    }
  }

  return (
    <>
      <p>
        <Button
          title="increment-upper-left-button"
          onClick={() => setGuessAction((guess: Guess) => incrementUpperLeft(guess))}
        >
          {guess.upperLeft}
        </Button>
        <Button
          title="increment-upper-right-button"
          onClick={() => setGuessAction((guess: Guess) => incrementUpperRight(guess))}
        >
          {guess.upperRight}
        </Button>
      </p>
      <p>
        <Button
          title="increment-lower-left-button"
          onClick={() => setGuessAction((guess: Guess) => incrementLowerLeft(guess))}
        >
          {guess.lowerLeft}
        </Button>
        <Button
          title="increment-lower-right-button"
          onClick={() => setGuessAction((guess: Guess) => incrementLowerRight(guess))}
        >
          {guess.lowerRight}
        </Button>
      </p>
    </>
  );
}
