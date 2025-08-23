import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const client = await clientPromise;
  const db = client.db("nextMart");

  const product = await db.collection("products").findOne({ _id: new ObjectId(params.id) });

  if (!product) {
    return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
  }

  return new Response(
    JSON.stringify({
      id: product._id.toString(),
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image || "/images/placeholder.png",
    }),
    { status: 200 }
  );
}
