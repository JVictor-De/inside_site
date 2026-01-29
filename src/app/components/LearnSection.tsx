import { Button } from "./ui/button";

export function LearnSection() {
  return (
    <section className="py-24" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              alt="Consultoria"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>

          <div className="max-w-xl">
            <p className="text-sm text-emerald-700 font-medium">- Tudo é transparente -</p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-900 mt-4 mb-6 leading-tight">
              Soluções estratégicas que reduzem custos e liberam a agenda do RH.
            </h3>
            <p className="text-emerald-700 mb-6 text-base">
              Não somos uma seguradora. Somos uma consultoria estratégica — entregamos gestão, inteligência e otimização contínua de benefícios.
            </p>

            <ul className="text-emerald-700 mb-6 space-y-2">
              <li className="flex items-start gap-3"><span className="text-emerald-800 font-semibold">Para o CFO:</span> Auditoria técnica que identifica economia real e impacto no DRE.</li>
              <li className="flex items-start gap-3"><span className="text-emerald-800 font-semibold">Para o RH:</span> Suporte operacional completo — eliminamos a burocracia do dia a dia.</li>
            </ul>

            <Button
              size="lg"
              className="bg-emerald-700 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:scale-105 transition-transform"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Fale com um consultor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
