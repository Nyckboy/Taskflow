import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const numId = Number(id);
  if (!id || Number.isNaN(numId)) {
    return NextResponse.json({ error: 'Invalid project id' }, { status: 400 });
  }

  const project = await prisma.project.findUnique({
    where: { id: numId },
  });

  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  return NextResponse.json(project);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const numId = Number(id);
  if (!id || Number.isNaN(numId)) {
    return NextResponse.json({ error: 'Invalid project id' }, { status: 400 });
  }

  const body = await request.json();
  const { name, color } = body;

  if (name === undefined && color === undefined) {
    return NextResponse.json(
      { error: 'At least one of name or color is required' },
      { status: 400 }
    );
  }

  const updatedProject = await prisma.project.update({
    where: { id: numId },
    data: {
      ...(name !== undefined ? { name } : {}),
      ...(color !== undefined ? { color } : {}),
    },
  });

  return NextResponse.json(updatedProject);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const numId = Number(id);
  if (!id || Number.isNaN(numId)) {
    return NextResponse.json({ error: 'Invalid project id' }, { status: 400 });
  }

  
  await prisma.project.delete({
    where: { id: numId },
  });

  return new NextResponse(null, { status: 204 });
}
