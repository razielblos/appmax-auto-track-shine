import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import pciLogo from "@/assets/pci-compliant.png";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-purple-950 text-purple-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img src={logo} alt="Appmax" className="h-8 brightness-0 invert" />
            <p className="text-sm text-purple-200">
              A inteligência que aprova suas vendas e garante entregas com excelência.
            </p>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="font-bold text-white mb-4">Soluções</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-primary font-semibold hover:text-primary/80 transition-colors">
                  Rastreio Automático
                </a>
              </li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">App Pag</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Recuperação de Vendas</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">App Checkout</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Link de Pagamentos</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">PaaS</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Reseller</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Por que Appmax</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Carreiras</a></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-bold text-white mb-4">Suporte</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        {/* Compliance and Social */}
        <div className="border-t border-purple-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <img src={pciLogo} alt="PCI DSS Compliant" className="h-12" />
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-xs text-purple-300 space-y-2">
            <p>
              © 2025 Appmax. Todos os direitos reservados. CNPJ: 29.217.416/0001-51
            </p>
            <p>
              Rua Comendador Miguel Calfat, 128 - Vila Nova Conceição, São Paulo - SP, 04537-080
            </p>
            <p className="text-purple-400">
              A Appmax não é uma instituição financeira e não realiza operações de crédito diretamente. 
              A Appmax é um correspondente bancário nos termos da Resolução CMN nº 3.954/2011.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
