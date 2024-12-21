import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params: { id } }: { params: { id: number } }
) {
  const { completed } = await req.json();

  await db.todo.update({
    where: {
      id: id,
    },
    data: {
      complete: completed,
    },
  });
  return NextResponse.json({ message: "Updated" }, { status: 200 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  await db.todo.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json({ message: "Deleted Item" }, { status: 200 });
}
