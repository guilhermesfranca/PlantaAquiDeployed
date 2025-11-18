  import React from 'react';
  import { ArrowLeft, Users, Shield, Award, Target, Heart, Leaf } from 'lucide-react';

  export default function AboutUs() {
    const team = [
      {
        name: "Paula Guollo",
        role: "CEO & Fundadora",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
      },
      {
        name: "Miguel Sabogal ",
        role: "Diretor de Impacto",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
      },
      {
        name: "Gabriel",
        role: "Tech Lead",
        image: "https://i.pinimg.com/736x/eb/ce/d0/ebced0e4efc36fe9ffa19dcd3ed810bd.jpg"
      },
      {
        name: "Guilherme França",
        role: "Community Manager",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
      }
    ];

    const values = [
      {
        icon: Shield,
        title: "Transparência Total",
        description: "Cada doação é rastreável. Você sabe exatamente onde sua árvore foi plantada.",
        color: "from-blue-500 to-blue-600"
      },
      {
        icon: Award,
        title: "Impacto Verificado",
        description: "Parceria com ONGs locais para garantir que cada árvore sobreviva e cresça.",
        color: "from-green-500 to-emerald-600"
      },
      {
        icon: Users,
        title: "Comunidade Ativa",
        description: "Mais de 342 eco-heróis plantando árvores e mudando o mundo juntos.",
        color: "from-purple-500 to-pink-600"
      }
    ];

    return (
      <div className="max-w-md mx-auto bg-gradient-to-b from-emerald-50 to-white min-h-screen pb-24">
        {/* Hero Section */}
        <div 
          className="relative h-64 bg-cover bg-center"
          style={{
            backgroundImage: "url('/about.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-500/50"></div>
          
          <div className="relative h-full flex flex-col justify-between p-6">
            <a
              href="/community"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all self-start"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </a>
            
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Sobre Nós</h1>
              <p className="text-white/90 text-sm">Plantando o futuro, uma árvore de cada vez</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-8">
          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 mb-6 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold">Nossa Missão</h2>
            </div>
            <p className="text-white/90 leading-relaxed">
              Tornar a reflorestação acessível e gamificada, criando uma comunidade global de eco-heróis comprometidos em restaurar o planeta através da plantação de árvores.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-1">1.2K+</div>
              <p className="text-xs text-gray-600">Árvores Plantadas</p>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-1">342</div>
              <p className="text-xs text-gray-600">Eco-Heróis</p>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-1">12</div>
              <p className="text-xs text-gray-600">Países</p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
            <div className="space-y-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-5 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{value.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* UN SDG Goals */}
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Leaf className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-bold text-gray-900">Objetivos da ONU</h3>
              </div>
              <p className="text-sm text-gray-600">Alinhados com os ODS da ONU</p>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-orange-500 rounded-xl p-4 text-white text-center">
                <div className="text-2xl font-bold mb-1">11</div>
                <div className="text-xs leading-tight">Cidades Sustentáveis</div>
              </div>
              <div className="bg-green-600 rounded-xl p-4 text-white text-center">
                <div className="text-2xl font-bold mb-1">13</div>
                <div className="text-xs leading-tight">Ação Climática</div>
              </div>
              <div className="bg-lime-500 rounded-xl p-4 text-white text-center">
                <div className="text-2xl font-bold mb-1">15</div>
                <div className="text-xs leading-tight">Vida Terrestre</div>
              </div>
            </div>
          </div>

        

          {/* CTA */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg text-center">
            <Heart className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Junte-se a Nós</h3>
            <p className="text-white/90 text-sm mb-4">
              Faça parte desta comunidade e ajude a plantar o futuro
            </p>
            <a href="/community">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all">
                Começar Agora
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }