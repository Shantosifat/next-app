export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string; // new field for product image
};

export const products = [
  {
    id: "1",
    name: "Apple MacBook Pro 16\"",
    description:
      "Powerful Apple M1 Pro chip, 16GB RAM, 512GB SSD, Retina display, ideal for professionals and creatives.",
    price: 2499,
    image: "https://i.ibb.co.com/QZFnHB6/download1.jpg"
  },
  {
    id: "2",
    name: "Sony WH-1000XM5 Wireless Headphones",
    description:
      "Industry-leading noise cancellation, 30-hour battery life, premium sound quality, and comfortable design.",
    price: 399,
    image: "https://i.ibb.co.com/VY5nrzNK/Sony-WH-1000-XM5-headphones-on-desk.jpg"
  },
  {
    id: "3",
    name: "Samsung Galaxy S23 Ultra",
    description:
      "Flagship Android smartphone with 200MP camera, 12GB RAM, 5000mAh battery, and stunning AMOLED display.",
    price: 1199,
    image: "https://i.ibb.co.com/dxBnBpb/Website-Main-Image-copy.jpg"
  },
  {
    id: "4",
    name: "Nike Air Zoom Pegasus 40",
    description:
      "Lightweight and responsive running shoes with excellent cushioning for everyday training and long runs.",
    price: 120,
    image: "https://i.ibb.co.com/6JqK5XHF/o-GSc-Gq6ix9iv2-CFx-PCpove-1200-80.jpg"
  },
  {
    id: "5",
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    description:
      "Multi-functional cooker: pressure cook, slow cook, rice cooker, steamer, sauté, yogurt maker, and warmer.",
    price: 89,
    image: "https://i.ibb.co.com/MxWfZ06W/1-SP4067671-Hero-Square-feb46737e905436c814a0c92e1eeb860.webp"
  },
  {
    id: "6",
    name: "Canon EOS R6 Mirrorless Camera",
    description:
      "Full-frame mirrorless camera with 20MP sensor, 4K video recording, and fast autofocus for professional photography.",
    price: 2499,
    image: "https://static.bhphoto.com/images/images500x500/canon_eos_r6_mirrorless_digital_1598441176_1572353.jpg"
  },
];

export function addProduct(product: { name: string; description: string; price: number; image: string }) {
  products.push({ id: (products.length + 1).toString(), ...product });
}
