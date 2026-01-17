import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { toast } from "sonner";
import { Phone, Mail, ArrowRight } from "lucide-react";

export function ConversionFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Solicitação enviada! Entraremos em contato em até 24h.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      employees: "",
      message: ""
    });
  };

  return (
    <div 
      id="contact-section"
      className="py-24 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, rgba(11, 42, 69, 0.97) 0%, rgba(11, 42, 69, 1) 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white leading-tight"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.02em'
            }}
          >
            SUA EMPRESA NÃO PODE
            <br />
            <span style={{ color: '#1F7A5A' }}>SER INEFICIENTE</span>
          </h2>
          
          <p 
            className="text-xl text-white/80 max-w-2xl mx-auto"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            A análise é sem custo. O risco de continuar pagando mais é todo seu.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label 
                  htmlFor="name" 
                  style={{ 
                    fontFamily: 'Lato, sans-serif',
                    color: '#0B2A45',
                    fontWeight: 600
                  }}
                >
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="João Silva"
                  className="border-gray-300 h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label 
                  htmlFor="company" 
                  style={{ 
                    fontFamily: 'Lato, sans-serif',
                    color: '#0B2A45',
                    fontWeight: 600
                  }}
                >
                  Empresa *
                </Label>
                <Input
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  placeholder="Sua Empresa Ltda"
                  className="border-gray-300 h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label 
                  htmlFor="email" 
                  style={{ 
                    fontFamily: 'Lato, sans-serif',
                    color: '#0B2A45',
                    fontWeight: 600
                  }}
                >
                  E-mail Corporativo *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="joao@empresa.com.br"
                  className="border-gray-300 h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label 
                  htmlFor="phone" 
                  style={{ 
                    fontFamily: 'Lato, sans-serif',
                    color: '#0B2A45',
                    fontWeight: 600
                  }}
                >
                  Telefone *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="(11) 98765-4321"
                  className="border-gray-300 h-12 rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label 
                htmlFor="employees" 
                style={{ 
                  fontFamily: 'Lato, sans-serif',
                  color: '#0B2A45',
                  fontWeight: 600
                }}
              >
                Número de Colaboradores *
              </Label>
              <Select
                required
                value={formData.employees}
                onValueChange={(value) => setFormData(prev => ({ ...prev, employees: value }))}
              >
                <SelectTrigger id="employees" className="border-gray-300 h-12 rounded-xl">
                  <SelectValue placeholder="Selecione a faixa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5-20">5-20 funcionários</SelectItem>
                  <SelectItem value="21-50">21-50 funcionários</SelectItem>
                  <SelectItem value="51-100">51-100 funcionários</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label 
                htmlFor="message" 
                style={{ 
                  fontFamily: 'Lato, sans-serif',
                  color: '#0B2A45',
                  fontWeight: 600
                }}
              >
                Mensagem (opcional)
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Conte-nos mais sobre sua situação atual..."
                rows={4}
                className="border-gray-300 rounded-xl"
              />
            </div>

            <Button 
              type="submit" 
              size="lg"
              className="w-full text-lg h-14 rounded-full group shadow-xl"
              style={{ 
                backgroundColor: '#1F7A5A',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700
              }}
            >
              SOLICITAR ANÁLISE ESTRATÉGICA
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div 
                  className="h-10 w-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(31, 122, 90, 0.1)' }}
                >
                  <Phone 
                    className="h-5 w-5"
                    style={{ color: '#1F7A5A' }}
                  />
                </div>
                <span 
                  style={{ 
                    fontFamily: 'Lato, sans-serif',
                    color: '#0B2A45',
                    fontWeight: 600
                  }}
                >
                  (11) 3000-0000
                </span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div 
                  className="h-10 w-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(31, 122, 90, 0.1)' }}
                >
                  <Mail 
                    className="h-5 w-5"
                    style={{ color: '#1F7A5A' }}
                  />
                </div>
                <span 
                  style={{ 
                    fontFamily: 'Lato, sans-serif',
                    color: '#0B2A45',
                    fontWeight: 600
                  }}
                >
                  contato@consultoria.com.br
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
