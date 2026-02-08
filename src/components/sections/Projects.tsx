"use client";

// Libraries
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";

// Components
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [direction, setDirection] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const visibleProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      setActiveId(projects[newPage * itemsPerPage].id);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      setActiveId(projects[newPage * itemsPerPage].id);
    }
  };

  const pageVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? "100%" : "-100%", opacity: 0 }),
  };

  return (
    <section id="projetos" className="w-full py-20 bg-isabelline flex flex-col items-center justify-center overflow-hidden relative">
      
      {/* Header - Adicionei px-6 */}
      <div className="w-full max-w-6xl px-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <h2 className="text-titulo text-caribbean font-medium">Projetos</h2>
          <p className="text-paragrafo text-caribbean mt-4 max-w-6xl">
            Um compilado da minha trajetória na Engenharia de Computação. Projetos que vão desde desafios acadêmicos e pesquisa até soluções reais desenvolvidas para o mercado.
          </p>
        </div>
      </div>

      {/* Navigation - Adicionei px-6 */}
      <div className="w-full max-w-6xl px-6 justify-end flex pb-4">
        {totalPages > 1 && (
          <div className="flex gap-2">
            <button onClick={prevPage} disabled={currentPage === 0} className="p-3 rounded-full border border-caribbean text-caribbean disabled:opacity-30 hover:bg-caribbean hover:text-white transition-colors z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={nextPage} disabled={currentPage === totalPages - 1} className="p-3 rounded-full border border-caribbean text-caribbean disabled:opacity-30 hover:bg-caribbean hover:text-white transition-colors z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        )}
      </div>

      {/* Cards - Adicionei px-6 */}
      <div className="w-full max-w-6xl px-6 h-auto md:h-125 overflow-hidden relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-4"
          >
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={activeId === project.id}
                onClick={() => setActiveId(project.id)}
                onOpenModal={setSelectedProject}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Pagination */}
      <div className="flex gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentPage ? 1 : -1);
              setCurrentPage(idx);
              setActiveId(projects[idx * itemsPerPage].id);
            }}
            className={`h-3 rounded-full transition-all duration-300 ${currentPage === idx ? "bg-caribbean w-8" : "bg-caribbean/30 w-3 hover:bg-caribbean/60"}`}
          />
        ))}
      </div>
    </section>
  );
}