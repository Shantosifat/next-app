"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Product = { id: string; name: string; description: string; price: number; image: string };

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-8">Loading products...</p>;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
          >
            {/* Product Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-xl font-bold mb-2">{p.name}</h2>
              <p className="text-gray-700 mb-4 flex-1">{p.description}</p>
              <p className="font-semibold text-blue-600 mb-2">${p.price}</p>
              <Link
                href={`/products/${p.id}`}
                className="text-blue-500 hover:underline mt-auto"
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
