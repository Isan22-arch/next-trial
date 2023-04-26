import Link from 'next/link';
import { Char } from '@/app/types/sample';

export async function generateStaticParams() {
  const chars: Char = await (
    await fetch('https://rickandmortyapi.com/api/character', {
      cache: 'force-cache',
      method: 'GET',
    })
  ).json();
  return chars.results.map((character) => ({
    slug: character.name.replace(/\s+/g, '-').toLowerCase(),
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>{params.slug}</h1>
      <Link href="/data_fetching">Home</Link>
    </div>
  );
}
