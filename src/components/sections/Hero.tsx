import Image from "next/image";

export default function Hero() {
  return (
    // Seção principal com a classe que define o fundo e a chuva
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center pt-28 pb-10 overflow-hidden rain-container">
      
      {/* --- Camadas da Chuva (CSS puro) --- */}
      {/* Esta div cria as camadas 1 (perto) e 2 (médio) via ::before e ::after */}
      <div className="absolute inset-0 pointer-events-none rain-layer"></div>
      {/* Esta div cria a camada 3 (longe) */}
      <div className="absolute inset-0 pointer-events-none rain-layer-far"></div>

    <div className="splash-container"></div> {/* <-- ADICIONE ESSA LINHA AQUI */}
      {/* --- Conteúdo Principal (Z-10 para ficar acima da chuva) --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto h-full justify-between grow gap-12">
        
        {/* Bloco de Texto e Botão */}
        <div className="flex flex-col items-center gap-8 mt-auto">
            <h1 className="text-display text-isabelline">
            Desenvolvedor Full Stack<br />& Eng. de Computação
            </h1>
            
            <p className="text-subtitulo text-isabelline max-w-2xl">
            Estudante de Engenharia de Computação focado em sistemas embarcados, IoT e desenvolvimento web moderno.
            </p>

            {/* O Botão com Hover Invertido */}
            <a 
              href="#projetos" 
              className="mt-4 px-8 py-3 rounded-3xl border-2 border-isabelline text-isabelline font-medium text-lg transition-all duration-300 hover:bg-isabelline hover:text-caribbean "
            >
            Veja Mais
            </a>
        </div>

        {/* Logo Gigante no Rodapé do Hero */}
        {/* Usei mt-auto para empurrar ela para baixo se a tela for muito alta */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 mt-auto animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <Image 
            src="/assets/logo.svg" 
            alt="Mascote Miguel Lima Gigante" 
            fill
            className="object-contain drop-shadow-2xl"
            priority // Carrega essa imagem com prioridade
          />
        </div>

      </div>
    </section>
  );
}