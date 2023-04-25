import React, { use } from 'react';
import Link from 'next/link';
import { Char } from '@/app/types/sample';

async function StatciPropPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const chars: Char = await (
    await fetch('https://rickandmortyapi.com/api/character', {
      cache: 'force-cache',
      method: 'GET',
    })
  ).json();
  console.log('static');

  return (
    <div>
      <h2 className="text-center">StatciPropPage</h2>
      <ul>
        {chars.results.map((character) => (
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

export default StatciPropPage;
