import Link from 'next/link';
import { Char } from '@/app/types/sample';
import { getChars } from '@/app/utils/get-chars';

export async function generateStaticParams() {
  const chars = await getChars();
  return chars.results.map((char) => ({
    slug: char.name.replace(/\s+/g, '-').toLowerCase(),
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>{params.slug}</h1>
      <Link href="/data_fetching">Home</Link>
    </div>
  );
}
