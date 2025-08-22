import { products } from "@/lib/products";

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="mt-2 font-semibold">${product.price}</p>
    </div>
  );
}
