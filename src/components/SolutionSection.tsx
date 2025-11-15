import { ArrowRight, Sparkles, Zap } from "lucide-react";

export const SolutionSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-100 via-purple-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-appmax-purple-medium/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-appmax-purple-dark uppercase tracking-wide">
                A Solução
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Seja proativo. Entregue profissionalismo.
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Com o Rastreio Automático Appmax, sua marca toma a iniciativa. 
              Antes mesmo do cliente perguntar, ele já sabe exatamente onde está o pedido dele.
            </p>
          </div>
          
          {/* Flow visualization */}
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-200 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-appmax-purple-medium flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">Automação Total</h3>
              <p className="text-muted-foreground text-sm">Zero intervenção manual necessária</p>
            </div>
            
            <div className="hidden md:flex justify-center">
              <ArrowRight className="h-12 w-12 text-primary animate-pulse" />
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-200 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">Experiência Premium</h3>
              <p className="text-muted-foreground text-sm">Cliente informado e satisfeito</p>
            </div>
          </div>
          
          {/* Value propositions */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                Comunicação proativa em cada etapa
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-13">
                Notificações automáticas via WhatsApp nos momentos-chave: confirmação do pedido, 
                envio do código de rastreio e atualizações de status até a entrega final.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
                Libere seu time para crescer
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-13">
                Reduza até 80% das mensagens repetitivas no seu suporte. Seu time foca em 
                resolver problemas reais e expandir o negócio, não em rastrear pacotes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
