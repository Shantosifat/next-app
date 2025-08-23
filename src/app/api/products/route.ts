import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB); // your DB name from .env
    const products = await db.collection("products").find({}).toArray();

    const formattedProducts = products.map((p) => ({
      id: p._id.toString(),
      name: p.name,
      description: p.description,
      price: p.price,
      image: p.image || "/images/placeholder.png",
    }));

    return NextResponse.json(formattedProducts, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, description, price, image } = data;

    if (!name || !description || !price) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const result = await db.collection("products").insertOne({
      name,
      description,
      price: Number(price),
      image: image || "",
      createdAt: new Date(),
    });

    return NextResponse.json({ id: result.insertedId.toString(), ...data }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
}
