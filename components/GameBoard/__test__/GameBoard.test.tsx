import each from 'jest-each';
import GameBoard from '@/components/GameBoard/GameBoard';
import { Guess } from '@/components/GuessDisplay/GuessDisplay';
import { render } from '@/test-utils';
import { Game } from '@/remote/client';
import { TurnPhases } from '@/components/TurnPhase/TurnPhase';

describe('GameBoard', () => {
  each(['upperLeft', 'upperRight', 'lowerLeft', 'lowerRight']).it(
    'allows incrementing the %s guess in the Guess phase',
    (guessKey: keyof Guess) => {
      const setGuess = jest.fn();

      const game: Game = {
        phase: TurnPhases.GUESS,
        guess: {
          upperLeft: 0,
          upperRight: 0,
          lowerLeft: 0,
          lowerRight: 0,
        }
      };

      render(<GameBoard game={game} />);
    }
  );
});
