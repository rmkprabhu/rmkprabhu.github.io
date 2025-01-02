import React from 'react';

const categories = [
  'All Products',
  'Round Neck',
  'V Neck',
  'Polo',
  'Full Sleeve',
  'Oversized',
  'Custom Design'
];

export default function CategoryBar() {
  return (
    <div className="bg-gray-100 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 py-3 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              className="text-gray-600 hover:text-green-600 whitespace-nowrap text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}