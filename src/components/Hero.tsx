import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-purple-50 via-purple-100 to-appmax-purple-dark overflow-hidden">
      {/* Grafismo de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border border-primary rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-primary rounded-full animate-pulse delay-700" />
      </div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-semibold text-appmax-purple-dark uppercase tracking-wide">
                Novo: Rastreio Automático
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              PARE DE RESPONDER "ONDE ESTÁ MEU PEDIDO?"
            </h1>
            
            <p className="text-lg md:text-xl text-purple-50 max-w-2xl leading-relaxed">
              O novo Rastreio Automático Appmax assume sua comunicação de pós-venda. 
              Avise seus clientes proativamente sobre cada etapa da entrega direto no 
              WhatsApp e transforme a ansiedade deles em fidelidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-appmax-purple-medium text-white font-semibold px-8 py-6 text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
              >
                CONHEÇA OS PLANOS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-appmax-purple-dark font-semibold px-8 py-6 text-lg rounded-2xl transition-all duration-300"
              >
                VER DEMONSTRAÇÃO
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white" />
                ))}
              </div>
              <div className="text-white">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="font-semibold">Mais de 5.000 empresas</span>
                </div>
                <p className="text-sm text-purple-200">já confiam na Appmax</p>
              </div>
            </div>
          </div>
          
          {/* Mockup */}
          <div className="relative lg:scale-110 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Efeito de glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-400 rounded-[3rem] blur-3xl opacity-30 animate-pulse" />
              
              {/* iPhone Mockup */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-700">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-gradient-to-b from-purple-50 to-white px-6 py-3 flex justify-between items-center">
                    <span className="text-xs font-semibold text-gray-700">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-3 bg-gray-700 rounded-sm" />
                      <div className="w-4 h-3 bg-gray-700 rounded-sm" />
                      <div className="w-4 h-3 bg-gray-700 rounded-sm" />
                    </div>
                  </div>
                  
                  {/* WhatsApp notification */}
                  <div className="p-6 space-y-4">
                    <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl p-6 shadow-lg border border-purple-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <CheckCircle2 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900">Appmax</span>
                            <CheckCircle2 className="h-4 w-4 text-green-500 fill-green-500" />
                          </div>
                          <span className="text-xs text-gray-500">WhatsApp Business</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-700 leading-relaxed">
                        🎉 Olá! Seu pedido <span className="font-bold">#12345</span> foi enviado!
                      </p>
                      <p className="text-sm text-gray-700 mt-2">
                        📦 Código de rastreio: <span className="font-mono font-bold">BR123456789</span>
                      </p>
                      <p className="text-sm text-gray-500 mt-3">
                        Previsão de entrega: 3-5 dias úteis
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-3xl p-6 shadow-lg border border-green-200">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        ✅ Ótimas notícias! Seu pedido está a caminho e chegará hoje.
                      </p>
                      <p className="text-xs text-gray-500 mt-2">Recebido às 14:32</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
