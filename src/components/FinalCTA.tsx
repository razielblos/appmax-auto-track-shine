import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-appmax-purple-dark via-purple-900 to-purple-950 text-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 border-2 border-primary/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-primary/20 rounded-full animate-pulse delay-700" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Transforme seu pós-venda hoje
            </span>
          </div>
          
          {/* Main headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            TRANSFORME SEU PÓS-VENDA NO SEU NOVO MOTOR DE VENDAS.
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
            Pare de perder tempo com operação manual. Ative o Rastreio Automático 
            e foque em escalar seu e-commerce com confiança e profissionalismo.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button 
              size="lg"
              className="bg-white hover:bg-purple-50 text-appmax-purple-dark font-bold px-12 py-8 text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
            >
              QUERO FIDELIZAR MEUS CLIENTES
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-3 border-white text-white hover:bg-white hover:text-appmax-purple-dark font-bold px-12 py-8 text-xl rounded-2xl transition-all duration-300 hover:scale-105"
            >
              FALAR COM ESPECIALISTA
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="pt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-purple-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-bold text-white">Ativação em 24h</p>
                <p className="text-sm">Setup rápido e simples</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-bold text-white">Sem contrato de fidelidade</p>
                <p className="text-sm">Cancele quando quiser</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-bold text-white">Suporte especializado</p>
                <p className="text-sm">Time Appmax com você</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
