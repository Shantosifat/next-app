import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { authOptions } from "../auth/[...nextauth]/route";

let products = [
  { id: "1", name: 'Apple MacBook Pro 16"', description: "Powerful Apple M1 Pro chip, 16GB RAM, 512GB SSD, Retina display.", price: 2499 },
  { id: "2", name: "Sony WH-1000XM5 Wireless Headphones", description: "Noise cancellation, 30h battery, premium sound.", price: 399 },
  { id: "3", name: "Samsung Galaxy S23 Ultra", description: "Flagship Android smartphone, 200MP camera, 12GB RAM.", price: 1199 },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await req.json();
  const newProduct = { id: (products.length + 1).toString(), ...data };
  products.push(newProduct);

  return NextResponse.json(newProduct);
}
