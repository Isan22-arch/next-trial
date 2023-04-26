import React, { use } from 'react';
import Link from 'next/link';
import { Char } from '@/app/types/sample';
import { getChars } from '@/app/utils/get-chars';

async function ServerPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const chars = await getChars('', 'no-store');
  console.log('server');

  return (
    <div>
      <h2 className="text-center">ServerPage</h2>
      <ul>
        {chars.results.map((char) => (
          <li key={char.id}>
            <Link
              href={`/data_fetching/staticprop/${char.name}`
                .replace(/\s+/g, '-')
                .toLowerCase()}
            >
              {char.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServerPage;
