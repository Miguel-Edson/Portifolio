"use client";

import Image from "next/image";
import { X, ExternalLink, Globe } from "lucide-react";
import { FaGithub, FaBehance, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Project } from "@/data/projects"; 

const getLinkIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("github")) return <FaGithub size={20} />;
  if (n.includes("behance")) return <FaBehance size={20} />;
  if (n.includes("instagram")) return <FaInstagram size={20} />;
  if (n.includes("linkedin")) return <FaLinkedin size={20} />;
  if (n.includes("demo") || n.includes("site") || n.includes("online")) return <Globe size={20} />;
  return <ExternalLink size={20} />;
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-isabelline rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
        
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors border border-white/20"
        >
          <X size={24} />
        </button>

        {/* Lado Esquerdo: Imagem */}
        <div className="relative w-full md:w-2/5 h-64 md:h-auto bg-gray-100 shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
            <span className="text-white/90 text-sm font-medium tracking-widest uppercase mb-2">
              {project.category}
            </span>
            <h3 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Lado Direito: Informações */}
        <div className="flex-1 p-6 md:p-12 flex flex-col gap-6 text-caribbean">
          
          {/* Meu Papel */}
          <div>
            <h4 className="text-sm font-bold uppercase text-gray-400 mb-1">Meu Papel</h4>
            <p className="text-xl font-medium">{project.role}</p>
          </div>
          
          {/* --- ÁREA DE SCROLL DO TEXTO --- */}
          <div>
            <h4 className="text-sm font-bold uppercase text-gray-400 mb-2">Sobre o Projeto</h4>
            
            {/* max-h-[160px]: Altura fixa (aprox 6 linhas)
                overflow-y-auto: Barra de rolagem se passar disso
                pr-2: Espaço para o texto não colar na barra
            */}
            <div className="max-h-[160px] overflow-y-auto pr-4 custom-scrollbar">
              <p className="text-lg leading-relaxed text-gray-700">
                {project.fullDescription}
              </p>
            </div>
          </div>
          {/* ------------------------------- */}

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-bold uppercase text-gray-400 mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-full bg-caribbean/10 text-caribbean font-medium text-sm border border-caribbean/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-auto pt-6 flex flex-wrap gap-3">
            {project.links && project.links.length > 0 ? (
              project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-caribbean border-2 text-caribbean hover:text-white px-6 py-3 rounded-xl font-bold text-base hover:bg-caribbean transition-colors shadow-sm hover:shadow-lg grow md:grow-0 justify-center"
                >
                  {getLinkIcon(link.name)}
                  {link.name}
                </a>
              ))
            ) : (
              <span className="text-gray-400 text-sm italic">Links indisponíveis no momento.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}