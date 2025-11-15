import { CheckCircle2, Package, Bell, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CheckCircle2,
    title: "Confirmação Imediata",
    description: "Assim que o pedido é aprovado, o cliente recebe automaticamente a confirmação da compra e o código de rastreio via WhatsApp.",
    color: "from-green-500 to-green-600"
  },
  {
    number: "02",
    icon: Package,
    title: "Código de Rastreio Automático",
    description: "O sistema se conecta com a transportadora, puxa o código de rastreio e dispara para o cliente — sem intervenção manual.",
    color: "from-primary to-appmax-purple-medium"
  },
  {
    number: "03",
    icon: Bell,
    title: "Atualizações de Status Proativas",
    description: "A cada mudança importante no status da entrega (em trânsito, saiu para entrega, entregue), notificamos o cliente. Zero ansiedade, máxima confiança.",
    color: "from-blue-500 to-blue-600"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comunicação automática em 3 etapas-chave.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            O sistema funciona de forma totalmente automatizada, cuidando da jornada 
            pós-compra do seu cliente. Simples, eficiente e escalável.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={index} className="relative">
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  {/* Number circle */}
                  <div className="md:col-span-2 flex justify-center md:justify-end">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}>
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-10">
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-3">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connecting arrow */}
                {!isLast && (
                  <div className="hidden md:flex justify-end pr-6 py-4">
                    <ArrowRight className="h-10 w-10 text-primary animate-bounce" style={{ animationDuration: '2s' }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-purple-50 px-8 py-6 rounded-2xl border border-purple-200">
            <p className="text-lg font-medium text-foreground">
              Integração simples. Resultados imediatos.
            </p>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Ative em menos de 24 horas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
