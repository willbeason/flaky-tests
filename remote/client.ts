'use server';

import { Guess } from '@/components/GuessDisplay/GuessDisplay';
import { PhaseType, TurnPhases } from '@/components/TurnPhase/TurnPhase';

export type Game = {
  phase: PhaseType;
  guess: Guess;
};

let _game: Game = {
  phase: TurnPhases.NONE,
  guess: {
    upperLeft: 0,
    upperRight: 0,
    lowerLeft: 0,
    lowerRight: 0,
  },
};

export async function getGame(): Promise<Game> {
  // fetch
  return _game;
}

export async function updateGame(game: Game): Promise<boolean> {
  _game = game;
  return true;
}

export async function getFoo(): Promise<string> {
  return 'a string';
}
