export default function RankingList({ ranking = [] }) {
  return (
    <section className="font-sans text-[#594236]">
      <div className="max-w-2xl mx-auto bg-white/70 rounded-2xl shadow-lg p-6 sm:p-8">
        <header className="mb-6 text-center">
          <h2 className="text-2xl font-semibold">🏆 Ranking Global</h2>
          <p className="text-sm text-[#96a78d]">Conheça quem está a liderar as missões verdes desta semana.</p>
        </header>
        <ol className="space-y-4">
          {ranking.map((entry, index) => {
            const isFirst = index === 0;
            const background = index % 2 === 0 ? 'bg-[#d9e9cf]' : 'bg-[#f0f0f0]';
            return (
              <li
                key={entry.id ?? entry._id ?? index}
                className={`${background} rounded-2xl px-4 sm:px-6 py-4 flex items-center justify-between gap-4 shadow-sm transition-transform hover:-translate-y-0.5`}
                aria-label={`${index + 1}º lugar: ${entry.name} com ${entry.points} pontos`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 font-semibold ${
                      isFirst ? 'text-[#594236] border-[#d4af37] text-xl sm:text-2xl' : 'border-[#96a78d] text-lg'
                    }`}
                  >
                    {index + 1}º
                  </span>
                  <div>
                    <p className={`font-semibold ${isFirst ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'}`}>{entry.name}</p>
                    <p className="text-sm text-[#96a78d]">Missões concluídas e impacto positivo na comunidade.</p>
                  </div>
                </div>
                <span
                  className={`font-semibold ${isFirst ? 'text-lg sm:text-xl text-[#594236]' : 'text-base text-[#594236]'}`}
                >
                  {entry.points} pts
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}