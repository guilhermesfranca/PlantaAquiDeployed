"use client"

import React, { useState } from 'react';
import { Leaf, ShoppingBag, Coins, Heart, Package, Sprout, Shirt, ArrowLeft } from 'lucide-react';

export default function EcoShop() {
  const [userCoins, setUserCoins] = useState(5000);
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: ShoppingBag },
    { id: 'seeds', name: 'Seeds', icon: Sprout },
    { id: 'accessories', name: 'Accessories', icon: Heart },
    { id: 'apparel', name: 'Apparel', icon: Shirt },
    { id: 'tools', name: 'Tools', icon: Package }
  ];

  const products = [
    {
      id: 1,
      name: 'Sunflower Seeds',
      category: 'seeds',
      price: 2500,
      image: '🌻',
      description: 'Pack with 20 seeds',
      inStock: true
    },
    {
      id: 2,
      name: 'Composting Kit',
      category: 'tools',
      price: 4500,
      image: '♻️',
      description: 'Complete kit for home composting',
      inStock: true
    },
    {
      id: 3,
      name: 'Eco T-shirt',
      category: 'apparel',
      price: 20000,
      image: '👕',
      description: '100% organic cotton',
      inStock: true
    },
    {
      id: 4,
      name: 'Reusable Bottle',
      category: 'accessories',
      price: 4500,
      image: '🧴',
      description: 'Stainless steel, 750ml',
      inStock: true
    },
    {
      id: 5,
      name: 'Tomato Seeds',
      category: 'seeds',
      price: 3000,
      image: '🍅',
      description: 'Organic variety',
      inStock: true
    },
    {
      id: 6,
      name: 'Garden Shovel',
      category: 'tools',
      price: 5000,
      image: '🔨',
      description: 'Sustainable wooden handle',
      inStock: true
    },
    {
      id: 7,
      name: 'Eco Cap',
      category: 'apparel',
      price: 10000,
      image: '🧢',
      description: 'Recycled material',
      inStock: false
    },
    {
      id: 8,
      name: 'Reusable Bag',
      category: 'accessories',
      price: 15000,
      image: '👜',
      description: 'Durable natural fabric',
      inStock: true
    },
    {
      id: 9,
      name: 'Basil Seeds',
      category: 'seeds',
      price: 2000,
      image: '🌿',
      description: 'Perfect for cooking',
      inStock: true
    },
    {
      id: 10,
      name: 'Sustainable Watering Can',
      category: 'tools',
      price: 3500,
      image: '💧',
      description: 'Recycled plastic',
      inStock: true
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handlePurchase = (product) => {
    if (userCoins >= product.price && product.inStock) {
      setUserCoins(userCoins - product.price);
      setCart([...cart, product]);
      alert(`✅ ${product.name} successfully purchased!`);
    } else if (!product.inStock) {
      alert('❌ Out of stock');
    } else {
      alert('❌ Not enough coins');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-emerald-50 to-white min-h-screen pb-24">
      <div className="px-6 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <a
              href="/community"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </a>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Eco Shop</h1>
              <p className="text-sm text-gray-600">Trade your coins</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-400 to-amber-500 px-4 py-2 rounded-full shadow-md">
            <div className="flex items-center gap-2">
              <Coins className="text-white" size={20} />
              <span className="font-bold text-lg text-white">{userCoins.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Premium Subscription Banner */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-lg mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Leaf className="text-yellow-300" size={20} />
              </div>
              <h3 className="text-white font-bold text-xl">Green+ Plan</h3>
            </div>
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
              Earn 2x more coins, access to exclusive products, option to create events, and a monthly “tree package”!
            </p>
            <div className="flex items-center justify-between">
              <span className="text-white font-bold text-lg">€25/month</span>
              <button className="bg-white text-green-700 px-6 py-2 rounded-full font-bold text-sm shadow-md hover:shadow-xl transition-all hover:scale-105">
                Activate Now
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap transition-all text-sm font-semibold ${
                    activeCategory === cat.id
                      ? 'bg-green-500 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={18} />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 flex items-center justify-center">
                <span className="text-6xl">{product.image}</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-xs text-gray-600 mb-3 line-clamp-2 h-8">{product.description}</p>
                
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-1.5 bg-amber-100 px-3 py-1 rounded-full">
                    <Coins className="text-amber-600" size={14} />
                    <span className="font-bold text-amber-700 text-sm">{product.price.toLocaleString("pt-BR")}</span>
                  </div>
                  {!product.inStock && (
                    <span className="text-xs text-red-600 font-semibold">Out of Stock</span>
                  )}
                </div>

                <button
                  onClick={() => handlePurchase(product)}
                  disabled={!product.inStock || userCoins < product.price}
                  className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    !product.inStock || userCoins < product.price
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-green-500 text-white hover:bg-green-600 hover:scale-105 shadow-md'
                  }`}
                >
                  {!product.inStock ? 'Out of Stock' : userCoins < product.price ? 'Not enough coins' : 'Purchase'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Coins className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">How to earn coins?</h4>
              <p className="text-sm text-gray-700">
                Plant trees (+100), complete daily challenges (+50), make donations (+200), and keep your streak active (+25/day)!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
