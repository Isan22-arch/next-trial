'use client';
import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { Char } from '@/app/types/sample';

const fetcher = (path: string): Promise<Char> =>
  fetch(`https://rickandmortyapi.com/${path}`).then((res) => res.json());

function ClientPage() {
  const { data, isLoading } = useSWR('/api/character', fetcher);
  console.log('Client');

  return (
    <div>
      <h2 className="text-center">Client</h2>
      <ul>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data?.results.map((character) => (
            <li key={character.id}>
              <Link
                href={`/data_fetching/staticprop/${character.name}`
                  .replace(/\s+/g, '-')
                  .toLowerCase()}
              >
                {character.name}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ClientPage;
