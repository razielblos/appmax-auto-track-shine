import { Button } from "@/components/ui/button";
import { Play, CheckCircle2 } from "lucide-react";
import mockup from "@/assets/mockup.png";
import badges from "@/assets/badges.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-background to-purple-100">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-appmax-purple-medium/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-appmax-purple-dark">
                ✨ Confira a nova funcionalidade
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Mensagens Automatizadas de Rastreio via WhatsApp
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              O Rastreio Automático Appmax antecipa dúvidas, envia atualizações automáticas no WhatsApp 
              e mostra ao cliente que sua marca se preocupa com cada detalhe da entrega. Mais eficiência 
              para o seu time, mais confiança para o seu cliente.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg rounded-xl">
                CONHEÇA OS PLANOS
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl border-2">
                <Play className="mr-2 h-5 w-5" />
                VER DEMONSTRAÇÃO
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 pt-4">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <p className="text-muted-foreground">
                <span className="font-bold text-foreground">Mais de 5.000 empresas</span> já confiam na Appmax
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:pl-12">
            <div className="relative">
              <img 
                src={mockup} 
                alt="WhatsApp tracking messages"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Platform Badges */}
        <div className="mt-16 flex justify-center">
          <img src={badges} alt="Platform badges" className="h-12 opacity-70" />
        </div>
      </div>
    </section>
  );
};
