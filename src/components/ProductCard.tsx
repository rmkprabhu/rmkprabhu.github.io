import React from 'react';
import { formatINR } from '../utils/currency';

interface ProductCardProps {
  title: string;
  image: string;
  minOrder: number;
  price: number;
  supplier: string;
}

export default function ProductCard({ title, image, minOrder, price, supplier }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">by {supplier}</p>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-lg font-bold text-gray-900">{formatINR(price)}</p>
            <p className="text-sm text-gray-500">Min. Order: {minOrder} pcs</p>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Inquire Now
          </button>
        </div>
      </div>
    </div>
  );
}