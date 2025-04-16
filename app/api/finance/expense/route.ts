import { NextResponse } from "next/server";
import { db } from '@/lib/backend';

const table = db.expenses;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const item = table.getById(id);
    if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(item);
  }

  return NextResponse.json(table.getAll());
}

export async function POST(request: Request) {
  const body = await request.json();
  const created = table.create(body);
  return NextResponse.json(created, { status: 201 });
}

export async function PUT(request: Request) {
  const body = await request.json();
  const { id } = body;

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const updated = table.update(id, body);
  if (!updated) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  return NextResponse.json(updated);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const deleted = table.delete(id);
  if (!deleted) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  return NextResponse.json(deleted);
}
