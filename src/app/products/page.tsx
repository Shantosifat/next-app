"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Product = { id: string; name: string; description: string; price: number };

export default function ProductsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status !== "loading" && !session) router.push("/login");
  }, [status, session, router]);

  useEffect(() => {
    if (!session) return;

    fetch("/api/products", { credentials: "include" })
      .then((res) => {
        if (res.status === 401) throw new Error("Unauthorized");
        return res.json();
      })
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [session]);

  if (status === "loading" || !session || loading) return <p className="text-center mt-8">Loading products...</p>;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-bold mb-2">{p.name}</h2>
            <p className="text-gray-700 mb-4">{p.description}</p>
            <p className="font-semibold text-blue-600 mb-2">${p.price}</p>
            <Link href={`/products/${p.id}`} className="text-blue-500 hover:underline">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
