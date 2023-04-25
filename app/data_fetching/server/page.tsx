import React, { use } from 'react';
import Link from 'next/link';
import { Char } from '@/app/types/sample';

async function ServerPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const characters: Char = await (
    await fetch('https://rickandmortyapi.com/api/character', {
      cache: 'no-store',
      method: 'GET',
    })
  ).json();
  console.log('server');

  return (
    <div>
      <h2 className="text-center">ServerPage</h2>
      <ul>
        {characters.results.map((character) => (
          <li key={character.id}>
            <Link
              href={`/data_fetching/staticprop/${character.name}`
                .replace(/\s+/g, '-')
                .toLowerCase()}
            >
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServerPage;
