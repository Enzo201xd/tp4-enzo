import { connect } from '@/app/libs/db'
import { NextRequest, NextResponse } from 'next/server'
import Counter from '@/app/models/schemma';

export async function POST(request: NextRequest) {
    await connect();
    const counter = new Counter({ count: 0 });
    await counter.save();
    return NextResponse.json({ message: "Counter created", count: 0 }, { status: 201 });
  }

  export async function PUT(request: NextRequest) {
    const { newCount: count } = await request.json();
    await connect();
    const updatedCounter = await Counter.findOneAndUpdate({}, { $set: { count } }, { new: true, upsert: true });
    return NextResponse.json({ message: "Counter updated", count: updatedCounter.count }, { status: 200 });
  }

export async function GET(request: NextRequest) {
  await connect();
  const counter = await Counter.findOne({});
  return NextResponse.json({ count: counter ? counter.count : 0 }, { status: 200 });
}