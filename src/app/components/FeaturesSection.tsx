export function FeaturesSection() {
  const features = [
    {
      title: 'Seguros Certificados',
      desc: 'Na nova era da tecnologia, olhamos para o futuro com certeza e orgulho, e é por isso que assim é.'
    },
    {
      title: 'Mais de 20 anos de experiência',
      desc: 'Experiência consolidada fornecendo soluções robustas e personalizadas para nossos clientes.'
    },
    {
      title: 'Suporte disponível 24 horas por dia, 7 dias por semana',
      desc: 'Atendimento contínuo para resolver dúvidas e acionar coberturas quando necessário.'
    }
  ];

  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="inline-block bg-emerald-800/10 text-emerald-800 text-sm px-4 py-2 rounded-full">Por que escolher um seguro?</div>
        <h2 className="mt-6 text-4xl lg:text-5xl font-extrabold text-emerald-900">Estamos empenhados em assegurar e proteger a sua vida.</h2>
      </div>

      <div className="max-w-6xl mx-auto mt-10 bg-white rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2">
        <div className="p-10 space-y-8 text-left">
          {features.map((f, idx) => (
            <div key={idx} className="flex gap-5 items-start">
              <div className="flex-shrink-0 bg-amber-300 rounded-full w-10 h-10 flex items-center justify-center">✓</div>
              <div>
                <h4 className="font-semibold text-emerald-900">{f.title}</h4>
                <p className="text-sm text-emerald-700 mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
            alt="Clientes"
            className="w-full h-full object-cover rounded-r-xl"
            style={{ height: 380 }}
          />
        </div>
      </div>
    </section>
  );
}
