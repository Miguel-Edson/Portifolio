"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  
  // Função para scroll suave
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#105D6A] text-white py-16">
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        
        {/* 1. Logo (Tartaruga) */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="relative w-48 h-48 hover:scale-105 transition-transform duration-300">
            {/* Certifique-se que o nome do arquivo da logo está correto na pasta public/assets */}
            <Image 
              src="/assets/Logo.svg" 
              alt="Logo Miguel Lima" 
              fill 
              className="object-contain"
            />
          </div>
        </div>

        {/* 2. Coluna Sessões (Navegação) */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4">
          <h3 className="font-k2d text-3xl font-bold mb-2">Sessões</h3>
          <nav className="flex flex-col gap-3 text-lg text-gray-200">
            <button onClick={() => scrollToSection("home")} className="hover:text-orange-peel hover:translate-x-1 transition-all text-left">
              Home
            </button>
            <button onClick={() => scrollToSection("sobre")} className="hover:text-orange-peel hover:translate-x-1 transition-all text-left">
              Sobre
            </button>
            <button onClick={() => scrollToSection("projetos")} className="hover:text-orange-peel hover:translate-x-1 transition-all text-left">
              Projetos
            </button>
            <button onClick={() => scrollToSection("habilidades")} className="hover:text-orange-peel hover:translate-x-1 transition-all text-left">
              Habilidades
            </button>
            <button onClick={() => scrollToSection("contatos")} className="hover:text-orange-peel hover:translate-x-1 transition-all text-left">
              Contatos
            </button>
          </nav>
        </div>

        {/* 3. Coluna Contatos (Links Externos) */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4">
          <h3 className="font-k2d text-3xl font-bold mb-2">Contatos</h3>
          <nav className="flex flex-col gap-3 text-lg text-gray-200">
            <a 
              href="https://linkedin.com/in/seu-usuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange-peel hover:translate-x-1 transition-all"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a 
              href="https://github.com/seu-usuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange-peel hover:translate-x-1 transition-all"
            >
              <FaGithub /> GitHub
            </a>
            <a 
              href="https://instagram.com/seu-usuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange-peel hover:translate-x-1 transition-all"
            >
              <FaInstagram /> Instagram
            </a>
            <a 
              href="https://wa.me/5588999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange-peel hover:translate-x-1 transition-all"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </nav>
        </div>

      </div>

      {/* 4. Copyright */}
      <div className="mt-16 pt-8 border-t border-white/20 text-center text-sm opacity-80 font-inter">
        © {new Date().getFullYear()} Direitos Reservados Miguel Lima
      </div>

    </footer>
  );
}