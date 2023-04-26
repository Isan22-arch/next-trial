import { Char } from '@/app/types/sample';

export const getChars = async (
  id: number | '' = '',
  cache?: RequestCache
): Promise<Char> => {
  return await (
    await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
      cache: cache,
      method: 'GET',
    })
  ).json();
};
