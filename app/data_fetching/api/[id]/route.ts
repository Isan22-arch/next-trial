import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  // return NextResponse.json({ hello: 'Next.js' });
  return NextResponse.json({ message: 'Hello Next.js' });
}
