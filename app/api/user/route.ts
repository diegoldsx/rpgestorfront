import { NextResponse } from "next/server";
import avatar3 from '@/public/images/avatar/avatar-3.jpg';
import avatar2 from '@/public/images/avatar/avatar-2.jpg';

export const users: any[] = [
  {
    id: "1",
    name: 'RPGestor',
    image: avatar3,
    password: 'senha123',
    status: "active",
    username: "Gestor",
    email: 'admin@rpgestor.com.br',
    resetToken: null,
    resetTokenExpiry: null,
    profile: null,
  },
  {
    id: "2",
    name: 'Atendendimento',
    image: avatar2,
    password: 'senha123',
    status: "active",
    username: "atend123",
    email: 'atendimento@rpgestor.com.br',
    resetToken: null,
    resetTokenExpiry: null,
    profile: null,
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const item = users.find(u => u.id === id);
    if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(item);
  }

  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ status: 201 });
}

export async function PUT(request: Request) {
  const body = await request.json();
  const { id } = body;

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }



  return NextResponse.json({ status: 201 });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  return NextResponse.json({ status: 201 });
}
