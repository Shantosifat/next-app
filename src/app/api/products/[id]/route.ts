import { NextRequest, NextResponse } from "next/server";
import { products } from "@/lib/products";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(product);
}
