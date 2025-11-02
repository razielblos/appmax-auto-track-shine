import { Shield, CheckCircle2, Award } from "lucide-react";

export const DifferentialSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-appmax-purple-dark via-purple-900 to-purple-950 text-white relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Diferencial Appmax
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                A credibilidade da Appmax validando a sua entrega.
              </h2>
              
              <p className="text-lg md:text-xl text-purple-100 leading-relaxed">
                Não é apenas uma notificação. É uma mensagem vinda de um <strong>canal oficial 
                e verificado da Appmax</strong> no WhatsApp. Isso transmite profissionalismo e 
                aumenta drasticamente a confiança do seu cliente.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <CheckCircle2 className="h-8 w-8 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Canal Verificado</p>
                    <p className="text-sm text-purple-200">Selo verde oficial</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <Shield className="h-8 w-8 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Máxima Confiança</p>
                    <p className="text-sm text-purple-200">Marca Appmax</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual highlight */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary to-appmax-purple-medium rounded-3xl p-12 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl" />
                
                <div className="relative space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl">
                      <CheckCircle2 className="h-12 w-12 text-green-500 fill-green-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">Appmax</p>
                      <p className="text-purple-100 flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4 text-green-400 fill-green-400" />
                        Verificado
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-3">
                    <p className="text-white text-lg leading-relaxed">
                      "Desde que ativamos o Rastreio Automático, as reclamações de 'onde está meu pedido' caíram 85%."
                    </p>
                    <p className="text-purple-200 text-sm">
                      — Loja de eletrônicos, 10k pedidos/mês
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-white mb-1">-85%</p>
                      <p className="text-purple-200 text-sm">Tickets de suporte</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-white mb-1">+92%</p>
                      <p className="text-purple-200 text-sm">Satisfação NPS</p>
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
