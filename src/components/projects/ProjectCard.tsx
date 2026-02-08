"use client";

// Libraries
import Image from "next/image";

// Components
import { Project } from "@/data/projects";
import AnimatedButton from "@/components/ui/AnimatedButton";

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onClick: () => void;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, isActive, onClick, onOpenModal }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        relative rounded-3xl md:rounded-4xl overflow-hidden transition-all duration-700 ease-in-out shadow-xl 
        w-full h-100
        md:h-full md:w-auto
        ${isActive ? "md:flex-3" : "md:flex-1 md:hover:flex-[1.2]"}
      `}
    >
      {/* BG Image */}
      <div className="absolute inset-0 bg-gray-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`
            object-cover transition-transform duration-700 
            scale-100 opacity-80
            md:opacity-100 ${isActive ? "md:scale-100" : "md:scale-110 md:opacity-50"}
          `}
        />
      </div>

      {/* Text Content */}
      <div
        className={`
          absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white transition-opacity duration-500
          opacity-100
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
          <p className="text-base md:text-lg text-justify text-gray-200 mb-4 md:mb-6 max-w-md line-clamp-2">
            {project.description}
          </p>

          
          <AnimatedButton
            className="text-white border-white text-base md:text-lg hover:gap-4"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(project);
            }}
          >
            Saiba Mais
          </AnimatedButton>
        </div>
      </div>

      {/* Mouse icon */}
      {!isActive && (
        <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce drop-shadow-md">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="5" y="2" width="14" height="20" rx="7" />
            <line x1="12" y1="6" x2="12" y2="10" />
          </svg>
        </div>
      )}
    </div>
  );
}