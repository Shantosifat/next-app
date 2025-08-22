"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { products as initialProducts, Product } from "@/lib/products";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Load products from the shared module when the component mounts
    setProducts(initialProducts);
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{p.name}</h2>
          <p>{p.description}</p>
          <p className="font-semibold">${p.price}</p>
          <Link href={`/products/${p.id}`} className="text-blue-500 mt-2 inline-block">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
