import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-green-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover mix-blend-multiply"
          src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=1200"
          alt="Sustainable T-shirt manufacturing"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Leaf className="h-6 w-6 text-green-400" />
          <span className="text-green-400 font-medium">Eco-Friendly Bamboo Clothing</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Premium Bamboo T-Shirts<br />
          Direct from Tirupur
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Experience the finest bamboo fabric T-shirts from India's textile hub. 
          Sustainable, comfortable, and perfect for bulk orders with reliable 
          shipping worldwide.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-gray-50">
            View Catalog
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
            Request Samples
          </button>
        </div>
      </div>
    </div>
  );
}