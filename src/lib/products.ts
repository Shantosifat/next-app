export const products  = [
  {
    id: "1",
    name: "Apple MacBook Pro 16\"",
    description:
      "Powerful Apple M1 Pro chip, 16GB RAM, 512GB SSD, Retina display, ideal for professionals and creatives.",
    price: 2499,
  },
  {
    id: "2",
    name: "Sony WH-1000XM5 Wireless Headphones",
    description:
      "Industry-leading noise cancellation, 30-hour battery life, premium sound quality, and comfortable design.",
    price: 399,
  },
  {
    id: "3",
    name: "Samsung Galaxy S23 Ultra",
    description:
      "Flagship Android smartphone with 200MP camera, 12GB RAM, 5000mAh battery, and stunning AMOLED display.",
    price: 1199,
  },
  {
    id: "4",
    name: "Nike Air Zoom Pegasus 40",
    description:
      "Lightweight and responsive running shoes with excellent cushioning for everyday training and long runs.",
    price: 120,
  },
  {
    id: "5",
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    description:
      "Multi-functional cooker: pressure cook, slow cook, rice cooker, steamer, sauté, yogurt maker, and warmer.",
    price: 89,
  },
  {
    id: "6",
    name: "Canon EOS R6 Mirrorless Camera",
    description:
      "Full-frame mirrorless camera with 20MP sensor, 4K video recording, and fast autofocus for professional photography.",
    price: 2499,
  },
];
export function addProduct(product: { name: string; description: string; price: number }) {
  products.push({ id: (products.length + 1).toString(), ...product });
}
