import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown, Building2 } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    subtitle: "Ideal para operações em início de escala.",
    price: "297",
    icon: Zap,
    features: [
      "Até 1.000 notificações/mês",
      "3 etapas de comunicação",
      "WhatsApp oficial Appmax",
      "Painel de métricas básico",
      "Suporte por e-mail"
    ],
    cta: "CONTRATAR AGORA",
    popular: false
  },
  {
    name: "Performance",
    subtitle: "Para negócios que buscam máxima eficiência.",
    price: "497",
    icon: Sparkles,
    features: [
      "Até 5.000 notificações/mês",
      "3 etapas de comunicação",
      "WhatsApp oficial Appmax",
      "Dashboard avançado + exportação",
      "Suporte prioritário (chat + e-mail)",
      "Personalização de mensagens",
      "API de integração"
    ],
    cta: "CONTRATAR AGORA",
    popular: true
  },
  {
    name: "Pro",
    subtitle: "Para operações de alto volume focadas em LTV.",
    price: "997",
    icon: Crown,
    features: [
      "Até 15.000 notificações/mês",
      "Todas as etapas + atualizações extras",
      "WhatsApp oficial Appmax",
      "Analytics completo + BI",
      "Suporte VIP (24/7)",
      "Personalização total",
      "API dedicada",
      "Gerente de sucesso"
    ],
    cta: "CONTRATAR AGORA",
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Planos flexíveis que escalam com o seu negócio.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Escolha o plano ideal para o seu volume de vendas. Sem surpresas, 
            sem custos ocultos. Cancele quando quiser.
          </p>
        </div>
        
        {/* Main plans grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  plan.popular 
                    ? 'border-4 border-primary ring-4 ring-primary/20' 
                    : 'border-2 border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-appmax-purple-medium text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                      Mais Popular
                    </div>
                  </div>
                )}
                
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                    plan.popular 
                      ? 'from-primary to-appmax-purple-medium' 
                      : 'from-gray-600 to-gray-700'
                  } flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Plan name and subtitle */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {plan.subtitle}
                    </p>
                  </div>
                  
                  {/* Price */}
                  <div className="py-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-foreground">R$ {plan.price}</span>
                      <span className="text-muted-foreground">/mês</span>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <Button 
                    className={`w-full py-6 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                      plan.popular
                        ? 'bg-primary hover:bg-appmax-purple-medium text-white shadow-xl hover:shadow-2xl hover:scale-105'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                  
                  {/* Features */}
                  <div className="pt-6 space-y-4 border-t border-gray-200">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Enterprise plan */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-appmax-purple-dark to-purple-950 rounded-3xl p-12 shadow-2xl border-2 border-purple-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Plano Enterprise
                  </h3>
                  <p className="text-purple-100 text-lg leading-relaxed">
                    Para operações de alto volume com necessidades específicas. 
                    Notificações ilimitadas, SLA garantido e infraestrutura dedicada.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
                    Notificações ilimitadas
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
                    SLA 99.9%
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
                    Infraestrutura dedicada
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
                    Onboarding premium
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:items-end gap-6">
                <div className="text-center md:text-right">
                  <p className="text-purple-200 text-lg mb-2">A partir de</p>
                  <p className="text-5xl font-bold text-white mb-1">R$ 2.500</p>
                  <p className="text-purple-200">/mês</p>
                </div>
                
                <Button 
                  size="lg"
                  className="bg-white hover:bg-purple-50 text-appmax-purple-dark font-semibold px-8 py-6 text-lg rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
                >
                  FALAR COM UM ESPECIALISTA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
