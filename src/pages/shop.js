"use client"

import React, { useState } from 'react';
import { Leaf, ShoppingBag, Coins, Heart, Package, Sprout, Shirt, ArrowLeft } from 'lucide-react';

export default function EcoShop() {
  const [userCoins, setUserCoins] = useState(5);
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tudo', icon: ShoppingBag },
    { id: 'seeds', name: 'Sementes', icon: Sprout },
    { id: 'accessories', name: 'Acessórios', icon: Heart },
    { id: 'apparel', name: 'Roupa', icon: Shirt },
    { id: 'tools', name: 'Ferramentas', icon: Package }
  ];

  const products = [
    {
      id: 1,
      name: 'Sementes de Girassol',
      category: 'seeds',
      price: 2500,
      image: '🌻',
      description: 'Pacote com 20 sementes',
      inStock: true
    },
    {
      id: 2,
      name: 'Kit de Compostagem',
      category: 'tools',
      price: 4500,
      image: '♻️',
      description: 'Kit completo para compostagem caseira',
      inStock: true
    },
    {
      id: 3,
      name: 'T-shirt Eco',
      category: 'apparel',
      price: 20000,
      image: '👕',
      description: '100% algodão orgânico',
      inStock: true
    },
    {
      id: 4,
      name: 'Garrafa Reutilizável',
      category: 'accessories',
      price: 4500,
      image: '🧴',
      description: 'Aço inoxidável, 750ml',
      inStock: true
    },
    {
      id: 5,
      name: 'Sementes de Tomate',
      category: 'seeds',
      price: 3000,
      image: '🍅',
      description: 'Variedade orgânica',
      inStock: true
    },
    {
      id: 6,
      name: 'Pá de Jardim',
      category: 'tools',
      price: 5000,
      image: '🔨',
      description: 'Cabo de madeira sustentável',
      inStock: true
    },
    {
      id: 7,
      name: 'Boné Eco',
      category: 'apparel',
      price: 10000,
      image: '🧢',
      description: 'Material reciclado',
      inStock: false
    },
    {
      id: 8,
      name: 'Sacola Reutilizável',
      category: 'accessories',
      price: 15000,
      image: '👜',
      description: 'Tecido natural resistente',
      inStock: true
    },
    {
      id: 9,
      name: 'Sementes de Manjericão',
      category: 'seeds',
      price: 2000,
      image: '🌿',
      description: 'Perfeito para cozinha',
      inStock: true
    },
    {
      id: 10,
      name: 'Regador Sustentável',
      category: 'tools',
      price: 3500,
      image: '💧',
      description: 'Plástico reciclado',
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
      alert(`✅ ${product.name} adquirido com sucesso!`);
    } else if (!product.inStock) {
      alert('❌ Produto esgotado');
    } else {
      alert('❌ Moedas insuficientes');
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
              <h1 className="text-2xl font-bold text-gray-900">Loja Ecológica</h1>
              <p className="text-sm text-gray-600">Troque suas moedas</p>
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
              <h3 className="text-white font-bold text-xl">Plano Verde+</h3>
            </div>
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
              Ganhe 2x mais moedas, acesso a produtos exclusivos, opção de criar eventos e uma "tree package" todos os meses!
            </p>
            <div className="flex items-center justify-between">
              <span className="text-white font-bold text-lg">25€/mês</span>
              <button className="bg-white text-green-700 px-6 py-2 rounded-full font-bold text-sm shadow-md hover:shadow-xl transition-all hover:scale-105">
                Ativar Agora
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
                    <span className="text-xs text-red-600 font-semibold">Esgotado</span>
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
                  {!product.inStock ? 'Esgotado' : userCoins < product.price ? 'Sem moedas' : 'Adquirir'}
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
              <h4 className="font-bold text-gray-900 mb-1">Como ganhar moedas?</h4>
              <p className="text-sm text-gray-700">
                Plante árvores (+100), complete desafios diários (+50), faça doações (+200) e mantenha sua sequência ativa (+25/dia)!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}