import { CheckCircle2, Package, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CheckCircle2,
    title: "Confirmação Imediata",
    description: "Assim que o pedido é aprovado, o cliente recebe a primeira mensagem confirmando a compra com todos os detalhes. Transparência desde o primeiro momento.",
    color: "from-green-500 to-green-600"
  },
  {
    number: "02",
    icon: Package,
    title: "Envio do Código de Rastreio",
    description: "Quando o produto é despachado, enviamos automaticamente o código de rastreio completo via WhatsApp. Cliente informado, cliente tranquilo.",
    color: "from-primary to-appmax-purple-medium"
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Atualizações de Status Proativas",
    description: "A cada mudança importante no status da entrega (em trânsito, saiu para entrega, entregue), notificamos o cliente. Zero ansiedade, máxima confiança.",
    color: "from-blue-500 to-blue-600"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comunicação automática em 3 etapas-chave.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            O sistema funciona de forma totalmente automatizada, cuidando da jornada 
            pós-compra do seu cliente sem precisar da sua intervenção.
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
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}>
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-10">
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="h-8 w-8 text-white" />
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
                    <ArrowRight className="h-12 w-12 text-primary animate-bounce" style={{ animationDuration: '2s' }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Integração simples. Resultados imediatos.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">Pronto em menos de 24 horas</span>
          </div>
        </div>
      </div>
    </section>
  );
};
