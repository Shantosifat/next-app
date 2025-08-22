"use client";

import { addProduct } from "@/lib/products";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddProductPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  if (!session) {
    router.push("/login");
    return null;
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add product to in-memory array
    addProduct({ name, description, price: Number(price) });

    alert("Product added successfully!");
    setName("");
    setDescription("");
    setPrice("");

    // Optional: navigate to products page
    router.push("/products");
  };
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Add New Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 ">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
}
