import { DollarSign, TrendingDown, UserX } from "lucide-react";

const painPoints = [
  {
    icon: DollarSign,
    title: "Alto Custo de Suporte",
    description: "Sua equipe perde horas respondendo às mesmas perguntas sobre status de pedidos. Cada mensagem custa tempo e dinheiro que poderiam ser investidos em crescimento."
  },
  {
    icon: UserX,
    title: "Perda de Confiança",
    description: "Clientes ansiosos viram clientes desconfiados. A falta de comunicação proativa gera insegurança e aumenta drasticamente o volume de reclamações e pedidos de reembolso."
  },
  {
    icon: TrendingDown,
    title: "Baixa Fidelização (LTV)",
    description: "Sem acompanhamento profissional da entrega, você perde a chance de transformar ansiedade em encantamento. Resultado? Cliente não volta e lifetime value despenca."
  }
];

export const PainSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Seu cliente ansioso, seu suporte sobrecarregado.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Todo e-commerce que escala enfrenta o mesmo gargalo: a ansiedade do cliente 
            sobre "onde está meu pedido?" vira um custo operacional crescente e invisível.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {point.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
