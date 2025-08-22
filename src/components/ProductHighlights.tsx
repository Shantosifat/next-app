import { products } from "@/lib/products";
import Link from "next/link";

export function ProductHighlights() {
  return (
    <section className="py-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
      {products.map((p) => (
        <div key={p.id} className="border p-4 rounded shadow">
          <h2 className="font-bold text-xl">{p.name}</h2>
          <p>{p.description}</p>
          <p className="font-semibold">${p.price}</p>
          <Link href={`/products/${p.id}`} className="text-blue-500 mt-2 inline-block">
            Details
          </Link>
        </div>
      ))}
    </section>
  );
}
