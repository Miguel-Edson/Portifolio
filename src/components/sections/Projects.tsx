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
  // Removi o bgColor obrigatório da lógica visual, mas mantive na tipagem caso queira usar em algum detalhe futuro
  bgColor?: string; 
};

// 2. Seus Dados (Adicione quantos quiser aqui que a paginação funciona!)
const projects: Project[] = [
  {
    id: 1,
    title: "Energia Ceará",
    category: "Web Design",
    role: "Front-end Developer & UI Designer",
    skills: ["Next.js", "Tailwind CSS", "Figma", "Leaflet Maps"],
    description: "Plataforma de gestão de energias renováveis.",
    fullDescription: "Uma plataforma completa para monitoramento de usinas solares e eólicas no estado do Ceará, integrando mapas interativos e dados em tempo real para investidores e turistas.",
    image: "/assets/conexao.png",
    link: "https://github.com/seusrouser/projeto",
  },
  {
    id: 2,
    title: "MyRide",
    category: "Mobile App",
    role: "Full Stack Mobile Dev",
    skills: ["React Native", "Firebase", "Google Maps API"],
    description: "Aplicativo de caronas universitárias.",
    fullDescription: "Solução focada em segurança para universitários. Inclui verificação de matrícula, rotas inteligentes e divisão automática de custos de combustível.",
    image: "/assets/myride.png",
    link: "https://behance.net/seuuser/myride",
  },
  {
    id: 3,
    title: "Travel App",
    category: "UI/UX",
    role: "Product Designer",
    skills: ["Figma", "Prototyping", "User Research"],
    description: "Interface moderna para agendamento de viagens.",
    fullDescription: "Estudo de caso focado na experiência do usuário para agendamento de pacotes turísticos, com foco em acessibilidade e design visual imersivo.",
    image: "/assets/travel.png",
    link: "https://dribbble.com/seuuser",
  },
  {
    id: 4,
    title: "ArduLab",
    category: "Extension Project",
    role: "Co-Founder & Lead Instructor",
    skills: ["C++", "Arduino", "Teaching", "Electronics"],
    description: "Projeto de extensão de robótica.",
    fullDescription: "Projeto educacional da UFC que visa democratizar o ensino de robótica e programação para escolas públicas, utilizando hardware de baixo custo.",
    image: "/assets/ardulab.png",
    link: "https://instagram.com/ardulab",
  },
  // Exemplo de mais projetos para testar a paginação (Descomente para ver as setas funcionando)
  
  {
    id: 5,
    title: "Projeto Extra 5",
    category: "Backend",
    role: "Dev",
    skills: ["Node.js"],
    description: "Teste de paginação.",
    fullDescription: "Descrição teste.",
    image: "/assets/stageup.png",
    link: "#",
  },
  
];

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  
  // Lógica de corte para mostrar apenas 4 por vez
  const visibleProjects = projects.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      // Opcional: define o primeiro item da nova página como ativo
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
      <div className="w-full max-w-7xl px-6 mb-8 flex justify-between items-end">
        <div>
          <span className="text-complemento text-caribbean block mb-2">/ Desenvolvimento</span>
          <h2 className="text-titulo text-caribbean font-medium">Projetos</h2>
        </div>

        {/* Setas de Navegação (Só aparecem se tiver mais de 1 página) */}
        
      </div>
      <div className="w-full max-w-7xl justify-end flex px-6 pb-4 "  >{totalPages > 1 && (
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
        )}</div>

      {/* --- Lista de Cards (Accordion) --- */}
      <div className="w-full max-w-7xl px-4 h-125 flex gap-4 transition-all duration-500">
        {visibleProjects.map((project) => {
          const isActive = activeId === project.id;
          return (
            <div
              key={project.id}
              onClick={() => setActiveId(project.id)}
              className={`relative rounded-4xl overflow-hidden  transition-all duration-700 ease-in-out shadow-xl ${isActive ? "flex-3" : "flex-1 cursor-pointer hover:flex-[1.2]"}`}
            >
              {/* Imagem de Fundo (LIMPA, sem filtros de cor) */}
              <div className="absolute inset-0 bg-gray-900"> {/* Fundo escuro caso imagem carregue lento */}
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className={`object-cover transition-transform duration-700 ${isActive ? "scale-100" : "scale-110 opacity-50 "}`} 
                />
                {/* Removida a div de cor (bgColor) que ficava aqui */}
              </div>

              {/* Conteúdo + Sombra Gradiente (Para leitura) */}
              <div className={`absolute inset-0 p-8 flex flex-col justify-end text-white transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
                 {/* Gradiente preto apenas embaixo para o texto aparecer bem */}
                 <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>
                 
                 <div className="relative z-10">
                    <span className="text-sm font-light tracking-wider opacity-80 mb-1 block">{project.category}</span>
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-lg text-gray-200 mb-6 max-w-md line-clamp-2">{project.description}</p>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="flex items-center gap-2 text-lg cursor-pointer font-medium hover:gap-4 hover:scale-110 hover:font-bold transition-all text-white border-b border-white pb-1 w-fit"
                    >
                      + Saiba Mais
                    </button>
                 </div>
              </div>

              {/* Ícone Mouse nos inativos */}
              {!isActive && (
                 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce drop-shadow-md">
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

            {/* Lado Esquerdo: Imagem (LIMPA) */}
            <div className="relative w-full md:w-2/5 min-h-75 md:min-h-full bg-gray-100">
               <Image 
                 src={selectedProject.image} 
                 alt={selectedProject.title} 
                 fill 
                 className="object-cover" // Sem mix-blend nem opacity
               />
               {/* Gradiente sutil apenas na base para o texto do título */}
               <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <span className="text-white/90 text-sm font-medium tracking-widest uppercase mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-white text-4xl font-bold drop-shadow-lg">
                    {selectedProject.title}
                  </h3>
               </div>
            </div>

            {/* Lado Direito: Informações */}
            <div className="flex-1 p-8 md:p-12 flex flex-col gap-6 text-caribbean">
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
                   className="inline-flex items-center gap-2 bg-caribbean text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-orange-peel transition-colors shadow-lg hover:shadow-xl"
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