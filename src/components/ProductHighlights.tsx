"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
};

export function ProductHighlights() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <p className="text-center mt-8 text-gray-600">Loading products...</p>
    );

  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.slice(0, 6).map((p) => (   // ✅ only take first 6 products
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Product Image */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={p.image || "/images/placeholder.png"} // fallback image
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
              <p className="text-gray-700 line-clamp-3">{p.description}</p>
              <p className="text-blue-600 font-semibold text-lg">${p.price}</p>
              <Link
                href={`/products/${p.id.toString()}`}
                className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
