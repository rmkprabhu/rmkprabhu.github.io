import React from 'react';
import ProductCard from './ProductCard';

const featuredProducts = [
  {
    title: "Classic Bamboo Round Neck",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
    minOrder: 100,
    price: 399,
    supplier: "EcoKnit Exports"
  },
  {
    title: "Premium Bamboo Polo",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=800",
    minOrder: 150,
    price: 599,
    supplier: "Tirupur Eco Textiles"
  },
  {
    title: "Bamboo Full Sleeve T-Shirt",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800",
    minOrder: 100,
    price: 499,
    supplier: "Green Garments India"
  }
];

export default function FeaturedSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}