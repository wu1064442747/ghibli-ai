import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(
    'google.com, pub-2231169922405054, DIRECT, f08c47fec0942fa0',
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
} 