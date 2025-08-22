"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Product = { id: string; name: string; description: string; price: number };

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then(setProduct)
      .catch(console.error);
  }, [id]);

  if (!product) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="mb-4">{product.description}</p>
      <p className="font-semibold text-blue-600">${product.price}</p>
    </div>
  );
}
