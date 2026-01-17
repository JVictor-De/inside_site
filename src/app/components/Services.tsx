export function Services() {
  const services = [
    {
      title: 'Plano de saúde',
      desc: 'Cobertura médica completa que garante proteção, cuidados e tranquilidade financeira em todos os momentos.',
      img: 'https://images.unsplash.com/photo-1587502536263-3f8b4a7f9f4f?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Seguro de viagem',
      desc: 'Garanta a segurança de todas as suas viagens com proteção completa contra riscos globais inesperados.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Seguros industriais',
      desc: 'Protegendo empresas com apólices personalizadas para cada risco de operação industrial.',
      img: 'https://images.unsplash.com/photo-1542224566-3f1a4b0c1a4f?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Seguro de carro',
      desc: 'Proteção confiável para o seu veículo, cobrindo acidentes, roubo e danos imprevistos na estrada.',
      img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-emerald-900/95">
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-sm text-emerald-200 font-medium">- Melhor serviço -</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4">
          Estamos oferecendo todos
          <br />
          os serviços de seguro para você.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {services.map((s, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden shadow-lg bg-white/5 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 flex flex-col justify-center bg-emerald-800/40">
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="md:w-1/2 h-48 md:h-auto">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
