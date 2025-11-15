import { MessageSquare, Shield } from "lucide-react";
import solutionVisual from "@/assets/solution-visual.png";

export const SolutionSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-appmax-purple-dark uppercase tracking-wide">
                A Solução
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A inteligência que aprova a sua venda, agora garante a entrega.
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Com o Rastreio Automático Appmax, antes mesmo do cliente perguntar, ele já sabe 
              exatamente onde está o pedido dele. Assim que a transportadora atualiza o status, 
              a Appmax envia automaticamente uma mensagem no WhatsApp do cliente. Sem esforço. Sem dúvidas.
            </p>
          </div>

          {/* Visual and Benefits */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Visual */}
            <div className="relative">
              <img 
                src={solutionVisual} 
                alt="Delivery and WhatsApp automation" 
                className="w-full max-w-lg mx-auto"
              />
            </div>

            {/* Right: Benefits */}
            <div className="space-y-8">
              <div className="bg-purple-50 rounded-3xl p-8 border border-purple-200">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-appmax-purple-medium flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-7 w-7 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Comunicação proativa em cada etapa
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Notificações automáticas via WhatsApp nos momentos-chave: confirmação do pedido, 
                      envio do código de rastreio e atualizações de status até a entrega final.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-3xl p-8 border border-purple-200">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Aumente a confiança
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comunicação transparente que fideliza e transforma o pós-venda em diferencial competitivo.
                    </p>
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
