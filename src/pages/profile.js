import React from "react";
import Link from "next/link"; // ✅ Import do Link para navegação no Next.js
import { Coins, Sprout, Droplets, Sun, Leaf } from "lucide-react";

export default function Profile() {
  const user = {
    name: "Enzo Valentino",
    email: "enzo@valentino.com",
    coins: 5,
    streak: 7,
    trees: 18,
    badges: ["Eco Iniciante", "Guardião da Floresta", "Semente de Ouro"],
  };

  const achievements = [
    {
      name: "Primeira Semente",
      description: "Plantou sua primeira árvore",
      icon: Sprout,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      unlocked: true,
    },
    {
      name: "Guardião da Floresta",
      description: "10 árvores plantadas",
      icon: Leaf,
      color: "from-emerald-400 to-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      unlocked: true,
    },
    {
      name: "Chuva de Bênçãos",
      description: "Regou 50 árvores",
      icon: Droplets,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      unlocked: true,
    },
    {
      name: "Cultivador Solar",
      description: "7 dias consecutivos",
      icon: Sun,
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      unlocked: true,
    },
  ];

  return (
    <main className="max-w-md mx-auto min-h-screen bg-gradient-to-b from-emerald-50 to-white text-[#1f2937] flex flex-col items-center px-6 py-10 font-sans pb-24">
      {/* Header */}
      <header className="w-full flex items-center justify-between mb-8">
        <h1 className="text-lg font-semibold text-[#14532d]">Meu Perfil</h1>
      </header>

      {/* Profile Card */}
      <section className="w-full bg-white rounded-3xl shadow-md p-6 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-[#22c55e]/10 flex items-center justify-center mb-4">
          <img
            src="/profile.png"
            alt="Foto de perfil"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2 className="text-2xl font-semibold text-[#14532d]">{user.name}</h2>
        <p className="text-sm text-[#166534] mb-6">{user.email}</p>
      </section>

      {/* Stats */}
      <section className="w-full bg-white rounded-3xl mt-8 p-6 shadow-md grid grid-cols-3 gap-4 text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">🔥</span>
          <p className="text-xs text-[#15803d] uppercase">Sequência</p>
          <span className="text-lg font-bold text-[#14532d]">{user.streak}</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">🌳</span>
          <p className="text-xs text-[#15803d] uppercase">Árvores</p>
          <span className="text-lg font-bold text-[#14532d]">{user.trees}</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Coins className="text-amber-500" size={28} />
          <p className="text-xs text-[#15803d] uppercase">Coins</p>
          <span className="text-lg font-bold text-[#14532d]">{user.coins}</span>
        </div>
      </section>

      {/* Conquistas */}
      <section className="w-full bg-white rounded-3xl mt-8 p-6 shadow-md">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Conquistas</h3>
          <div className="grid grid-cols-1 gap-3">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className={`${achievement.bgColor} border-2 ${achievement.borderColor} rounded-xl p-4 transition-all hover:shadow-md ${
                    !achievement.unlocked ? "opacity-40 grayscale" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center shadow-md`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-base">
                        {achievement.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {achievement.description}
                      </p>
                    </div>
                    {achievement.unlocked && (
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="w-full mt-8 flex flex-col gap-4">
        {/* ✅ Botão AboutUs com link */}
        <Link href="/about">
          <button className="flex justify-between  text-center items-center bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-2xl p-4 text-white font-semibold shadow-lg hover:opacity-90 transition">
          <span>About</span>
        </button>
        </Link>

        
      </section>
    </main>
  );
}
