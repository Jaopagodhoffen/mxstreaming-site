import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const plataformas = ['Netflix', 'Disney+', 'Crunchyroll', 'Spotify', 'Amazon Prime'];

  return (
    <div className="min-h-screen bg-zinc-900 text-white px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">MXStreaming</h1>
        <p className="text-zinc-400">Assinaturas compartilhadas com o melhor preço</p>
        <button className="mt-6 bg-red-600 hover:bg-red-700 px-4 py-2 rounded">Ver Planos</button>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {plataformas.map((p) => (
          <div key={p} className="bg-zinc-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">{p}</h2>
            <p className="text-sm text-zinc-400 mb-4">Planos a partir de R$9,90/mês</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Assinar</button>
          </div>
        ))}
      </section>

      <section className="bg-zinc-800 p-6 rounded-xl max-w-xl mx-auto">
        <h3 className="text-lg font-semibold mb-2">Contato / Suporte</h3>
        <p className="text-sm text-zinc-400 mb-4">Entre em contato via WhatsApp após o pagamento para receber sua conta.</p>
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full px-3 py-2 rounded bg-zinc-900 border border-zinc-700 text-white"
        />
        <button className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded">Enviar</button>
      </section>

      <footer className="text-center text-zinc-500 text-sm mt-12">
        © 2025 MXStreaming. Todos os direitos reservados.
      </footer>
    </div>
  );
}
