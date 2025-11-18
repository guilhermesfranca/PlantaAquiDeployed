import React from 'react';
import { Sprout } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen flex justify-center bg-gray-900">
      <div
        className="w-full max-w-md h-screen bg-no-repeat bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: "url('/pa.png')" }}
      >
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative flex flex-col justify-between w-full h-full p-8 text-white">
          {/* Espaço vazio no topo */}
          <div className="flex-1"></div>

          {/* Conteúdo */}
          <div className="space-y-6 mb-12">
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-6">
                <Sprout style={{ color: '#76db03' }} size={48} />
              </div>
              
              <h1 className="text-4xl font-bold leading-tight">
                Planta hoje
                <span className="block mt-2" style={{ color: '#76db03' }}>
                  Muda o amanha!
                </span>
              </h1>
              
              <p className="text-white/70 text-base">
                Cada árvore faz diferença
              </p>
            </div>

            {/* Botão */}
            <a href="/community">
              <button
                className="w-full text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-95"
                style={{
                  backgroundColor: '#76db03',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#6ac002')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#76db03')}
              >
                Quero fazer a diferença
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
