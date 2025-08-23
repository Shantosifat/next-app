'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: string;       // MongoDB ID
  name: string;
  description: string;
  price: number;
  image?: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-8 text-gray-600">Loading products...</p>;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-400">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col overflow-hidden"
          >
            {/* Product Image */}
            <div className="h-60 w-full overflow-hidden">
              <img
                src={p.image || "/images/placeholder.png"}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{p.name}</h2>
              <p className="text-gray-700 mb-4 flex-1 line-clamp-3">{p.description}</p>
              <p className="text-blue-600 font-bold text-lg mb-4">${p.price}</p>
              <Link
                href={`/products/${p.id}`}
                className="mt-auto inline-block text-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
