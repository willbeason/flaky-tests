'use server';

export type Game = {
  id: string;
  name: string;
};

export async function getGame(): Promise<Game> {
  // fetch
  return {
    id: '1',
    name: 'Game 1',
  };
}

export async function getFoo(): Promise<string> {
  return 'a string';
}
