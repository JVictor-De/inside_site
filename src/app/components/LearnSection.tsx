import { Button } from "./ui/button";

export function LearnSection() {
  return (
    <section className="py-24 bg-emerald-50">
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
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-900 mt-4 mb-6 leading-tight">
              Saiba tudo em detalhes com nossos especialistas.
            </h3>
            <p className="text-emerald-700 mb-8">
              Dedicados a fornecer um serviço excepcional e planos de cobertura personalizados que atendam às suas necessidades específicas.
            </p>

            <Button
              size="lg"
              className="bg-emerald-700 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:scale-105 transition-transform"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Explorar serviço
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
