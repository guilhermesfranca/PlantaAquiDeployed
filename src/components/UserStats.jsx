export default function UserStats({ name, points, treesPlanted, levelLabel, completion = 0 }) {
  const safeCompletion = Math.min(Math.max(completion, 0), 100);
 return (
<section className="font-sans text-[#594236]">
      <div className="bg-[#f0f0f0] rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col gap-6 max-w-2xl mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold leading-tight">{name}</h1>
            <p className="text-sm text-[#96a78d]">Bem-vindo de volta! Vamos cultivar novas vitórias hoje?</p>
          </div>
          {levelLabel && (
            <span className="inline-flex items-center gap-2 rounded-2xl border border-[#96a78d] bg-white px-4 py-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-[#96a78d]" aria-hidden="true" />
              {levelLabel}
            </span>
          )}
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-[#96a78d]">Pontos</p>
            <p className="text-2xl font-semibold">{points}</p>
          </div>
          <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-[#96a78d]">Árvores plantadas</p>
            <p className="text-2xl font-semibold">{treesPlanted}</p>
          </div>
          <div className="rounded-2xl bg-white px-5 py-4 shadow-sm flex flex-col gap-3">
            <p className="text-xs uppercase tracking-wide text-[#96a78d]">Progresso</p>
            <div className="w-full h-3 bg-[#d9e9cf] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#96a78d] transition-all"
                style={{ width: `${safeCompletion}%` }}
                role="progressbar"
                aria-valuenow={safeCompletion}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
            <span className="text-sm font-medium">{safeCompletion}% completo</span>
          </div>
        </div>
      </div>
    </section>
  );
}