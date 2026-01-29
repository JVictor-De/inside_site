import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { toast } from "sonner";
import { ArrowRight, ArrowLeft, Building2, Target, User, CheckCircle2 } from "lucide-react";

type Step = 1 | 2 | 3 | 4;

const companySize = [
  { value: "5-20", label: "5-20", sublabel: "Pequena" },
  { value: "21-50", label: "21-50", sublabel: "Média" },
  { value: "51-100", label: "51-100", sublabel: "Em crescimento" },
  { value: "100+", label: "100+", sublabel: "Grande" },
];

const challenges = [
  { value: "custos", label: "Reduzir Custos", icon: "💰", desc: "Pago muito pelos benefícios atuais" },
  { value: "beneficios", label: "Melhorar Benefícios", icon: "⭐", desc: "Quero atrair e reter talentos" },
  { value: "burocracia", label: "Eliminar Burocracia", icon: "📋", desc: "RH sobrecarregado com operações" },
  { value: "auditoria", label: "Auditoria Completa", icon: "🔍", desc: "Não sei se estou pagando certo" },
];

export function ProgressiveForm() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    size: "",
    challenge: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = () => {
    toast.success("Análise solicitada! Italo entrará em contato em até 24h.");
    setStep(1);
    setFormData({ size: "", challenge: "", name: "", phone: "", email: "" });
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.size !== "";
      case 2: return formData.challenge !== "";
      case 3: return formData.name !== "" && formData.phone !== "";
      default: return false;
    }
  };

  return (
    <div className="w-full">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                step >= s 
                  ? 'scale-110' 
                  : 'scale-100'
              }`}
              style={{
                background: step >= s 
                  ? 'linear-gradient(135deg, #1F7A5A 0%, #0B2A45 100%)' 
                  : 'rgba(11, 42, 69, 0.1)',
                color: step >= s ? 'white' : 'rgba(11, 42, 69, 0.5)',
                boxShadow: step >= s ? '0 0 20px rgba(31, 122, 90, 0.5)' : 'none',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {step > s ? <CheckCircle2 className="h-5 w-5" /> : s}
            </div>
            {s < 3 && (
              <div 
                className="w-16 h-1 mx-2 rounded-full transition-all duration-500"
                style={{
                  background: step > s 
                    ? 'linear-gradient(90deg, #1F7A5A, #0B2A45)' 
                    : 'rgba(11, 42, 69, 0.1)'
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="min-h-[300px]">
        {/* Step 1: Company Size */}
        {step === 1 && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="h-12 w-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(31, 122, 90, 0.15)' }}
              >
                <Building2 className="h-6 w-6" style={{ color: '#1F7A5A' }} />
              </div>
              <div>
                <h3 
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#0B2A45' }}
                >
                  Qual o tamanho da sua empresa?
                </h3>
                <p style={{ fontFamily: 'Lato, sans-serif', color: '#4A5568' }}>
                  Isso nos ajuda a personalizar sua análise
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {companySize.map((size) => (
                <button
                  key={size.value}
                  onClick={() => setFormData(prev => ({ ...prev, size: size.value }))}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                    formData.size === size.value 
                      ? 'border-[#1F7A5A] bg-[#1F7A5A]/10' 
                      : 'border-gray-200 bg-gray-50 hover:border-[#1F7A5A]/50'
                  }`}
                >
                  <div 
                    className="text-3xl font-black mb-1"
                    style={{ 
                      color: formData.size === size.value ? '#1F7A5A' : '#0B2A45',
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                  >
                    {size.label}
                  </div>
                  <div 
                    className="text-sm"
                    style={{ 
                      color: '#4A5568',
                      fontFamily: 'Lato, sans-serif'
                    }}
                  >
                    {size.sublabel}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Challenge */}
        {step === 2 && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="h-12 w-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(31, 122, 90, 0.15)' }}
              >
                <Target className="h-6 w-6" style={{ color: '#1F7A5A' }} />
              </div>
              <div>
                <h3 
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#0B2A45' }}
                >
                  Qual seu maior desafio hoje?
                </h3>
                <p style={{ fontFamily: 'Lato, sans-serif', color: '#4A5568' }}>
                  Selecione o que mais incomoda
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {challenges.map((challenge) => (
                <button
                  key={challenge.value}
                  onClick={() => setFormData(prev => ({ ...prev, challenge: challenge.value }))}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] text-left ${
                    formData.challenge === challenge.value 
                      ? 'border-[#1F7A5A] bg-[#1F7A5A]/10' 
                      : 'border-gray-200 bg-gray-50 hover:border-[#1F7A5A]/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{challenge.icon}</span>
                    <div>
                      <div 
                        className="text-lg font-bold mb-1"
                        style={{ 
                          color: formData.challenge === challenge.value ? '#1F7A5A' : '#0B2A45',
                          fontFamily: 'Montserrat, sans-serif'
                        }}
                      >
                        {challenge.label}
                      </div>
                      <div 
                        className="text-sm"
                        style={{ 
                          color: '#4A5568',
                          fontFamily: 'Lato, sans-serif'
                        }}
                      >
                        {challenge.desc}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Contact Info */}
        {step === 3 && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="h-12 w-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(31, 122, 90, 0.15)' }}
              >
                <User className="h-6 w-6" style={{ color: '#1F7A5A' }} />
              </div>
              <div>
                <h3 
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#0B2A45' }}
                >
                  Quase lá! Como te contactamos?
                </h3>
                <p style={{ fontFamily: 'Lato, sans-serif', color: '#4A5568' }}>
                  Italo entrará em contato em até 24h
                </p>
              </div>
            </div>

            <div className="space-y-4 max-w-md">
              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ fontFamily: 'Lato, sans-serif', color: '#0B2A45' }}
                >
                  Seu Nome *
                </label>
                <Input
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Como podemos te chamar?"
                  className="h-14 rounded-xl border-gray-300"
                  style={{ color: '#0B2A45' }}
                />
              </div>
              
              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ fontFamily: 'Lato, sans-serif', color: '#0B2A45' }}
                >
                  WhatsApp *
                </label>
                <Input
                  value={formData.phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="(21) 99999-9999"
                  className="h-14 rounded-xl border-gray-300"
                  style={{ color: '#0B2A45' }}
                />
              </div>

              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ fontFamily: 'Lato, sans-serif', color: '#0B2A45' }}
                >
                  E-mail (opcional)
                </label>
                <Input
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="seu@email.com"
                  className="h-14 rounded-xl border-gray-300"
                  style={{ color: '#0B2A45' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
        {step > 1 ? (
          <Button
            variant="ghost"
            onClick={() => setStep((step - 1) as Step)}
            className="hover:bg-gray-100"
            style={{ color: '#4A5568' }}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        ) : (
          <div />
        )}

        {step < 3 ? (
          <Button
            onClick={() => setStep((step + 1) as Step)}
            disabled={!canProceed()}
            className="px-8 py-6 rounded-full text-white font-bold disabled:opacity-50 transition-all duration-300 hover:scale-105"
            style={{
              background: canProceed() 
                ? 'linear-gradient(135deg, #1F7A5A 0%, #0B2A45 100%)' 
                : 'rgba(11, 42, 69, 0.2)',
              boxShadow: canProceed() ? '0 0 30px rgba(31, 122, 90, 0.4)' : 'none',
              fontFamily: 'Lato, sans-serif'
            }}
          >
            Continuar
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!canProceed()}
            className="px-8 py-6 rounded-full text-white font-bold disabled:opacity-50 transition-all duration-300 hover:scale-105"
            style={{
              background: canProceed() 
                ? 'linear-gradient(135deg, #1F7A5A 0%, #0B2A45 100%)' 
                : 'rgba(11, 42, 69, 0.2)',
              boxShadow: canProceed() ? '0 0 30px rgba(31, 122, 90, 0.4)' : 'none',
              fontFamily: 'Lato, sans-serif'
            }}
          >
            Solicitar Análise Gratuita
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
