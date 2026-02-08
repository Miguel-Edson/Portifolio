"use client";

import { useState } from "react";
import { 
  Code2, 
  Layout, 
  Cpu, 
  PenTool, 
  GitBranch, 
  Globe,
  ChevronDown,
  Briefcase, // Ícone novo para a seção de Atuação
  BookOpen,  // Ícone para Pesquisa/Ensino
  Users      // Ícone para Liderança
} from "lucide-react"; 

// --- PARTE 1: FERRAMENTAS (Accordions) ---
const skillGroups = [
  {
    id: "programming",
    title: "Linguagens de Programação",
    icon: <Code2 size={32} />,
    description: "A base lógica para construir soluções robustas.",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "C++", level: 90 },
      { name: "Python", level: 85 },
    ]
  },
  {
    id: "web",
    title: "Desenvolvimento Web (Front-end)",
    icon: <Layout size={32} />,
    description: "Tecnologias para interfaces modernas e responsivas.",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5", level: 100 },
      { name: "CSS3", level: 95 },
    ]
  },
  {
    id: "hardware",
    title: "Hardware & Embarcados",
    icon: <Cpu size={32} />,
    description: "Integração entre software e mundo físico.",
    skills: [
      { name: "Arduino", level: 95 },
      { name: "Sensores & Atuadores", level: 90 },
      { name: "Robótica", level: 85 },
    ]
  },
  {
    id: "design",
    title: "Ferramentas de Design",
    icon: <PenTool size={32} />,
    description: "Prototipagem e criação visual.",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Canva", level: 95 },
      { name: "Photoshop", level: 80 },
      { name: "Behance", level: 75 },
    ]
  },
  {
    id: "tools",
    title: "Outros & Versionamento",
    icon: <GitBranch size={32} />,
    description: "Ferramentas essenciais para fluxo de trabalho.",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
    ]
  },
  {
    id: "languages",
    title: "Idiomas",
    icon: <Globe size={32} />,
    description: "Comunicação global.",
    skills: [
      { name: "Português", level: 100 },
      { name: "Inglês", level: 80 },
    ]
  },
];

// --- PARTE 2: ÁREAS DE ATUAÇÃO (Texto da Imagem) ---
const competencies = [
  {
    title: "Desenvolvimento Front-end",
    icon: <Layout className="text-caribbean" size={24} />,
    items: [
      "Criação de interfaces responsivas",
      "Integração com APIs"
    ]
  },
  {
    title: "Prototipagem de Hardware e IoT",
    icon: <Cpu className="text-caribbean" size={24} />,
    items: [
      "Desenvolvimento de sistemas de monitoramento",
      "Desenvolvimento de sistemas de controle"
    ]
  },
  {
    title: "UI/UX Design",
    icon: <PenTool className="text-caribbean" size={24} />,
    items: [
      "Elaboração de identidade visual",
      "Elaboração de logotipos",
      "Design de páginas web & aplicativos"
    ]
  },
  {
    title: "Liderança e Gestão",
    icon: <Briefcase className="text-caribbean" size={24} />,
    items: [
      "Experiência com direção de Marketing e Vendas (Loading Jr)",
      "Organização de eventos de tecnologia"
    ]
  },
  {
    title: "Pesquisa Acadêmica",
    icon: <BookOpen className="text-caribbean" size={24} />,
    items: [
      "Investigação e visualização de dados (PIBIC/P-GRAFIT)",
      "Elaboração de Artigo aceito pelo COBENGE"
    ]
  },
  {
    title: "Ensino e Comunicação",
    icon: <Users className="text-caribbean" size={24} />,
    items: [
      "Ministração de oficinas de robótica",
      "Divulgação científica"
    ]
  }
];

export default function Skills() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const toggleGroup = (id: string) => {
    setOpenGroup(openGroup === id ? null : id);
  };

  return (
    <section 
      id="habilidades" 
      className="w-full py-24 px-6 flex flex-col items-center"
      style={{
        background: "linear-gradient(to bottom, #021E23, #1C8AA2)"
      }}
    >
      
      {/* --- CABEÇALHO --- */}
      <div className="w-full max-w-6xl mb-12 text-center md:text-left">
        <span className="text-complemento text-sky-blue block mb-2">
          / Competências
        </span>
        <h2 className="text-titulo text-isabelline">
          Habilidades & Stack
        </h2>
        <p className="text-paragrafo text-gray-300 mt-4 max-w-2xl">
          Minha caixa de ferramentas técnica e as áreas onde aplico esse conhecimento.
        </p>
      </div>

      <div className="w-full max-w-6xl flex items-center gap-4 mb-12">
        <div className="h-px flex-1 bg-white/20"></div>
        <span className="text-sky-blue text-destaque uppercase tracking-widest">Ferramentas & Tecnologias</span>
        <div className="h-px flex-1 bg-white/20"></div>
      </div>

      {/* --- PARTE 1: FERRAMENTAS (Accordions) --- */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {skillGroups.map((group) => {
          const isOpen = openGroup === group.id;

          return (
            <div 
              key={group.id}
              onClick={() => toggleGroup(group.id)}
              className={`
                bg-isabelline rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 shadow-xl
                ${isOpen ? "scale-[1.02]" : "hover:scale-[1.01] hover:bg-white"}
              `}
            >
              <div className="p-8 flex items-start gap-6">
                <div className={`p-4 rounded-2xl transition-colors duration-300 ${isOpen ? "bg-caribbean text-white" : "bg-caribbean/10 text-caribbean"}`}>
                  {group.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold text-caribbean font-k2d">{group.title}</h3>
                    <ChevronDown className={`text-caribbean transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">{group.description}</p>
                </div>
              </div>

              <div className={`bg-gray-50 px-8 transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] py-8 opacity-100" : "max-h-0 py-0 opacity-0"}`}>
                <div className="space-y-6">
                  {group.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2 text-sm font-bold text-gray-600">
                        <span>{skill.name}</span>
                        <span className="text-caribbean">{skill.level}%</span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-linear-to-r from-caribbean to-sky-blue rounded-full transition-all duration-1000 ease-out" style={{ width: isOpen ? `${skill.level}%` : "0%" }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- DIVISOR VISUAL --- */}
      <div className="w-full max-w-6xl flex items-center gap-4 mb-12">
        <div className="h-px flex-1 bg-white/20"></div>
        <span className="text-sky-blue text-destaque uppercase tracking-widest">Áreas de Atuação</span>
        <div className="h-px flex-1 bg-white/20"></div>
      </div>

      {/* --- PARTE 2: COMPETÊNCIAS (Cards de Texto) --- */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competencies.map((comp, index) => (
          <div key={index} className="bg-isabelline/95 p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-caribbean/10 rounded-xl">
                {comp.icon}
              </div>
              <h3 className="text-lg font-bold text-caribbean font-k2d leading-tight">
                {comp.title}
              </h3>
            </div>
            
            <ul className="space-y-3">
              {comp.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm font-medium">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-peel shrink-0"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}