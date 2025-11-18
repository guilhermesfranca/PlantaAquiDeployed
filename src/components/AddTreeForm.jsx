import { useState } from 'react';

export default function AddTreeForm({ onAdd }) {
  const [formData, setFormData] = useState({ species: '', location: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitted) {
      setSubmitted(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAdd?.(formData);
    setFormData({ species: '', location: '' });
    setSubmitted(true);
  }

  return (
    <section className="font-sans text-[#594236]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#f0f0f0] rounded-2xl shadow-lg p-6 sm:p-8 max-w-xl mx-auto flex flex-col gap-5"
      >
        <header className="text-center space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Adicionar nova árvore</h2>
          <p className="text-sm text-[#96a78d]">
            Preencha os detalhes abaixo para celebrar mais um passo rumo a um planeta mais verde.
          </p>
        </header>
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-base font-medium">Espécie</span>
            <input
              id="species"
              name="species"
              type="text"
              value={formData.species}
              onChange={handleChange}
              placeholder="Ex.: Araucária"
              className="bg-white text-[#594236] placeholder:text-[#96a78d] border border-[#96a78d] rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b6ceb4] focus:border-transparent transition"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-base font-medium">Localização</span>
            <input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              placeholder="Ex.: Parque Central, Lisboa"
              className="bg-white text-[#594236] placeholder:text-[#96a78d] border border-[#96a78d] rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b6ceb4] focus:border-transparent transition"
              required
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-2xl bg-[#594236] text-[#f0f0f0] font-semibold py-3 transition-colors hover:bg-[#b6ceb4] hover:text-[#594236] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b6ceb4] focus:ring-offset-[#f0f0f0]"
        >
          Adicionar Árvore
        </button>
        {submitted && (
          <p className="text-center text-sm font-medium text-[#594236] bg-white border border-[#b6ceb4] rounded-2xl py-3">
            🌱 Árvore adicionada com sucesso!
          </p>
        )}
      </form>
    </section>
  );
}
