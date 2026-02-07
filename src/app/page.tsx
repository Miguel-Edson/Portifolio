"use"
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About/>
      <Projects/>
      {/* Espaço para as próximas seções */}
      <section id="sobre" className="h-screen bg-isabelline flex items-center justify-center">
        <h2 className="text-sessao text-caribbean">(Exemplo da próxima dobra)</h2>
      </section>
    </main>
  );
}