"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react"; // Ícones do Modal

// 1. Definição do Tipo de Projeto
type Project = {
  id: number;
  title: string;
  category: string;
  role: string;
  skills: string[];
  description: string;
  fullDescription: string;
  image: string;
  link: string;
  bgColor?: string; 
};

// 2. Seus Dados
const projects: Project[] = [
  {
    id: 1,
    title: "PGRAFIT: A Graph Visualization",
    category: "Bolsa de Pesquisa",
    role: "Dev Full Stack",
    skills: ["React", "React Sigma","Js","HTML","CSS"],
    description: "P-GRAFIT: Plataforma de visualização de grafos de classificação para sistemas de Internet das Coisas Médicas",
    fullDescription: "A plataforma P-GRAFIT que permite criar, receber e visualizar grafos de classificação para sistemas IoHT, demonstrando a comunicação e relação entre sensores, modelos de classificação e as potenciais situações de riscos à saúde.",
    image: "/assets/pgrafiti.svg",
    link: "https://github.com/lars-brg/PGRAFIT---A-Graph-Visualization",
  },
  {
    id: 2,
    title: "PET - Saúde",
    category: "Design",
    role: "UI Designer",
    skills: ["Figma", "Photoshop"],
    description: "Evento de conexão em tecnologia",
    fullDescription: "Encontro regional de tecnologia e inovação, reunindo estudantes, profissionais e entusiastas para compartilhar conhecimento, ampliar o networking e fortalecer o ecossistema tecnológico.",
    image: "/assets/pet.svg",
    link: "https://www.behance.net/gallery/241439083/Conexao-Ceara",
  },
  {
    id: 3,
    title: "Conexão Ceará",
    category: "Design",
    role: "UI Designer",
    skills: ["Figma", "Photoshop"],
    description: "Evento de conexão em tecnologia",
    fullDescription: "Encontro regional de tecnologia e inovação, reunindo estudantes, profissionais e entusiastas para compartilhar conhecimento, ampliar o networking e fortalecer o ecossistema tecnológico.",
    image: "/assets/conexao.svg",
    link: "https://www.behance.net/gallery/241439083/Conexao-Ceara",
  },
  {
    id: 4,
    title: "MyRide",
    category: "Mobile App",
    role: "Full Stack Mobile Dev",
    skills: ["NextJs", "Docker", "Figma", "HTML", "CSS", "TypeScript"],
    description: "Aplicativo de caronas",
    fullDescription: "O MyRide mapeia a jornada passo a passo de sua comunidade — desde a descoberta da carona ideal até a publicação de ofertas e a reserva de assentos. Ele visualiza a interação fluida entre motoristas e passageiros, garantindo um caminho intuitivo desde o cadastro até o destino final.",
    image: "/assets/myride.png",
    link: "https://www.behance.net/gallery/241455739/MyRIde",
  },
  {
    id: 5,
    title: "Landing Page",
    category: "UI/UX",
    role: "Product Designer",
    skills: ["Figma", "Prototyping", "User Research"],
    description: "Interface moderna para divulgação de trabalho e captação de novos clientes.",
    fullDescription: "Estudo de caso focado na experiência do usuário para agendamento de pacotes turísticos, com foco em acessibilidade e design visual imersivo.",
    image: "/assets/travel.png",
    link: "https://dribbble.com/seuuser",
  },
  {
    id: 6,
    title: "ArduLab",
    category: "Projeto de Extensão - UFC",
    role: "Co-Founder & Lead Instructor",
    skills: ["C++", "Arduino", "Comunicação", "Eletrônicos", "Esp-32"],
    description: "Projeto de extensão de robótica.",
    fullDescription: "Projeto educacional da UFC que visa democratizar o ensino de robótica e programação para escolas públicas, utilizando hardware de baixo custo.",
    image: "/assets/ardulab.png",
    link: "https://www.instagram.com/ardulab.ufc/",
  },
  {
    id: 7,
    title: "Stage Up",
    category: "Dev",
    role: "Dev",
    skills: ["Node.js", "Figma", "HTML", "CSS", "TypeScript"],
    description: "Teste de paginação.",
    fullDescription: "A Stage é uma plataforma projetada para facilitar processos de recrutamento de estagiários e gestão de candidatos para empresas, e processos seletivos e oportunidades de experiência profissional para estudantes universitários. O sistema permite que empresas publiquem vagas, analisem candidaturas e acompanhem o progresso de candidaturas, enquanto candidatos podem explorar oportunidades, enviar currículos e acompanhar o status de suas incrições.",
    image: "/assets/stageup.png",
    link: "https://github.com/lars-brg/stageUP",
  },
  {
    id: 8,
    title: "CID",
    category: "Front-End",
    role: "Dev and Designer",
    skills: ["Node.js", "Figma", "HTML", "CSS", "TypeScript"],
    description: "Teste de paginação.",
    fullDescription: "A momentus é uma plataforma intuitiva projetada para facilitar a organização e gerenciamento de eventos de médio e pequeno porte. O sistema permite que organizadores criem, administrem e divulguem eventos, enquanto os participantes podem explorar opções, confirmar presença e interagir com as programações disponíveis.",
    image: "/assets/cid-robo.png",
    link: "https://github.com/pab-h/CID",
  },
  {
    id: 9,
    title: "Momentus",
    category: "Front-End",
    role: "Dev and Designer",
    skills: ["Node.js", "Figma", "HTML", "CSS", "TypeScript"],
    description: "Teste de paginação.",
    fullDescription: "A momentus é uma plataforma intuitiva projetada para facilitar a organização e gerenciamento de eventos de médio e pequeno porte. O sistema permite que organizadores criem, administrem e divulguem eventos, enquanto os participantes podem explorar opções, confirmar presença e interagir com as programações disponíveis.",
    image: "/assets/momentus.png",
    link: "https://github.com/momentus-sa/momentus?tab=readme-ov-file",
  },
  {
    id: 10,
    title: "Processamento Digital de Sinais",
    category: "Front-End",
    role: "Dev and Designer",
    skills: ["Node.js", "Figma", "HTML", "CSS", "TypeScript"],
    description: "Teste de paginação.",
    fullDescription: "A momentus é uma plataforma intuitiva projetada para facilitar a organização e gerenciamento de eventos de médio e pequeno porte. O sistema permite que organizadores criem, administrem e divulguem eventos, enquanto os participantes podem explorar opções, confirmar presença e interagir com as programações disponíveis.",
    image: "/assets/pds.svg",
    link: "https://github.com/momentus-sa/momentus?tab=readme-ov-file",
  },
];

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  
  const visibleProjects = projects.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      setActiveId(projects[newPage * itemsPerPage].id);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      setActiveId(projects[newPage * itemsPerPage].id);
    }
  };

  return (
    <section id="projetos" className="w-full py-20 bg-isabelline flex flex-col items-center justify-center overflow-hidden relative">
      
      {/* --- Header da Seção --- */}
      <div className="w-full max-w-7xl px-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end">
        <div className="mb-4 md:mb-0">
          <span className="text-complemento text-caribbean block mb-2">/ Desenvolvimento</span>
          <h2 className="text-titulo text-caribbean font-medium">Projetos</h2>
        </div>
      </div>

      {/* Setas de Navegação (Desktop apenas - ou ajuste se quiser no mobile também) */}
      <div className="w-full max-w-7xl justify-end flex px-6 pb-4">
        {totalPages > 1 && (
          <div className="flex gap-2">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 0} 
              className="p-3 rounded-full border border-caribbean text-caribbean disabled:opacity-30 hover:bg-caribbean hover:text-white transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages - 1} 
              className="p-3 rounded-full border border-caribbean text-caribbean disabled:opacity-30 hover:bg-caribbean hover:text-white transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        )}
      </div>

      {/* --- Lista de Cards (Responsiva) --- */}
      {/* Mobile: flex-col, h-auto, gap-6 */}
      {/* Desktop: md:flex-row, md:h-[500px], md:gap-4 */}
      <div className="w-full max-w-7xl px-4 flex flex-col md:flex-row gap-6 md:gap-4 h-auto md:h-125 transition-all duration-500">
        
        {visibleProjects.map((project) => {
          const isActive = activeId === project.id;
          
          return (
            <div
              key={project.id}
              onClick={() => setActiveId(project.id)}
              className={`
                relative rounded-3xl md:rounded-4xl overflow-hidden transition-all duration-700 ease-in-out shadow-xl 
                /* Mobile: Altura fixa, largura total */
                w-full h-100
                /* Desktop: Largura flexível (Accordion) */
                md:h-full md:w-auto
                ${isActive ? "md:flex-3" : "md:flex-1 md:hover:flex-[1.2]"}
              `}
            >
              {/* Imagem de Fundo */}
              <div className="absolute inset-0 bg-gray-900">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className={`
                    object-cover transition-transform duration-700 
                    /* Mobile: Sempre focado */
                    scale-100 opacity-80
                    /* Desktop: Focado só se ativo */
                    md:opacity-100 ${isActive ? "md:scale-100" : "md:scale-110 md:opacity-50 "}
                  `} 
                />
              </div>

              {/* Conteúdo */}
              <div 
                className={`
                  absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white transition-opacity duration-500
                  /* Mobile: Sempre visível */
                  opacity-100
                  /* Desktop: Visível só se ativo */
                  ${isActive ? "md:opacity-100" : "md:opacity-0"}
                `}
              >
                 <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>
                 
                 <div className="relative z-10">
                    <span className="text-xs md:text-sm font-light tracking-wider opacity-80 mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-200 mb-4 md:mb-6 max-w-md line-clamp-2">
                      {project.description}
                    </p>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="flex items-center gap-2 text-base md:text-lg font-medium hover:gap-4 cursor-pointer transition-all text-white border-b border-white pb-1 w-fit"
                    >
                      + Saiba Mais
                    </button>
                 </div>
              </div>

              {/* Ícone Mouse (Apenas Desktop e Inativo) */}
              {!isActive && (
                 <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce drop-shadow-md">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="7" /><line x1="12" y1="6" x2="12" y2="10" /></svg>
                 </div>
              )}
            </div>
          );
        })}
      </div>

      {/* --- O MODAL (Janela que abre por cima) --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setSelectedProject(null)}
          ></div>

          <div className="relative bg-isabelline rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors border border-white/20"
            >
              <X size={24} />
            </button>

            {/* Lado Esquerdo: Imagem */}
            <div className="relative w-full md:w-2/5 h-64 md:h-auto bg-gray-100 shrink-0">
               <Image 
                 src={selectedProject.image} 
                 alt={selectedProject.title} 
                 fill 
                 className="object-cover" 
               />
               <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
                  <span className="text-white/90 text-sm font-medium tracking-widest uppercase mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg">
                    {selectedProject.title}
                  </h3>
               </div>
            </div>

            {/* Lado Direito: Informações */}
            <div className="flex-1 p-6 md:p-12 flex flex-col gap-6 text-caribbean">
               <div>
                  <h4 className="text-sm font-bold uppercase text-gray-400 mb-1">Meu Papel</h4>
                  <p className="text-xl font-medium">{selectedProject.role}</p>
               </div>

               <div>
                  <h4 className="text-sm font-bold uppercase text-gray-400 mb-2">Sobre o Projeto</h4>
                  <p className="text-lg leading-relaxed text-gray-700">
                    {selectedProject.fullDescription}
                  </p>
               </div>

               <div>
                  <h4 className="text-sm font-bold uppercase text-gray-400 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.skills.map((skill) => (
                      <span key={skill} className="px-4 py-1.5 rounded-full bg-caribbean/10 text-caribbean font-medium text-sm border border-caribbean/20">
                        {skill}
                      </span>
                    ))}
                  </div>
               </div>

               <div className="mt-auto pt-6">
                 <a 
                   href={selectedProject.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 border-caribbean border-2 text-caribbean hover:text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-caribbean transition-colors shadow-lg hover:shadow-xl w-full justify-center md:w-auto"
                 >
                   Ver Projeto Online
                   <ExternalLink size={20} />
                 </a>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Paginação (Bolinhas) */}
      <div className="flex gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setCurrentPage(idx); setActiveId(projects[idx * itemsPerPage].id); }}
            className={`h-3 rounded-full transition-all duration-300 ${currentPage === idx ? "bg-caribbean w-8" : "bg-caribbean/30 w-3 hover:bg-caribbean/60"}`}
          />
        ))}
      </div>
    </section>
  );
}