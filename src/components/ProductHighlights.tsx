import { products } from "@/lib/products";
import Link from "next/link";

export function ProductHighlights() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Product Image */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={p.image} // make sure your products have an "image" field
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
                href={`/products/${p.id}`}
                className="mt-4 inline-block text-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
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
