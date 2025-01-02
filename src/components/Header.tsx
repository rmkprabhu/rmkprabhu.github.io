import React from 'react';
import { Leaf, Menu, Search, ShoppingCart, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">EcoBamboo</span>
          </div>
          
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search bamboo T-shirts by style, size, or color..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-gray-900">
              <User className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="md:hidden text-gray-600 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}