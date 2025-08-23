import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const products = await db.collection("products").find({}).toArray();

    const formattedProducts = products.map((p) => ({
      id: p._id.toString(), // convert ObjectId to string
      name: p.name,
      description: p.description,
      price: p.price,
      image: p.image || "/images/placeholder.png",
    }));

    return new Response(JSON.stringify(formattedProducts), { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const client = await clientPromise;
  const db = client.db();

  try {
    const data = await req.json();
    const { name, description, price, image } = data;

    if (!name || !description || !price) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const result = await db.collection("products").insertOne({
      name,
      description,
      price: Number(price),
      image: image || "", // optional
      createdAt: new Date(),
    });

    return NextResponse.json({ _id: result.insertedId, ...data });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to add product" },
      { status: 500 }
    );
  }
}
