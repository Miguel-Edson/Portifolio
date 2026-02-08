"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#105D6A] text-white py-12 md:py-16">
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4">
        
        {/* 1. Logo (Alinhado à ESQUERDA no PC) */}
        <div className="flex-1 flex justify-center md:justify-start w-full md:w-auto">
          <div className="relative w-40 h-40 md:w-48 md:h-48 hover:scale-105 transition-transform duration-300">
            <Image 
              src="/assets/logo.svg" 
              alt="Logo Miguel Lima" 
              fill 
              className="object-contain"
            />
          </div>
        </div>

        {/* 2. Coluna Sessões (CENTRALIZADO no PC) */}
        <div className="flex-1 flex flex-col items-center gap-4 text-center">
          <h3 className="font-k2d text-2xl md:text-3xl font-bold mb-2">Sessões</h3>
          <nav className="flex flex-col gap-3 text-base md:text-lg text-gray-200">
            {["home", "sobre", "projetos", "habilidades", "contatos"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)} 
                className="hover:text-orange-peel hover:scale-110 transition-all capitalize"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* 3. Coluna Contatos (Alinhado à DIREITA no PC) */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-4 text-center md:text-right">
          <h3 className="font-k2d text-2xl md:text-3xl font-bold mb-2">Contatos</h3>
          <nav className="flex flex-col gap-3 text-base md:text-lg text-gray-200">
            <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-peel hover:-translate-x-1 transition-all justify-center md:justify-end">
              LinkedIn <FaLinkedin />
            </a>
            <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-peel hover:-translate-x-1 transition-all justify-center md:justify-end">
              GitHub <FaGithub />
            </a>
            <a href="https://instagram.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-peel hover:-translate-x-1 transition-all justify-center md:justify-end">
              Instagram <FaInstagram />
            </a>
            <a href="https://wa.me/5588999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-peel hover:-translate-x-1 transition-all justify-center md:justify-end">
              WhatsApp <FaWhatsapp />
            </a>
          </nav>
        </div>

      </div>

      {/* 4. Copyright */}
      <div className="mt-12 md:mt-16 pt-8 border-t border-white/20 text-center text-sm opacity-80 font-inter px-4">
        © {new Date().getFullYear()} Direitos Reservados Miguel Lima.
      </div>

    </footer>
  );
}