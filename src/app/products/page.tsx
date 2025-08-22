"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { products as initialProducts, Product } from "@/lib/products";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    setProducts(initialProducts);
  }, []);

  const handleViewDetails = (id: string) => {
    if (!session) {
      // Redirect to login if not logged in
      router.push("/login");
    } else {
      // Go to product details page if logged in
      router.push(`/products/${id}`);
    }
  };

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div
          key={p.id}
          className="border p-4 rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold">{p.name}</h2>
          <p>{p.description}</p>
          <p className="font-semibold">${p.price}</p>
          <button
            onClick={() => handleViewDetails(p.id)}
            className="mt-2 inline-block text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}
