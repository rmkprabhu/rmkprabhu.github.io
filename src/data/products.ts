import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'classic-round-neck',
    title: "Classic Bamboo Round Neck",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
    minOrder: 100,
    price: 399,
    supplier: "EcoKnit Exports",
    description: "Premium bamboo fabric round neck T-shirt with superior moisture-wicking properties. Perfect for everyday wear and branded merchandise.",
    features: [
      "100% Organic Bamboo Fabric",
      "Moisture-wicking",
      "Anti-bacterial properties",
      "Eco-friendly manufacturing",
      "Soft and comfortable texture"
    ],
    specifications: {
      material: "100% Bamboo Viscose",
      gsm: "180-200 GSM",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White", "Black", "Navy", "Grey Melange", "Olive Green"],
      packaging: "Individual poly bag with size sticker"
    }
  },
  {
    id: 'premium-polo',
    title: "Premium Bamboo Polo",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=800",
    minOrder: 150,
    price: 599,
    supplier: "Tirupur Eco Textiles",
    description: "High-end bamboo polo T-shirt with collar and button placket. Ideal for corporate wear and premium merchandise.",
    features: [
      "Premium bamboo pique fabric",
      "Ribbed collar and cuffs",
      "2-button placket",
      "Reinforced seams",
      "Color-fast properties"
    ],
    specifications: {
      material: "95% Bamboo Viscose, 5% Elastane",
      gsm: "220 GSM",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White", "Black", "Navy", "Sky Blue", "Maroon"],
      packaging: "Individual poly bag with hanger"
    }
  },
  {
    id: 'full-sleeve',
    title: "Bamboo Full Sleeve T-Shirt",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800",
    minOrder: 100,
    price: 499,
    supplier: "Green Garments India",
    description: "Full sleeve bamboo T-shirt with excellent thermal regulation. Perfect for sports and outdoor activities.",
    features: [
      "Temperature regulating",
      "UV protection",
      "4-way stretch",
      "Quick-dry technology",
      "Flatlock seams"
    ],
    specifications: {
      material: "90% Bamboo Viscose, 10% Elastane",
      gsm: "200 GSM",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White", "Black", "Grey", "Navy", "Forest Green"],
      packaging: "Individual poly bag with size sticker"
    }
  }
];