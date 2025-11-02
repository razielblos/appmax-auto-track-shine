import { Heart, DollarSign, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Aumente sua Retenção (LTV)",
    description: "Clientes bem informados compram mais vezes. Uma experiência de entrega profissional aumenta a confiança e fideliza. Resultado direto no lifetime value.",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    icon: DollarSign,
    title: "Reduza seu Custo Operacional",
    description: "Menos tickets, menos reembolsos, menos trabalho manual. O ROI é imediato: economize horas de suporte e reinvista na operação que realmente importa.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: TrendingUp,
    title: "Prepare-se para Picos de Vendas",
    description: "Black Friday, sazonalidades, campanhas grandes. Quando o volume explode, o Rastreio Automático escala junto — sem contratar mais gente no suporte.",
    gradient: "from-blue-500 to-indigo-600"
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-100 via-purple-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-appmax-purple-medium/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Feito para quem foca em performance, não em operação.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Rastreio Automático não é uma feature. É uma vantagem competitiva 
            que libera recursos e melhora seus números onde importa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Stats section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-gray-200">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-5xl font-bold text-primary mb-2">-80%</p>
                <p className="text-muted-foreground text-lg">Tickets de "cadê meu pedido?"</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary mb-2">+45%</p>
                <p className="text-muted-foreground text-lg">Taxa de recompra em 90 dias</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary mb-2">24h</p>
                <p className="text-muted-foreground text-lg">Para começar a usar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
