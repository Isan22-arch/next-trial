import Link from 'next/link';
import { getChars } from '@/app/utils/get-chars';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const chars = await getChars();
  return chars.results.map((char) => ({
    slug: char.name.replace(/\s+/g, '-').toLowerCase(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: params.slug,
    description: `this is ${params.slug}'s detail page`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>{params.slug}</h1>
      <Link href="/data_fetching">Home</Link>
    </div>
  );
}
