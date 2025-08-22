import { products } from "@/lib/products";
import Link from "next/link";
export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return <p>Product not found!</p>;
  return (
    <div className="p-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
   

      {/* Product Info */}
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-extrabold mb-4">
            {product.name}
          </h1>
          <p className=" mb-6">{product.description}</p>
          <p className="text-2xl font-bold text-blue-600 mb-6">
            ${product.price}
          </p>
        </div>

        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Buy Now
          </button>
          <Link
            href="/products"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg shadow hover:bg-blue-50 transition"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
