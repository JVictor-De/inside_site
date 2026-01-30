export function DetailsSection() {
  return (
    <section id="contact-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
              <h3 className="text-2xl font-bold text-emerald-900 mb-2">Quem somos</h3>
              <p className="text-emerald-700">A INSITE Consultoria Empresarial é especializada em gestão de benefícios e seguros corporativos, oferecendo soluções personalizadas que ajudam empresas a reduzir custos, otimizar recursos e garantir mais tranquilidade para seus clientes.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4">
                <h4 className="text-lg font-semibold text-emerald-900 mb-3">O que fazemos</h4>
                <ul className="space-y-2 text-emerald-700">
                  <li className="flex items-start gap-3"><span className="text-emerald-800">✔</span> Plano de Saúde Empresarial</li>
                  <li className="flex items-start gap-3"><span className="text-emerald-800">✔</span> Plano Odontológico</li>
                  <li className="flex items-start gap-3"><span className="text-emerald-800">✔</span> Seguro de Vida em Grupo</li>
                  <li className="flex items-start gap-3"><span className="text-emerald-800">✔</span> Seguro Patrimonial</li>
                  <li className="flex items-start gap-3"><span className="text-emerald-800">✔</span> Soluções personalizadas, Telemedicina e Clube de Vantagens</li>
                </ul>
              </div>

              <div className="p-4">
                <h4 className="text-lg font-semibold text-emerald-900 mb-3">Nosso diferencial</h4>
                <ul className="space-y-2 text-emerald-700">
                  <li className="flex items-start gap-3"><span className="text-emerald-800">✔</span> Gestão estratégica — não vendemos prateleira</li>
                  <li className="flex items-start gap-3"><span className="text-emerald-800">✔</span> Relacionamento consultivo e próximo</li>
                  <li className="flex items-start gap-3"><span className="text-emerald-800">✔</span> Reestruturação com foco em economia real</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-emerald-50 rounded-lg border border-emerald-100">
              <h4 className="text-lg font-semibold text-emerald-900 mb-2">Como trabalhamos</h4>
              <ol className="list-decimal ml-5 text-emerald-700 space-y-2">
                <li>Diagnóstico detalhado</li>
                <li>Pesquisa de mercado e comparativo técnico-financeiro</li>
                <li>Reestruturação e implantação assistida</li>
                <li>Gestão contínua e governança</li>
              </ol>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm border border-emerald-50">
              <h4 className="text-lg font-semibold text-emerald-900">Case de sucesso</h4>
              <p className="text-emerald-700 mt-2">Escritório de Advocacia — Após auditoria e reestruturação completa dos planos de saúde, reduzimos custos em <strong>30%</strong> mantendo o mesmo padrão de cobertura e melhorando a satisfação dos colaboradores.</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden bg-emerald-900 text-white flex flex-col justify-between">
            <div>
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop" alt="Equipe" className="w-full h-64 object-cover opacity-95" />
              <div className="p-6">
                <h4 className="text-xl font-bold">Fale conosco</h4>
                <p className="mt-2 text-white/90">Italo Castellano — Consultor Empresarial</p>
                <p className="mt-1 text-white/90">(21) 99217-5903</p>
                <div className="mt-4">
                  <a href="tel:+5521992175903" className="inline-block bg-white text-emerald-900 font-semibold px-4 py-2 rounded-md">Agendar conversa</a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-emerald-800/80 text-white">
              <p className="text-sm">Escaneie e agende uma conversa</p>
                <div className="mt-3">
                <img src="/photos/foto-fundo-main-people.png" alt="QR" className="w-28 h-28 object-contain bg-white rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
