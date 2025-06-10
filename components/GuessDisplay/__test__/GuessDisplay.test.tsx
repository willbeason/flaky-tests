import each from 'jest-each';
import { Guess, GuessDisplayButton } from '@/components/GuessDisplay/GuessDisplay';
import { render, screen } from '@/test-utils';


describe('GuessDisplayButton', () => {
  each([
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ]).it(
    "increments from '%s' to '%s'",
    (currentGuess: number, wantGuess: number) => {
      const guessKey: keyof Guess = 'upperLeft';

      const setGuess = jest.fn()

      const guess: Guess = {
        [guessKey]: currentGuess,
        upperRight: 0,
        lowerLeft: 0,
        lowerRight: 0,
      };
      
      render(<GuessDisplayButton guess={guess} guessKey={guessKey} handleSetGuess={setGuess} />)

      const button = screen.getByTitle('increment-guess-upperLeft-button');
      button.click();

      expect(setGuess).toHaveBeenCalledWith({
        ...guess,
        [guessKey]: wantGuess,
      });
    }
  )
});