import React from 'react';
import { useParams } from 'react-router-dom';
import { Package, Ruler, Palette } from 'lucide-react';
import { products } from '../data/products';
import { formatINR } from '../utils/currency';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{product.description}</p>
          
          <div className="mt-6">
            <p className="text-3xl font-bold text-gray-900">{formatINR(product.price)}</p>
            <p className="text-gray-600">Minimum Order: {product.minOrder} pieces</p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <Package className="w-6 h-6 text-green-600" />
              <div>
                <h3 className="font-semibold">Material</h3>
                <p className="text-gray-600">{product.specifications.material}</p>
                <p className="text-gray-600">{product.specifications.gsm}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Ruler className="w-6 h-6 text-green-600" />
              <div>
                <h3 className="font-semibold">Available Sizes</h3>
                <div className="flex gap-2 mt-1">
                  {product.specifications.sizes.map(size => (
                    <span key={size} className="px-3 py-1 border border-gray-300 rounded">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Palette className="w-6 h-6 text-green-600" />
              <div>
                <h3 className="font-semibold">Available Colors</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {product.specifications.colors.map(color => (
                    <span key={color} className="px-3 py-1 border border-gray-300 rounded">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Request Quote
            </button>
            <button className="flex-1 border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50">
              Request Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}