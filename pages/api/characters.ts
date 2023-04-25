import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const chars = await fetch('https://rickandmortyapi.com/api/character');
    res.status(200).json(chars);
  } catch (error) {
    res.status(500).json(error);
  }
}
