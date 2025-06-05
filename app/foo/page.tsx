import SequenceTesterCard from '@/components/SequenceTesterCard/SequenceTesterCard';
import { getGame } from '@/remote/client';

export default async function Page() {
  const game = await getGame();

  return <SequenceTesterCard yourName="Foo" game={game} />;
}
