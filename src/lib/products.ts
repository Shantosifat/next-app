export const products = [
  { id: "1", name: "Product 1", description: "Awesome product", price: 20 },
  { id: "2", name: "Product 2", description: "Another product", price: 30 },
  { id: "3", name: "Product 3", description: "Cool product", price: 40 },
];
export function addProduct(product: { name: string; description: string; price: number }) {
  products.push({ id: (products.length + 1).toString(), ...product });
}
