"use client"; // Removemos as aspas extras

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Usando ícones bonitos do Lucide

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Container principal (z-50 garante que fica acima de tudo) */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        
        {/* A "Pílula" da Navbar */}
        <nav className="bg-isabelline/95 backdrop-blur-md text-black shadow-lg rounded-4xl px-6 py-3 w-full max-w-5xl flex items-center justify-between transition-all duration-300 border border-white/20">
          
          {/* Logo + Nome (Com efeito de revelar no desktop) */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
            onClick={closeMenu}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 z-10 shrink-0">
              <Image 
                src="/assets/logo.svg" 
                alt="Logo Miguel Lima" 
                fill 
                className="object-contain" 
              />
            </div>
            
            <span className="font-k2d text-xl md:text-2xl font-light tracking-tight whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out
              /* Mobile: Sempre visível */
              w-auto opacity-100
              /* Desktop: Escondido por padrão, aparece no hover do grupo */
              md:w-0 md:opacity-0 md:group-hover:w-40 md:group-hover:opacity-100"
            >
              Miguel Lima
            </span>
          </Link>

          {/* Links - Desktop (Hidden no Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          {/* Botão Hambúrguer - Mobile (Hidden no Desktop) */}
          <button 
            className="md:hidden p-2 text-caribbean focus:outline-none hover:bg-black/5 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </nav>
      </div>

      {/* --- MENU MOBILE (OVERLAY) --- */}
      {/* Fundo escuro atrás */}
      <div 
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeMenu} // Fecha se clicar fora
      />

      {/* O Menu em si (Desliza de cima) */}
      <div 
        className={`fixed top-24 left-4 right-4 z-50 bg-isabelline rounded-3xl shadow-2xl p-6 flex flex-col gap-2 md:hidden transition-all duration-300 origin-top
          ${isMenuOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-4 pointer-events-none"}`}
      >
         <NavLinks mobile onClick={closeMenu} />
      </div>
    </>
  );
}

// Componente auxiliar de Links
function NavLinks({ mobile = false, onClick }: { mobile?: boolean, onClick?: () => void }) {
  const links = [
    { name: "Sobre", href: "#sobre" },
    { name: "Projetos", href: "#projetos" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Contatos", href: "#contatos" },
  ];

   return (
    <>
      {links.map((link) => (
        <a // <--- Trocamos de Link para 'a'
          key={link.name} 
          href={link.href} 
          onClick={onClick}
          className={`
            font-medium font-k2d transition-colors duration-200 cursor-pointer
            ${mobile 
              ? "text-2xl text-back py-4 border-b border-caribbean/10 last:border-0 hover:pl-2 active:bg-caribbean/5 rounded-lg px-2" 
              : "text-paragrafo text-black hover:text-caribbean "
            }
          `}
        >
          {link.name}
        </a> // <--- Fechamento da tag 'a'
      ))}
    </>
  );
}