import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { products } from "@/lib/products";


export async function GET() {
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await req.json();
  const newProduct = { id: (products.length + 1).toString(), ...data };
  products.push(newProduct);

  return NextResponse.json(newProduct);
}
