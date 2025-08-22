"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaStar, FaRegHeart } from "react-icons/fa";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  sku?: string;
  rating?: number;
  inStock?: boolean;
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then(setProduct)
      .catch(console.error);
  }, [id]);

  if (!product) return <p className="text-center mt-8 text-gray-500">Loading product...</p>;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="md:w-1/2 h-80 md:h-auto rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-gray-300">{product.name}</h1>

            {/* Rating */}
            {/* {product.rating && (
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < product.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-gray-600 ml-2">({product.rating}.0)</span>
              </div>
            )} */}

            <p className="text-gray-100 mb-6">{product.description}</p>

            {/* SKU & Stock */}
            {/* <div className="flex gap-6 mb-6 text-gray-600">
              {product.sku && <span>SKU: {product.sku}</span>}
              <span className={`font-semibold ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div> */}

            <p className="text-3xl font-semibold text-blue-600 mb-6">${product.price}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>
            <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition">
              <FaRegHeart /> Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
