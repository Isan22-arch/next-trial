import { type } from 'os';
import React from 'react';

type Data = {
  message: string;
};
function delayedError(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('An error occurred after ' + ms + ' milliseconds'));
    }, ms);
  });
}

async function Home() {
  // throw new Error('An error occurred');
  const data: Data = await (
    await fetch('http://localhost:3000/data_fetching/api/hello', {
      cache: 'no-store',
    })
  ).json();

  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold underline">{data.message}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil
          odit deserunt a itaque labore neque nobis. Animi ea explicabo at
          debitis doloremque, veniam sint, reprehenderit porro non cum nihil?
          Mollitia libero deleniti est odit velit adipisci officiis laboriosam
          veniam eum iste corporis exercitationem recusandae totam ab unde,
          vitae assumenda eaque eveniet vero atque dolor. Rem sunt laboriosam
          iusto itaque. Molestiae quod quia nihil eius necessitatibus earum odio
          ut commodi officia totam, at eaque deleniti voluptas perspiciatis
          assumenda numquam voluptatem voluptate id nobis ipsum fuga neque,
          labore adipisci ea? Atque?
        </p>
      </main>
    </div>
  );
}

export default Home;
