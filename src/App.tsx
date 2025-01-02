import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <CategoryBar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <ProductList />
              </>
            } />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About EcoBamboo</h3>
                <p className="text-gray-400">
                  Leading manufacturer of premium bamboo T-shirts from Tirupur, Tamil Nadu. 
                  Committed to sustainable fashion and quality exports.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Bulk Orders</li>
                  <li>Sample Request</li>
                  <li>Sustainability</li>
                  <li>Certifications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-400">
                  Email: exports@ecobamboo.in<br />
                  Phone: +91 421 XXX XXXX<br />
                  Address: SIDCO Industrial Estate, Tirupur, Tamil Nadu 641603
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;