import { ArrowUpRight } from "lucide-react";

export function InfoCard() {
  return (
    <div className="relative mt-12 md:mt-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Visual Card - Left */}
          <h3 
              className="text-2xl font-bold mb-6"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                color: '#0B2A45'
              }}
            >
              BENEFÍCIOS QUE VOCÊ OBTÉM AO USAR NOSSOS SERVIÇOS
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: "📊",
                  title: "REDUÇÃO DE CUSTOS",
                  description: "Elimine coberturas duplicadas e taxas ocultas com análise técnica de dados"
                },
                {
                  icon: "🛡️",
                  title: "PROTEÇÃO TOTAL",
                  description: "Mantenha a qualidade dos benefícios enquanto otimiza o investimento"
                },
                {
                  icon: "⚡",
                  title: "GESTÃO SIMPLIFICADA",
                  description: "Seu RH livre da burocracia. Assumimos toda a operação e monitoramento"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start group cursor-pointer">
                  <div className="text-3xl flex-shrink-0">{benefit.icon}</div>
                  <div className="flex-1">
                    <h4 
                      className="font-bold mb-1 group-hover:text-green-700 transition-colors"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: '#0B2A45'
                      }}
                    >
                      {benefit.title}
                    </h4>
                    <p 
                      className="text-gray-600 text-sm"
                      style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                  <ArrowUpRight 
                    className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
