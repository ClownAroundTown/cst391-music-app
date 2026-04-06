import { NextRequest, NextResponse } from 'next/server';
import { updateItem } from 'next/dist/compiled/next-devtools';
import pool from '@/lib/db';
import { Album } from '@/lib/types/albums.model';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  console.log(request.nextUrl.searchParams.get("q"))
  try {
    if (request.nextUrl.searchParams.get("q")==null){
      const res = await pool.query('SELECT DISTINCT artist FROM albums ORDER BY artist');
      const artists = res.rows.map((r: Album) => r.artist);
      return NextResponse.json(artists);
    }
    else {
      switch(request.nextUrl.searchParams.get("q"))
      {
        case "id":
          const urlGet = request.nextUrl.searchParams.get("id");
          console.log(urlGet);
          const res = await pool.query(`SELECT * FROM albums WHERE id = ${urlGet}`);
          const artists = res.rows.map((r: Album) => r.artist);
          return NextResponse.json(artists);
      }
    }
  } catch (error) {
    console.error('GET /api/albums error:', error);
    return NextResponse.json({ error: 'Failed to fetch artists' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);
  return new Response("Data went through successfully! Check the console!");
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json();
  const updatedItem = await updateItem(params.id, body);

  if (!updatedItem) {
    return NextResponse.json({ error: 'Item not found' }, { status: 404 });
  }

  return NextResponse.json(updatedItem, { status: 200 });
}
