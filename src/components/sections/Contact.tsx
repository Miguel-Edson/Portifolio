"use client";

import { useState } from "react";
// Importando ícones REAIS e OFICIAIS das marcas
import { 
  FaInstagram, 
  FaWhatsapp, 
  FaBehance, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, // E-mail icon
  FaCheck,    // Check icon
  FaRegCopy   // Copy icon
} from "react-icons/fa"; // Usando o pacote FontAwesome 5 (Padrão de mercado)

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const myEmail = "seu.email@exemplo.com"; // <--- SEU EMAIL
  const myNumber = "5588999999999"; // <--- SEU WHATSAPP (Apenas números)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      name: "Instagram",
      // Ícones do React-Icons aceitam 'size' e 'className' nativamente
      icon: <FaInstagram size={28} />,
      action: "link",
      url: "https://instagram.com/seu-usuario",
      color: "hover:bg-gradient-to-tr hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] hover:text-white hover:border-transparent",
      desc: "Bastidores & Lifestyle"
    },
    {
      name: "E-mail",
      icon: copied ? <FaCheck size={28} /> : <FaEnvelope size={28} />,
      action: "copy",
      url: "#",
      color: "hover:bg-caribbean hover:text-white hover:border-caribbean",
      desc: copied ? "Copiado!" : "Clique para copiar"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={28} />,
      action: "link",
      url: `https://wa.me/${myNumber}`,
      color: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]",
      desc: "Chat rápido"
    },
    {
      name: "Behance",
      icon: <FaBehance size={28} />,
      action: "link",
      url: "https://behance.net/seu-usuario",
      color: "hover:bg-[#1769ff] hover:text-white hover:border-[#1769ff]",
      desc: "Portfólio de Design"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={28} />,
      action: "link",
      url: "https://linkedin.com/in/seu-usuario",
      color: "hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]",
      desc: "Conexão Profissional"
    },
    {
      name: "GitHub",
      icon: <FaGithub size={28} />,
      action: "link",
      url: "https://github.com/seu-usuario",
      color: "hover:bg-[#181717] hover:text-white hover:border-[#181717]",
      desc: "Repositórios de Código"
    },
  ];

  return (
    <section id="contatos" className="w-full py-20 px-6 bg-isabelline flex flex-col items-center">
      
      {/* Container Principal */}
      <div className="w-full max-w-6xl">
        
        {/* Cabeçalho */}
        <div className="mb-12 text-left">
          <span className="text-subtitulo text-caribbean block mb-2">
            / Contato
          </span>
          <h2 className="text-display text-caribbean mb-4">
            Vamos conversar?
          </h2>
          <p className="text-paragrafo text-gray-600 max-w-5xl">
            Sinta-se à vontade para entrar em contato através das redes abaixo. Estou sempre disponível para novos projetos e parcerias.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {contacts.map((item) => {
            // Lógica para o botão de Copiar (Email)
            if (item.action === "copy") {
              return (
                <button
                  key={item.name}
                  onClick={handleCopyEmail}
                  className={`
                    group flex items-center gap-4 p-6 
                    bg-white rounded-2xl shadow-md border border-transparent transition-all duration-300
                    ${item.color} hover:-translate-y-1 hover:shadow-xl text-left w-full
                  `}
                >
                  <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-white/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-inherit leading-none mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs font-medium opacity-60 group-hover:opacity-90 flex items-center gap-1">
                      {item.desc} {item.name === "E-mail" && !copied && <FaRegCopy size={12}/>}
                    </p>
                  </div>
                </button>
              );
            }

            // Lógica para Links Normais
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group flex items-center gap-4 p-6 
                  bg-white rounded-2xl shadow-md border border-transparent transition-all duration-300
                  ${item.color} hover:-translate-y-1 hover:shadow-xl
                `}
              >
                <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-white/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 group-hover:text-inherit leading-none mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs font-medium opacity-60 group-hover:opacity-90">
                    {item.desc}
                  </p>
                </div>
              </a>
            );
          })}

        </div>

      </div>
    </section>
  );
}