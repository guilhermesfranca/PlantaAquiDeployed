import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Home, Trophy, Store, User } from "lucide-react";

export default function Navbar({ onPlantClick }) {
  const pathname = usePathname();
  const router = useRouter();

  // Oculta a navbar na landing page
  if (pathname === "/") {
    return null;
  }

  const handlePlantClick = () => {
    if (pathname === "/community") {
      // Se já estiver na página community → apenas abre o modal
      onPlantClick?.();
    } else {
      // Se estiver em outra página → vai pra community e adiciona ?plant=true
      router.push("/community?plant=true");
    }
  };

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#594336] text-white py-2 shadow-[0_-2px_10px_rgba(0,0,0,0.6)] z-50">
  <div className="px-4">
        <ul className="flex justify-around items-center text-center text-xs relative">
          {/* Início */}
          <a
            href="/community"
            className="flex flex-col items-center transition-all duration-300 hover:scale-110 hover:text-[#b6ceb4] p-2"
          >
            <Home className="w-6 h-6" strokeWidth={1.6} />
          </a>

          {/* Ranking */}
          <a
            href="/dashboard"
            className="flex flex-col items-center transition-all duration-300 hover:scale-110 hover:text-[#b6ceb4] p-2"
          >
            <Trophy className="w-6 h-6" strokeWidth={1.6} />
          </a>

          {/* 🌱 Botão central */}
          <div className="relative -translate-y-6">
            <button
              onClick={handlePlantClick}
              aria-label="Plantar árvore"
              className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#c8d8c2] text-black shadow-[0_12px_30px_rgba(182,206,180,0.45)] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <span className="text-3xl">🌱</span>
            </button>
          </div>

          {/* Shop */}
          <a
            href="/shop"
            className="flex flex-col items-center transition-all duration-300 hover:scale-110 hover:text-[#b6ceb4] p-2"
          >
            <Store className="w-6 h-6" strokeWidth={1.6} />
          </a>

          {/* Perfil */}
          <a
            href="/profile"
            className="flex flex-col items-center transition-all duration-300 hover:scale-110 hover:text-[#b6ceb4] p-2"
          >
            <User className="w-6 h-6" strokeWidth={1.6} />
          </a>
        </ul>
      </div>
    </nav>
  );
}
