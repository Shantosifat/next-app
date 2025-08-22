import { products } from "@/lib/products";

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-xl border border-gray-200">
  {/* Product Image Section */}
  <div className="w-full h-64 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
    <span className="text-gray-400 text-lg">Product Image</span>
  </div>

  {/* Product Info Section */}
  <div className="flex flex-col gap-4">
    <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
    <p className="text-gray-700 text-lg">{product.description}</p>
    <p className="text-2xl font-extrabold text-blue-600">${product.price}</p>
    
    {/* Action Buttons */}
    <div className="mt-6 flex gap-4">
      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
        Buy Now
      </button>
      <button className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
        Add to Wishlist
      </button>
    </div>
  </div>
</div>

  );
}
