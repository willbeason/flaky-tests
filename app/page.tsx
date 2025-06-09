import GameBoard from '@/components/GameBoard';
import { getGame } from '@/remote/client';

export default async function HomePage() {
  const gameState = await getGame();
  return <GameBoard game={gameState} />;
}
