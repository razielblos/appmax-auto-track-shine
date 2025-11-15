import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, XCircle, Headphones } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section 
      className="py-20 lg:py-32 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #281E49 0%, #45337C 50%, #553999 100%)',
      }}
    >
      {/* Decorative stars pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
            <span className="text-sm font-semibold uppercase tracking-wide">
              Transforme seu pós-venda hoje
            </span>
          </div>
          
          {/* Main headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Feito para quem foca em performance.
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
            Rastreio Automático não é uma feature. É uma vantagem competitiva 
            que libera recursos e melhora seus números onde importa.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button 
              size="lg"
              className="bg-white hover:bg-purple-50 text-appmax-purple-dark font-bold px-12 py-8 text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
            >
              QUERO AUTOMATIZAR MEU RASTREIO
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-appmax-purple-dark font-bold px-12 py-8 text-xl rounded-2xl transition-all duration-300 hover:scale-105"
            >
              FALAR COM ESPECIALISTA
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="pt-12 grid md:grid-cols-3 gap-8 text-purple-200">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <p className="font-bold text-white text-lg">Ativação em 24h</p>
                <p className="text-sm">Setup rápido e simples</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <XCircle className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <p className="font-bold text-white text-lg">Sem contrato de fidelidade</p>
                <p className="text-sm">Cancele quando quiser</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <p className="font-bold text-white text-lg">Suporte especializado</p>
                <p className="text-sm">Time Appmax com você</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
