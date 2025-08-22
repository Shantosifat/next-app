import { NextRequest, NextResponse } from "next/server";
import { products } from "@/lib/products";

// Do NOT type the context explicitly; let Next.js infer it
export async function GET(req: NextRequest, context: any) {
  const id = context.params.id; // access id as usual
  const product = products.find(p => p.id === id);

  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
