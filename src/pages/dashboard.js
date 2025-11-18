import React, { useState } from "react";
import {
  Sprout,
  Sun,
  Trophy,
  Award,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";

export default function Dashboard() {
  const currentUser = {
    name: "Enzo Valentino",
    level: 7,
    xp: 2450,
    nextLevel: 3000,
    avatar: "/profile.png",
    position: 2,
  };

  const stats = {
    trees: 18,
    streak: 7,
    donations: 3,
    co2Saved: 240,
  };

  const ranking = [
    { name: "Leandrinho", xp: 2600, avatar: "", color: "bg-green-500" },
    {
      name: "Enzo Valentino",
      xp: 2450,
      avatar: "/profile.png",
      color: "bg-emerald-600",
      isCurrentUser: true,
    },
    { name: "Maria Carneiro", xp: 2200, avatar: "👩", color: "bg-lime-500" },
    { name: "Lucas Ferreira", xp: 1900, avatar: "👨‍🦱", color: "bg-teal-500" },
    { name: "Ricardo Soares", xp: 1560, avatar: "👦", color: "bg-green-400" },
    { name: "Luna Oliveira", xp: 1540, avatar: "👧", color: "bg-emerald-400" },
  ];

  const achievements = [
    { id: 1, name: "Primeira Árvore", icon: "🌱", unlocked: true },
    { id: 2, name: "10 Árvores", icon: "🌳", unlocked: true },
    { id: 3, name: "Semana Verde", icon: "🔥", unlocked: true },
    { id: 4, name: "Doador", icon: "💚", unlocked: true },
    { id: 5, name: "50 Árvores", icon: "🏆", unlocked: false },
    { id: 6, name: "Mês Completo", icon: "⭐", unlocked: false },
  ];

  const progress = Math.min(
    (currentUser.xp / currentUser.nextLevel) * 100,
    100
  );
  const topThree = ranking.slice(0, 3);
  const restOfRanking = ranking.slice(3);

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-emerald-50 to-white min-h-screen pb-24">
      <div className="px-6 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <a
            href="/community"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </a>
          <h1 className="text-xl font-bold text-gray-800">Meu Progresso</h1>
          <a
            href="/profile"
            className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-green-500 transition-all"
          >
           
          </a>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg ring-4 ring-green-100">
              <img
                src="/profile.png"
                alt={currentUser.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800">
                {currentUser.name}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  NÍVEL {currentUser.level}
                </div>
                <Trophy className="w-4 h-4 text-yellow-500" />
              </div>
              <p className="text-sm font-semibold text-gray-700 mt-1">
                {currentUser.xp} / {currentUser.nextLevel} XP
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 transition-all duration-700 rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-gray-500">
                {Math.round(progress)}% completo
              </span>
              <span className="text-xs font-semibold text-green-600">
                +{currentUser.nextLevel - currentUser.xp} XP para nível{" "}
                {currentUser.level + 1}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-5 text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="text-3xl font-bold">{stats.trees}</span>
            </div>
            <p className="text-sm text-white/90">Árvores Plantadas</p>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="w-3 h-3 text-white/80" />
              <span className="text-xs text-white/80">+3 esta semana</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-5 text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <span className="text-3xl font-bold">{stats.streak}</span>
            </div>
            <p className="text-sm text-white/90">Dias de Sequência</p>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-xs text-white/80">🔥 Continue assim!</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">💰</span>
              </div>
              <span className="text-3xl font-bold">{stats.donations}</span>
            </div>
            <p className="text-sm text-white/90">Doações Feitas</p>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-xs text-white/80">€45 total</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-5 text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🌍</span>
              </div>
              <span className="text-3xl font-bold">{stats.co2Saved}</span>
            </div>
            <p className="text-sm text-white/90">kg CO₂ Economizado</p>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-xs text-white/80">
                Equivalente a 12 árvores
              </span>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              Conquistas
            </h3>
            <span className="text-sm text-gray-500">
              {achievements.filter((a) => a.unlocked).length}/
              {achievements.length}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`rounded-xl p-4 flex flex-col items-center justify-center transition-all ${
                  achievement.unlocked
                    ? "bg-gradient-to-br from-yellow-100 to-orange-100 shadow-md hover:scale-105"
                    : "bg-gray-100 opacity-50"
                }`}
              >
                <span className="text-3xl mb-2">{achievement.icon}</span>
                <p className="text-xs text-center font-semibold text-gray-700">
                  {achievement.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Ranking Verde
            </h3>
            <span className="text-sm font-semibold text-green-600">
              #{currentUser.position}
            </span>
          </div>

          {/* Top 3 Podium */}
          <div className="flex justify-center items-end gap-4 mb-8">
            {/* 2nd Place */}
            <div className="flex flex-col items-center">
              <div className="relative mb-2">
                <div
                  className={`w-16 h-16 ${
                    topThree[1]?.color
                  } rounded-full flex items-center justify-center text-2xl shadow-lg ${
                    topThree[1]?.isCurrentUser ? "ring-4 ring-green-400" : ""
                  }`}
                >
                  {topThree[1]?.isCurrentUser ? (
                    <img
                      src="profile.png"
                      alt={topThree[1]?.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    topThree[1]?.avatar
                  )}
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-xs font-bold text-white shadow">
                  2
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-800 text-center">
                {topThree[1]?.name.split(" ")[0]}
              </p>
              <p className="text-xs text-gray-500">{topThree[1]?.xp} pt</p>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center -mt-4">
              <div className="relative mb-2">
                <div
                  className={`w-20 h-20 ${
                    topThree[0]?.color
                  } rounded-full flex items-center justify-center text-3xl shadow-xl overflow-hidden ${
                    topThree[0]?.isCurrentUser ? "ring-4 ring-green-400" : ""
                  }`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg">
                  👑
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-800 text-center">
                {topThree[0]?.name.split(" ")[0]}
              </p>
              <p className="text-xs text-gray-500">{topThree[0]?.xp} pt</p>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center">
              <div className="relative mb-2">
                <div
                  className={`w-16 h-16 ${
                    topThree[2]?.color
                  } rounded-full flex items-center justify-center text-3xl shadow-xl overflow-hidden ${
                    topThree[2]?.isCurrentUser ? "ring-4 ring-green-400" : ""
                  }`}
                >
                  <img
                    src="/Batriz.png"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow">
                  3
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-800 text-center">
                {topThree[2]?.name.split(" ")[0]}
              </p>
              <p className="text-xs text-gray-500">{topThree[2]?.xp} pt</p>
            </div>
          </div>

          {/* Rest of Rankings */}
          <div className="space-y-2">
            {restOfRanking.map((user, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                  user.isCurrentUser
                    ? "bg-green-50 border-2 border-green-400"
                    : "hover:bg-gray-50"
                }`}
              >
                <span className="text-sm font-semibold text-gray-500 w-6">
                  {index + 4}
                </span>
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow overflow-hidden ${user.color}`}
                >
                  {user.isCurrentUser ? (
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xl">{user.avatar}</span>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  {user.isCurrentUser && (
                    <p className="text-xs text-green-600 font-medium">Você</p>
                  )}
                </div>
                <span className="text-sm font-semibold text-gray-600">
                  {user.xp} PT
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Goal Card */}
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-3xl">🎯</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg mb-1">Próximo Objetivo</h4>
              <p className="text-sm text-white/90">
                Plante mais 7 árvores para desbloquear "Guardião da Floresta" 🏆
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
