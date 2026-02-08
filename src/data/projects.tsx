
export type ProjectLink = {
  name: string;
  url: string;
};

export type Project = {
  id: number;
  title: string;
  category: string;
  role: string;
  skills: string[];
  description: string;
  fullDescription: string;
  image: string;
  links: ProjectLink[];
  bgColor?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "PGRAFIT: A Graph Visualization",
    category: "Bolsa de pesquisa PIBIC",
    role: "Dev Full Stack",
    skills: ["React", "React Sigma", "Python", "IoHT", "Js", "HTML", "CSS"],
    description: "P-GRAFIT: Plataforma de visualização de grafos.",
    fullDescription:
      "A plataforma P-GRAFIT que permite criar, receber e visualizar grafos de classificação para sistemas IoHT, demonstrando a comunicação e relação entre sensores, modelos de classificação e as potenciais situações de riscos à saúde.",
    image: "/assets/pgrafiti.svg",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/lars-brg/PGRAFIT---A-Graph-Visualization",
      },
    ],
  },
  {
    id: 2,
    title: "PET-Saúde: Saúde Digital",
    category: "Extensão & GovTech",
    role: "Front-end Developer (GAT-2)",
    skills: ["React", "Interfaces de Saúde", "Análise de Dados", "SUS"],
    description:
      "Soluções digitais para monitoramento epidemiológico da sífilis em Sobral-CE.",
    fullDescription:
      "Atuando no GAT-2 (Grupo de Trabalho 2), desenvolvo interfaces para este projeto interdisciplinar que une a UFC e a Secretaria de Saúde de Sobral. O foco é criar ferramentas tecnológicas para recolher e analisar o fluxo e o perfil epidemiológico da sífilis, conectando o ensino acadêmico à realidade prática do SUS.",
    image: "/assets/pet.svg",
    links: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/petsaudesobral/",
      },
    ],
  },
  {
    id: 3,
    title: "Loading Jr.",
    category: "Liderança & Engenharia", 
    role: "Ex-Diretor de Marketing | Eng. de Projetos",
    skills: ["Liderança", "Estratégia de Vendas", "C/C++", "IoT", "Front-end"],
    description: "Da gestão estratégica ao desenvolvimento de sistemas embarcados.",
    fullDescription: "Minha jornada na Loading Jr. reflete minha evolução profissional. Como Diretor de Marketing e Vendas, desenvolvi uma visão estratégica de negócios, liderando equipes, negociando contratos e entendendo as dores reais dos clientes. Hoje, aplico essa bagagem no setor de Projetos, onde atuo tecnicamente como Desenvolvedor Front-end e Engenheiro de Sistemas Embarcados (IoT/Firmware). Essa transição me permite criar códigos e soluções que não são apenas tecnicamente sólidos, mas que entregam valor real e estratégico para o mercado.",
    image: "/assets/loading.svg",
    links: [
      { name: "Site", url: "https://loadingjr.com.br/" },
      { name: "Instagram", url: "https://www.instagram.com/loadingjr/" },
      { name: "Behance", url: "https://www.behance.net/loading_jr" },
    ],
  },
  {
    id: 4,
    title: "ArduLab",
    category: "Projeto de Extensão - UFC",
    role: "Co-Fundador, Tutor e Diretor de Comunicação",
    skills: ["C++", "Arduino", "Comunicação", "Eletrônicos", "Esp-32"],
    description: "Projeto de extensão de ensino em robótica.",
    fullDescription:
      "Projeto educacional da UFC que visa democratizar o ensino de robótica e programação para escolas públicas, utilizando hardware de baixo custo.",
    image: "/assets/ardulab.svg",
    links: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/ardulab.ufc/",
      },
      {
        name: "Artigo",
        url: "https://admin.abenge.org.br/public/conteudo/artigo?cod_trab=6319",
      },
    ],
  },
  {
    id: 5,
    title: "Conexão Ceará",
    category: "Evento de Tecnologia",
    role: "Organizador & Designer",
    skills: ["Figma", "Photoshop"],
    description: "Evento de conexão em tecnologia.",
    fullDescription:
      "Encontro regional de tecnologia e inovação, reunindo estudantes, profissionais e entusiastas para compartilhar conhecimento, ampliar o networking e fortalecer o ecossistema tecnológico.",
    image: "/assets/conexao.png",
    links: [
      {
        name: "Behance",
        url: "https://www.behance.net/gallery/241439083/Conexao-Ceara",
      },
    ],
  },
  {
    id: 6,
    title: "MyRide",
    category: "Aplicação Web",
    role: "Full Stack Mobile Dev",
    skills: ["NextJs", "Docker", "Figma", "HTML", "CSS", "TypeScript"],
    description: "Aplicativo de caronas.",
    fullDescription:
      "O MyRide mapeia a jornada passo a passo de sua comunidade — desde a descoberta da carona ideal até a publicação de ofertas e a reserva de assentos. Ele visualiza a interação fluida entre motoristas e passageiros.",
    image: "/assets/myride.png",
    links: [
      {
        name: "Behance",
        url: "https://www.behance.net/gallery/241455739/MyRIde",
      },
    ],
  },
  {
    id: 7,
    title: "Stage Up",
    category: "Aplicação WEB",
    role: "Dev Front-End & UI/UX Designer",
    skills: ["Node.js", "Figma", "HTML5", "CSS3", "TypeScript"],
    description: "Plataforma de recrutamento.",
    fullDescription:
      "A Stage é uma plataforma projetada para facilitar processos de recrutamento de estagiários e gestão de candidatos para empresas.",
    image: "/assets/stageup.png",
    links: [{ name: "GitHub", url: "https://github.com/lars-brg/stageUP" }],
  },
  {
    id: 8,
    title: "Landing Page",
    category: "UI/UX",
    role: "Product Designer",
    skills: ["Figma", "Prototyping", "User Research"],
    description: "Interface moderna para divulgação de trabalho e parcerias.",
    fullDescription:
      "Estudo de caso focado na experiência do usuário para divulgação de serviços e parcerias de uma profissional produroa de conteúdo em mídea focado em viagens.",
    image: "/assets/travel.svg",
    links: [{ name: "Dribbble", url: "https://dribbble.com/seuuser" }],
  },
  {
    id: 9,
    title: "CID",
    category: "IoT",
    role: "Engenheiro de Sistemas Embarcados",
    skills: ["C++", "Blender", "Esp-32", "IoT", "Sensores"],
    description: "Sistema Embarcado",
    fullDescription:
      "O robô CID surgiu a partir da necessidade de um melhor gerenciamento da qualidade das plantas em grandes plantações, possibilitando medições de solo, ar, luminosidade a fim de auxiliar o agricultor.",
    image: "/assets/cid-robo.png",
    links: [{ name: "GitHub", url: "https://github.com/pab-h/CID" }],
  },
  {
    id: 10,
    title: "Momentus",
    category: "Aplicação WEB",
    role: "Dev Front-End & UI/UX Designer",
    skills: ["Node.js", "Figma", "HTML", "CSS", "TypeScript"],
    description: "Gestão de eventos.",
    fullDescription:
      "A momentus é uma plataforma intuitiva projetada para facilitar a organização e gerenciamento de eventos de médio e pequeno porte.",
    image: "/assets/momentus.png",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/momentus-sa/momentus?tab=readme-ov-file",
      },
    ],
  },
];