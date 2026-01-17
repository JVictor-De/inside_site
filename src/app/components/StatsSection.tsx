export function StatsSection() {
  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-900 leading-tight mb-6">
              Os empresários modernos frequentemente sentem que suas franquias de seguro estão mais altas do que nunca.
            </h3>

            <div className="text-5xl sm:text-6xl font-extrabold text-emerald-900 mb-6">70%</div>

            <hr className="border-emerald-200 mb-8" />

            <p className="text-sm text-emerald-700 max-w-xl">
              Para muitos trabalhadores, uma conta inesperada de 2.000 dólares significaria recorrer a empréstimos. Nossa auditoria técnica identifica onde a empresa está pagando demais e como otimizar a apólice.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
              alt="Reunião"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
