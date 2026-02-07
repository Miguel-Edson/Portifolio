"use client"; // Necessário para usar 'state' (o menu mobile)

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Container principal que centraliza a navbar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        
        {/* A "Pílula" da Navbar */}
        <nav className="bg-isabelline/95 backdrop-blur-sm text-black shadow-lg rounded-3xl px-8 py-4 w-full max-w-6xl flex items-center justify-between transition-all duration-300">
          
          {/* Logo / Nome */}
          <Link 
            href="/" 
            // Mudança 1: gap-0 por padrão, gap-2 aparece só no hover do desktop
            className="flex items-center gap-0 md:group-hover:gap-2 transition-all duration-500 group"
          >
            
            {/* Logo Oficial */}
            {/* Adicionei 'z-10' para garantir que a logo fique "na frente" do texto que vai sair */}
            <div className="relative w-16 h-11 z-10">
              <Image 
                src="/assets/logo.svg" 
                alt="Logo Miguel Lima" 
                fill 
                className="object-contain" 
              />
            </div>
            
            {/* O Texto com Animação */}
            <span className=" font-light font-k2d text-2xl tracking-tight whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out
              /* Estilos Desktop Inicial (Escondido) */
              md:max-w-0 md:opacity-0 
              /* Estilos Desktop Hover (Aparecendo) */
              md:group-hover:max-w-50 md:group-hover:opacity-100
              /* Estilos Mobile (Sempre visível, ignorando as regras acima) */
              max-w-full opacity-100"
            >
              Miguel Lima
            </span>
          </Link>

          {/* Links - Desktop (Escondido no Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          {/* Botão Hambúrguer - Mobile (Apenas telas pequenas) */}
          <button 
            className="md:hidden p-2 text-caribbean focus:outline-none"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? (
              // Ícone X (Fechar)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              // Ícone Menu (Hambúrguer)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </nav>
      </div>

      {/* Menu Mobile Expandido (Fora da pílula para não deformá-la) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden flex flex-col items-center justify-center animate-in fade-in zoom-in duration-200">
          <div className="bg-isabelline p-8 rounded-2xl shadow-2xl flex flex-col gap-6 text-center w-[90%] max-w-sm">
             <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
             <button onClick={toggleMenu} className="mt-4 text-sm text-black underline">Fechar</button>
          </div>
        </div>
      )}
    </>
  );
}

// Componente auxiliar para não repetir os links
function NavLinks({ mobile = false, onClick }: { mobile?: boolean, onClick?: () => void }) {
  const links = [
    { name: "Sobre", href: "#sobre" },
    { name: "Projetos", href: "#projetos" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Contatos", href: "#contatos" },
  ];

  const baseClass = "text-paragrafo font-medium hover:text-caribbean transition-colors duration-200";
  const mobileClass = "text-xl py-2 border-b border-gray-200 w-full";

  return (
    <>
      {links.map((link) => (
        <Link 
          key={link.name} 
          href={link.href} 
          className={`${baseClass} ${mobile ? mobileClass : ''}`}
          onClick={onClick}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}