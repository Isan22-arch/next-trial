import React from 'react';
import Link from 'next/link';

const routes = [
  {
    name: 'Home',
    path: '/data_fetching/',
  },
  {
    name: 'Server',
    path: '/data_fetching/server',
  },
  {
    name: 'Client',
    path: '/data_fetching/client',
  },
  {
    name: 'Staticprop',
    path: '/data_fetching/staticprop',
  },
];

function Navbar() {
  return (
    <ul className="flex justify-center gap-3  text-white p-4 border-b-[.5px] border-gray-700">
      {routes.map((route) => (
        <li key={route.name}>
          <Link href={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
