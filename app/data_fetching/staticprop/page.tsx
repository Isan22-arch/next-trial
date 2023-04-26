import React, { use } from 'react';
import Link from 'next/link';
import { getChars } from '@/app/utils/get-chars';

async function StatciPropPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const chars = await getChars();
  console.log('static');

  return (
    <div>
      <h2 className="text-center">StatciPropPage</h2>
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

export default StatciPropPage;
