import { Button } from "@/app/components/ui/button";

export function DetailsSection() {
  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
              alt="Equipe discutindo"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>

          <div className="max-w-xl">
            <p className="text-sm text-emerald-700 font-medium">- Tudo é transparente -</p>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-900 mt-4 mb-6 leading-tight">
              Aprenda todos os detalhes essenciais explicados de forma clara.
            </h3>
            <p className="text-emerald-700 mb-8">
              Nosso objetivo é garantir que você esteja totalmente informado, com informações claras, precisas e transparentes sobre todos os aspectos de nossos serviços, e que sejam verdadeiramente úteis.
            </p>

            <Button
              size="lg"
              className="bg-lime-400 text-emerald-900 font-semibold px-6 py-3 rounded-md shadow-md hover:scale-105 transition-transform"
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
