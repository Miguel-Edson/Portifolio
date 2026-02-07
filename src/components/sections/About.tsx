import Image from "next/image";

export default function About() {
  return (
    <section 
      id="sobre" 
      className="w-full py-20 px-6 md:px-12 flex items-center justify-center text-isabelline"
      style={{
        // O degradê personalizado que você pediu
        background: "linear-gradient(to bottom, #0D4C59, #16697A)"
      }}
    >
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Coluna da Esquerda: Texto */}
        {/* 'order-2 md:order-1' faz o texto ficar DEPOIS da foto no celular, mas ANTES no PC */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <div className="space-y-2">
            <span className="text-subtitulo text-isabelline block">
              / Sobre Mim
            </span>
            <h2 className="text-titulo font-medium">
              Miguel Lima
            </h2>
          </div>
          
          <div className="text-paragrafo space-y-6 opacity-90 text-justify max-w-xl">
            <p>
              Aluno Graduando em Engenharia de Computação na Universidade Federal do Ceará.
            </p>
            <p>
              Seja desenvolvendo uma interface Web ou prototipando
              um sistema embarcado, a sensação é a mesma: estou
              resolvendo quebra-cabeças reais. Não sinto o tempo
              passar quando estou imerso na lógica de um projeto. A
              satisfação de ver algo que só existia na minha cabeça
              funcionando no mundo real é o que me move todos os dias.
            </p>
          </div>
        </div>

        {/* Coluna da Direita: Imagem */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
           {/* Container da Imagem com Borda Estilizada */}
           <div className="relative w-full max-w-md aspect-square">
             {/* A Borda Branca (Moldura) */}
             <div className="absolute inset-0 border-[3px] border-isabelline rounded-[2.5rem] transform rotate-3 translate-x-2 translate-y-2 opacity-30"></div>
             
             {/* A Imagem em si */}
             <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-[3px] border-isabelline shadow-2xl bg-caribbean/20">
               <Image 
                 src="/assets/Me.png" 
                 alt="Foto de Miguel Lima" 
                 fill
                 className="object-cover"
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}