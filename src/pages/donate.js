import React, { useState } from 'react';
import { Heart, Users, Globe, ArrowLeft, Check, Sprout } from 'lucide-react';

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const donationAmounts = [5, 10, 25, 50, 100];

  const impacts = [
    { icon: Sprout, amount: 5, text: '1 árvore plantada' },
    { icon: Sprout, amount: 10, text: '3 árvores plantadas' },
    { icon: Users, amount: 25, text: '10 árvores + workshop comunitário' },
    { icon: Globe, amount: 50, text: '25 árvores + projeto de reflorestação' },
  ];

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (amount > 0) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setSelectedAmount(null);
        setCustomAmount('');
      }, 3000);
    }
  };

  const getImpact = () => {
    const amount = selectedAmount || parseFloat(customAmount) || 0;
    if (amount >= 50) return impacts[3];
    if (amount >= 25) return impacts[2];
    if (amount >= 10) return impacts[1];
    if (amount >= 5) return impacts[0];
    return null;
  };

  const currentImpact = getImpact();

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-emerald-50 to-white min-h-screen pb-24">
      <div className="px-6 pt-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <a
            href="/community"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </a>
          <h1 className="text-2xl font-bold text-gray-900">Faça uma Doação</h1>
        </div>

        {/* Hero Card */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 mb-6 text-white shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Heart className="w-8 h-8" fill="white" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-center mb-2">
            Ajude a plantar o futuro
          </h2>
          <p className="text-sm text-center text-white/90">
            Cada doação planta árvores e ajuda comunidades a criar um planeta mais verde
          </p>
        </div>

        {/* Donation Type Toggle */}
        <div className="bg-white rounded-2xl p-2 mb-6 shadow-sm flex gap-2">
          <button
            onClick={() => setIsMonthly(false)}
            className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
              !isMonthly
                ? 'bg-green-500 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Doação Única
          </button>
          <button
            onClick={() => setIsMonthly(true)}
            className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
              isMonthly
                ? 'bg-green-500 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Mensal
          </button>
        </div>

        {/* Amount Selection */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Escolha o valor
          </h3>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {donationAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount('');
                }}
                className={`py-4 rounded-xl font-bold text-lg transition-all ${
                  selectedAmount === amount
                    ? 'bg-green-500 text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                €{amount}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
              €
            </span>
            <input
              type="number"
              placeholder="Outro valor"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="w-full pl-8 pr-4 py-4 rounded-xl bg-gray-100 border-2 border-transparent focus:border-green-500 focus:bg-white transition-all outline-none font-semibold text-gray-900"
            />
          </div>
        </div>

        {/* Impact Preview */}
        {currentImpact && (
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
                <currentImpact.icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-green-700 font-medium mb-1">
                  Seu impacto
                </p>
                <p className="text-lg font-bold text-green-900">
                  {currentImpact.text}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Donate Button */}
        <button
          onClick={handleDonate}
          disabled={!selectedAmount && !customAmount}
          className={`w-full py-4 rounded-2xl font-bold text-lg transition-all mb-6 ${
            selectedAmount || customAmount
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {isMonthly ? 'Doar Mensalmente' : 'Doar Agora'}
        </button>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-green-600 mb-1">1,247</p>
            <p className="text-xs text-gray-600">Árvores plantadas</p>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-green-600 mb-1">€8,432</p>
            <p className="text-xs text-gray-600">Total arrecadado</p>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-green-600 mb-1">342</p>
            <p className="text-xs text-gray-600">Doadores</p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Sprout className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  100% do valor vai para as árvores
                </h4>
                <p className="text-sm text-gray-600">
                  Cada euro é usado para plantar e cuidar de árvores
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  Apoio às comunidades locais
                </h4>
                <p className="text-sm text-gray-600">
                  Criamos empregos e educamos sobre sustentabilidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl transform scale-100 animate-in">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Obrigado! 🌱
              </h3>
              <p className="text-gray-600 mb-4">
                Sua doação de €{selectedAmount || customAmount} vai ajudar a plantar mais árvores!
              </p>
              <p className="text-sm text-green-600 font-semibold">
                Você ganhou +{Math.floor((selectedAmount || parseFloat(customAmount)) * 10)} XP
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}