import React from 'react';
import Link from 'next/link';
import getTime from '../utils/get-time';
import moment from 'moment';
// import kanjidate from 'kanjidate';
// const kanjidate = require('kanjidate');

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

async function Navbar() {
  const time = await getTime();

  return (
    <div className="flex justify-between  text-white p-4 border-b-[.5px] border-gray-700">
      <ul className="flex justify-start gap-3 flex-grow">
        {routes.map((route) => (
          <li key={route.name}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
      <div>{moment(time.datetime).format('YY/MM/DD ddd HH:mm:ss')}</div>
    </div>
  );
}

export default Navbar;
