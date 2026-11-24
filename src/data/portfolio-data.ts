export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  category: string
  shortDesc: string
  fullDesc: string
  image: string
  imageCredit?: string
  tags: string[]
  impact: string
  medal: string
  year: string
  isAwarded: boolean
  isInternational: boolean
  filterTags: string[]
  links: ProjectLink[]
}

export interface Milestone {
  year: string
  title: string
  description: string
  icon: string
}

export interface SkillLife {
  id: number
  emoji: string
  title: string
  subtitle: string
  description: string
  tags: string[]
}

export interface TechnologyItem {
  name: string
  level: string
  iconName: string
  note?: string
}

export interface TechnologyCategory {
  category: string
  items: TechnologyItem[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  context: string
  text: string
  linkedin?: string
  fromPublicPost?: boolean
}

export const HERO_STATS = [
  { value: '70+', label: 'Hackathons', sub: 'Participações ao longo da trajetória' },
  { value: '10+', label: 'Pódios', sub: 'Em hackathons e desafios' },
  { value: '6+', label: 'Países', sub: 'Experiências em equipes internacionais' },
  { value: '4', label: 'Frentes criativas', sub: 'Desenvolvimento, UX, produto e games' },
]

export const TIMELINE_EVENTS: Milestone[] = [
  {
    year: '2016–2022',
    title: 'Formação e vivência na área da saúde',
    description:
      'Estudei na Universidade Federal de Pernambuco e participei de iniciativas de humanização hospitalar e atividades acadêmicas ligadas à Informática Aplicada à Enfermagem.',
    icon: 'Activity',
  },
  {
    year: '2022',
    title: 'Primeiros projetos em tecnologia',
    description:
      'Comecei a participar de hackathons e desafios de inovação, explorando desenvolvimento web, UX/UI, prototipação e trabalho em equipe.',
    icon: 'Code',
  },
  {
    year: '2023',
    title: 'Games, Comunidades & Desenvolvimento Criativo',
    description:
      'Participação em Game Jams, projetos independentes e narrativas interativas — unindo criatividade, storytelling e desenvolvimento.',
    icon: 'Gamepad',
  },
  {
    year: '2024',
    title: 'Reconhecimento em desafios nacionais e globais',
    description:
      'Participei de equipes premiadas em desafios de inovação e fui finalista regional no NASA Space Apps Challenge.',
    icon: 'Sparkles',
  },
  {
    year: '2026',
    title: 'Desenvolvimento, jogos e formação em Marketing',
    description:
      'Sigo criando soluções digitais e experiências interativas, enquanto estudo Marketing e participo do Programa Embaixadores Estudantis do Google.',
    icon: 'Rocket',
  },
]

export const TIMELINE_HIGHLIGHT =
  'Minha trajetória combina desenvolvimento de software, UX/UI, comunicação e criação de jogos para transformar ideias em experiências digitais úteis.'

export const SEVEN_LIVES: SkillLife[] = [
  {
    id: 1,
    emoji: '💻',
    title: 'Programação e Tecnologia',
    subtitle: 'Engenharia Frontend & Fullstack',
    description:
      'Criação de interfaces web e participação no desenvolvimento de aplicações com React, TypeScript, JavaScript e Node.js.',
    tags: ['React', 'TypeScript', 'Node.js', 'Vite', 'Tailwind'],
  },
  {
    id: 2,
    emoji: '🧠',
    title: 'Inteligência Artificial',
    subtitle: 'Ferramentas digitais e experimentação',
    description:
      'Exploração de recursos digitais e novas tecnologias em atividades de aprendizagem, prototipação e desenvolvimento de projetos.',
    tags: ['Python', 'Prototipação', 'Pesquisa', 'Tecnologia'],
  },
  {
    id: 3,
    emoji: '🩺',
    title: 'Saúde Digital & Biotech',
    subtitle: 'Domínio do Cuidado & Dados',
    description:
      'Interesse em saúde digital e desenvolvimento de projetos que consideram necessidades reais de pessoas e comunidades.',
    tags: ['Saúde Digital', 'Triagem Preditiva', 'UFPE', 'Usabilidade'],
  },
  {
    id: 4,
    emoji: '🎨',
    title: 'Design UX/UI & Acessibilidade',
    subtitle: 'Interfaces Humanizadas',
    description:
      'Pesquisa, prototipação e construção de interfaces com atenção à clareza, usabilidade e acessibilidade.',
    tags: ['Figma', 'Prototipagem', 'Design Systems', 'WCAG'],
  },
  {
    id: 5,
    emoji: '🎮',
    title: 'Games & Gamificação',
    subtitle: 'Interatividade Imersiva',
    description:
      'Mecânicas de jogo aplicadas ao engajamento social, aprendizagem e conscientização ambiental.',
    tags: ['Gamificação', 'Game Design', 'Storytelling', 'Logic'],
  },
  {
    id: 6,
    emoji: '🌱',
    title: 'Sustentabilidade & Cidades',
    subtitle: 'Economia Circular & Impacto',
    description:
      'Soluções voltadas para logística reversa, reciclagem inteligente, redução de danos e cidades resilientes.',
    tags: ['Economia Circular', 'ESG', 'Cidades Inteligentes'],
  },
  {
    id: 7,
    emoji: '💡',
    title: 'Liderança & Mentoria em Tech',
    subtitle: 'Comunidade & Inclusão',
    description:
      'Colaboração em equipes multidisciplinares e participação em comunidades, hackathons e iniciativas de tecnologia.',
    tags: ['Mulheres em Tech', 'Mentoria', 'Agile', 'Comunidade'],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'capiba-quest',
    title: 'Capiba Quest',
    category: 'Games',
    shortDesc: 'Jogo de exploração cultural no Recife Antigo, com uma capivara como guia e um passaporte digital.',
    fullDesc: 'Idealizei o Capiba Quest e desenvolvi o projeto com a equipe Os Noobs 2.0 para o Ideathon P&D Design 2026. É um jogo web de exploração cultural em que a pessoa percorre pontos do Recife Antigo, conhece guias e descobre histórias da cidade. A experiência reúne mapa cultural, passaporte digital e recursos de acessibilidade, como histórias em Libras e ajustes de contraste e movimento. Conquistamos o 2º lugar no Demoday do CESAR School durante o REC’n’Play 2026.',
    image: `${import.meta.env.BASE_URL}projects/capiba-quest.svg`,
    tags: ['Game Design', 'Geolocalização', 'Experiência Interativa', 'Recife', 'UX/UI'],
    impact: '🥈 2º lugar — Ideathon P&D Design 2026',
    medal: '🥈',
    year: '2026',
    isAwarded: true,
    isInternational: false,
    filterTags: ['Games', 'Desenvolvimento', '2º Lugar', 'Top 3'],
    links: [
      { label: 'Demonstração', url: 'https://capibaquestgame.vercel.app/' },
      { label: 'Equipe Os Noobs 2.0', url: 'https://osnoobs.goskip.app/' },
    ],
  },
  {
    id: 'ghost-route',
    title: 'Ghost Route: Quantum Rescue Game',
    category: 'Games',
    shortDesc: 'Jogo educativo que apresenta sensores quânticos por meio de uma missão de resgate e navegação.',
    fullDesc: 'Criado pela equipe QuantGirls no Qollab × IonQ Global Hackathon 2026. O jogo transforma conceitos de sensores quânticos e navegação sob interferência em uma experiência interativa. A equipe conquistou o 1º lugar no núcleo MPC (Minho, Porto e Coimbra), além de reconhecimentos por impacto, documentação e uso do Quantum Playground.',
    image: `${import.meta.env.BASE_URL}projects/ghost-route.svg`,
    tags: ['Computação Quântica', 'Game Design', 'Educação', 'Qiskit', 'Storytelling'],
    impact: '🥇 1º lugar — Qollab × IonQ, núcleo MPC',
    medal: '🥇',
    year: '2026',
    isAwarded: true,
    isInternational: true,
    filterTags: ['Games', 'Educação', '1º Lugar', 'Top 3', 'Internacionais'],
    links: [
      { label: 'Jogar no navegador', url: 'https://ghostroutegame.vercel.app/' },
      { label: 'Código e documentação', url: 'https://github.com/SouBeatrizKaroline/QollabQuantumHackathon_GhostRoute' },
    ],
  },
  {
    id: 'qubitmusic',
    title: 'QubitMusic',
    category: 'Educação',
    shortDesc: 'Projeto premiado que aproxima computação quântica e música em uma experiência criativa.',
    fullDesc: 'Desenvolvido no Qollab × IonQ Global Hackathon 2026 pela equipe QuantGirls. QubitMusic recebeu o reconhecimento Best of Quantum Impact no núcleo MPC, explorando uma forma criativa de conectar música e conceitos de computação quântica.',
    image: `${import.meta.env.BASE_URL}projects/qubitmusic.svg`,
    tags: ['Computação Quântica', 'Música', 'Educação', 'Criatividade'],
    impact: '🏆 Best of Quantum Impact — núcleo MPC',
    medal: '🏆',
    year: '2026',
    isAwarded: true,
    isInternational: true,
    filterTags: ['Educação', 'Internacionais', 'Menções'],
    links: [],
  },
  {
    id: 'qubit-stories',
    title: 'Qubit Stories',
    category: 'Educação',
    shortDesc: 'Histórias ilustradas e experimentos para tornar conceitos quânticos mais acessíveis.',
    fullDesc: 'Projeto da equipe QuantGirls no Qollab × IonQ Global Hackathon 2026. Qubit Stories apresenta conceitos de computação quântica por meio de histórias ilustradas em quatro idiomas e experimentos com Qiskit. Recebeu o prêmio Best of Quantum Unlocked no núcleo MPC.',
    image: `${import.meta.env.BASE_URL}projects/qubit-stories.svg`,
    tags: ['Computação Quântica', 'Educação', 'Storytelling', 'Qiskit', 'Multilíngue'],
    impact: '🏆 Best of Quantum Unlocked — núcleo MPC',
    medal: '🏆',
    year: '2026',
    isAwarded: true,
    isInternational: true,
    filterTags: ['Educação', 'Internacionais', 'Menções'],
    links: [],
  },
  {
    id: 'aqua-lunar',
    title: 'Aqua Lunar',
    category: 'Sustentabilidade',
    shortDesc: 'Proposta para aproveitar gelo lunar e apoiar recursos para futuras missões espaciais.',
    fullDesc: 'Projeto desenvolvido pela equipe ST4R no Space Mining Challenge Brasil 2026. A proposta explora o aproveitamento do gelo da cratera Shackleton para produzir oxigênio e hidrogênio, contribuindo para a autonomia de futuras missões. A equipe conquistou o 1º lugar na competição.',
    image: `${import.meta.env.BASE_URL}projects/aqua-lunar.svg`,
    tags: ['Exploração Espacial', 'Sustentabilidade', 'Ciência', 'Pesquisa'],
    impact: '🥇 1º lugar — Space Mining Challenge Brasil 2026',
    medal: '🥇',
    year: '2026',
    isAwarded: true,
    isInternational: false,
    filterTags: ['Sustentabilidade', '1º Lugar', 'Top 3'],
    links: [],
  },
  {
    id: 'safraflux',
    title: 'SafraFlux',
    category: 'AgroTech',
    shortDesc: 'Solução de privacidade financeira aplicada a pagamentos no agronegócio.',
    fullDesc: 'Desenvolvido pela equipe SheBuilds, o SafraFlux integrou blockchain, Cloak e Zcash para explorar pagamentos mais privados e seguros no agronegócio. O projeto ficou entre os 10 premiados do Privacy Sprint, realizado pela Superteam Brasil durante o Colosseum Crypto World’s Fair Hackathon 2026.',
    image: `${import.meta.env.BASE_URL}projects/safraflux.svg`,
    tags: ['Blockchain', 'Privacidade', 'Fintech', 'AgroTech'],
    impact: '🏅 Top 10 projetos premiados — Privacy Sprint 2026',
    medal: '🏅',
    year: '2026',
    isAwarded: true,
    isInternational: true,
    filterTags: ['AgroTech', 'Internacionais', 'Menções'],
    links: [],
  },
  {
    id: 'orbitalq',
    title: 'OrbitalQ',
    category: 'Ciência & Dados',
    shortDesc: 'Ferramenta web para explorar e comparar observações do telescópio espacial SPHEREx.',
    fullDesc: 'Projeto da NASA Space Apps Challenge 2026. O OrbitalQ foi pensado para facilitar a exploração de dados do SPHEREx com visualização de observações e comparação de imagens. A demonstração pública está hospedada no Streamlit.',
    image: `${import.meta.env.BASE_URL}projects/orbitalq.svg`,
    tags: ['NASA', 'Astronomia', 'Dados Científicos', 'Python', 'Streamlit'],
    impact: 'NASA Space Apps Challenge 2026',
    medal: '',
    year: '2026',
    isAwarded: false,
    isInternational: true,
    filterTags: ['Desenvolvimento', 'Internacionais'],
    links: [
      { label: 'Demonstração', url: 'https://orbitalq.streamlit.app/' },
      { label: 'GitHub', url: 'https://github.com/SouBeatrizKaroline/NasaSpaceApp_OrbitalQ' },
    ],
  },
  {
    id: 'vivia',
    title: 'VivIA',
    category: 'Desenvolvimento',
    shortDesc: 'Proposta digital para apoiar pequenos negócios e o comércio local.',
    fullDesc: 'Projeto desenvolvido para o Hackathon Connect 7.0 da FACESP. A VivIA foi pensada para apoiar empreendedores do varejo local com uma experiência digital acessível e uma mascote que orienta a interação. O projeto reúne interface web, produto e proposta de uso de dados para o contexto de associações comerciais.',
    image: `${import.meta.env.BASE_URL}projects/vivia.svg`,
    tags: ['Comércio Local', 'Produto Digital', 'UX/UI', 'React', 'Firebase'],
    impact: 'Hackathon Connect 7.0 — FACESP',
    medal: '',
    year: '2026',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Desenvolvimento', 'UX/UI', 'Impacto Social'],
    links: [{ label: 'Projeto', url: 'https://connectvivia.vercel.app/' }],
  },
  {
    id: 'mothicat',
    title: 'Mothi — Ecos no Campo',
    category: 'Games',
    shortDesc: 'Jogo narrativo 3D sobre Helena, seu gato Mothi e as lembranças que os aproximam.',
    fullDesc:
      'Na pele de Mothi, um gato preto e branco, o jogador explora um jardim em 3D e revisita as lembranças do filho de Helena por meio de brincadeiras. As descobertas ficam guardadas em um álbum de aquarelas. A história fala de saudade e dos pequenos gestos que criam confiança e companhia.',
    image: `${import.meta.env.BASE_URL}projects/mothicat.svg`,
    tags: ['Three.js', 'Narrativa', 'Exploração 3D', 'Aquarela'],
    impact: 'Jogo narrativo para navegador',
    medal: '',
    year: '2026',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Games', 'Desenvolvimento'],
    links: [{ label: 'Jogar no navegador', url: 'https://mothicatgame.vercel.app/' }],
  },
  {
    id: 'ancestria',
    title: 'Ancestria',
    category: 'Games',
    shortDesc: 'Jogo educativo sobre povos originários das Américas, criado para uma apresentação no curso de espanhol do NLC.',
    fullDesc:
      'Criei o Ancestria para uma apresentação que minha professora pediu no curso de espanhol do NLC. No jogo, você explora territórios em 2.5D e 3D e descobre histórias, tecnologias e saberes dos povos originários das Américas. O protótipo reúne um atlas com 13 povos, um diário de descobertas e opções de idioma em espanhol, português e inglês.',
    image: `${import.meta.env.BASE_URL}projects/ancestria.svg`,
    tags: ['Educação', 'Exploração 2.5D/3D', 'Povos originários', 'Idiomas'],
    impact: 'Apresentação em aula · Curso de Espanhol do NLC',
    medal: '',
    year: '2026',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Games', 'Educação', 'Desenvolvimento'],
    links: [{ label: 'Jogar no navegador', url: 'https://ancestriagame.vercel.app/' }],
  },
  {
    id: 'pulso',
    title: 'Pulso · Primeiros Socorros',
    category: 'Saúde',
    shortDesc: 'Manual digital de primeiros socorros em português, com leitura em voz alta, navegação por voz e ilustrações animadas.',
    fullDesc:
      'O Pulso organiza o conteúdo em etapas curtas e oferece um modo mãos livres para acompanhar o guia. A interface também permite ampliar o texto e navegar pelo teclado. É um projeto educativo que complementa a aprendizagem de primeiros socorros.',
    image: `${import.meta.env.BASE_URL}projects/pulso.svg`,
    tags: ['React', 'TypeScript', 'Web Speech API', 'Acessibilidade'],
    impact: 'Claro Campus Mobile 15',
    medal: '',
    year: '2026',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Saúde', 'Educação', 'Desenvolvimento'],
    links: [
      { label: 'Acessar o Pulso', url: 'https://ccm-pulso.vercel.app/' },
      { label: 'Código no GitHub', url: 'https://github.com/SouBeatrizKaroline/ClaroCampusMobile15_Pulso' },
    ],
  },
  {
    id: 'jurilab',
    title: 'JúriLab',
    category: 'Educação',
    shortDesc: 'Simulador de Tribunal do Júri para estudar casos fictícios e praticar sustentação oral.',
    fullDesc:
      'O JúriLab simula a preparação de um caso e os turnos de uma sessão do Tribunal do Júri. Dá para treinar como acusação ou defesa, analisar provas e depoimentos fictícios, gravar a sustentação oral e revisar a transcrição e a avaliação da prática. A plataforma também inclui salas para atividades em grupo.',
    image: `${import.meta.env.BASE_URL}projects/jurilab.svg`,
    tags: ['React', 'TypeScript', 'PocketBase', 'Simulação', 'Voz'],
    impact: 'Claro Campus Mobile 15',
    medal: '',
    year: '2026',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Educação', 'Desenvolvimento'],
    links: [
      { label: 'Acessar o JúriLab', url: 'https://ccm-jurisimulado.vercel.app/' },
    ],
  },
  {
    id: 'herbo',
    title: 'Herbo',
    category: 'Games',
    shortDesc: 'Aventura 3D sobre plantas, memória e cuidado em uma vila cercada por florestas.',
    fullDesc: 'A aprendiz de apotecária explora a vila, escuta moradores mais velhos e registra plantas e seus usos em um herbário. Retomei o projeto em 2026 para experimentar mecânicas e rever a narrativa sobre como o conhecimento passa de uma geração a outra.',
    image: `${import.meta.env.BASE_URL}projects/herbo.svg`,
    tags: ['Game Design', 'Desenvolvimento de Jogos', 'Narrativa', 'Projeto Independente'],
    impact: 'Projeto em desenvolvimento',
    medal: '',
    year: '2026',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Games', 'Desenvolvimento'],
    links: [],
  },
  {
    id: 'madahao',
    title: 'MadaHao',
    category: 'Games',
    shortDesc: 'Jogo educacional 2.5D com exploração, narrativa e descoberta cultural.',
    fullDesc: 'Jogo educacional 2.5D desenvolvido para falantes de português. A experiência leva a pessoa por um campus, um livro misterioso e uma aldeia fictícia inspirada na dinastia Han Oriental.',
    image: `${import.meta.env.BASE_URL}projects/madahao.svg`,
    tags: ['Games', 'Educação', 'Narrativa', 'Exploração', '2.5D'],
    impact: 'Projeto desenvolvido em 2026',
    medal: '',
    year: '2026',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Games', 'Educação'],
    links: [],
  },
  {
    id: 'polyglotrpg',
    title: 'PolyGlotRPG',
    category: 'Games',
    shortDesc: 'RPG educacional para aprender idiomas enquanto explora um mundo interativo.',
    fullDesc: 'RPG educacional interativo em 2.5D, pensado especialmente para falantes de português. A pessoa explora reinos, conversa com personagens, resolve enigmas e pratica idiomas por meio de desafios dentro do jogo.',
    image: `${import.meta.env.BASE_URL}projects/polyglotrpg.svg`,
    tags: ['Games', 'Educação', 'Idiomas', 'RPG', '2.5D'],
    impact: 'Projeto desenvolvido em 2026',
    medal: '',
    year: '2026',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Games', 'Educação'],
    links: [],
  },
  {
    id: 'destinai',
    title: 'DestinAI',
    category: 'IA',
    shortDesc:
      'Plataforma de IA preditiva para redução do desperdício de hortaliças na cadeia de suprimentos.',
    fullDesc:
      "Plataforma de IA preditiva desenvolvida em um desafio de inovação, focada na redução do desperdício de hortaliças na cadeia de suprimentos. O sistema utiliza modelos de machine learning para prever demanda, otimizar distribuição e conectar produtores a compradores de forma inteligente. A solução combina análise de dados, sustentabilidade e tecnologia AgroTech para criar impacto ambiental e econômico.",
    image: `${import.meta.env.BASE_URL}projects/destinai.svg`,
    tags: ['IA Preditiva', 'Sustentabilidade', 'AgroTech', 'Logística', 'Full Stack'],
    impact: '🥉 3º lugar na primeira etapa do Don’t Skip Challenge 2026',
    medal: '🥉',
    year: '2026',
    isAwarded: true,
    isInternational: false,
    filterTags: ['IA', 'Sustentabilidade', 'AgroTech', '3º Lugar', 'Top 3'],
    links: [
      { label: 'Pitch', url: 'https://www.youtube.com/watch?v=3e69Hha1HJI' },
      { label: 'Protótipo', url: 'https://www.youtube.com/watch?v=ZQvmKHnbrgU' },
    ],
  },
  {
    id: 'conecta',
    title: 'CONECTA',
    category: 'Desenvolvimento',
    shortDesc: 'Aplicativo, API e painel de análise desenvolvidos para o Hackathon Conexão Ancestral.',
    fullDesc:
      'Trabalhei em equipe em uma solução com três partes: o aplicativo reúne a experiência de uso, a API integra e processa os dados e o painel ajuda a acompanhar as informações.',
    image: `${import.meta.env.BASE_URL}projects/conecta.svg`,
    tags: ['Aplicativo', 'API', 'Análise de Dados'],
    impact: 'Hackathon Conexão Ancestral — Petronect',
    medal: '',
    year: '2026',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Desenvolvimento'],
    links: [
      { label: 'Demo do aplicativo', url: 'https://lnkd.in/eArSmt_v' },
      { label: 'Código do aplicativo', url: 'https://lnkd.in/etd-Uc8H' },
      { label: 'Código da API', url: 'https://lnkd.in/e4Fzurtr' },
      { label: 'Código do painel', url: 'https://lnkd.in/e2NFh79A' },
    ],
  },
  {
    id: 'nortia',
    title: 'NortIA',
    category: 'IA',
    shortDesc: 'Protótipo que ajuda empresas a identificar gargalos e priorizar melhorias nos processos.',
    fullDesc:
      'Desenvolvemos a NortIA na final do Don’t Skip Challenge 2026. A proposta combina indicadores, diagnóstico de processos e análise de planilhas para estimar o impacto de gargalos e orientar decisões sobre automação.',
    image: `${import.meta.env.BASE_URL}projects/nortia.svg`,
    tags: ['Análise de Processos', 'Automação', 'Dados'],
    impact: 'Projeto desenvolvido na final do Don’t Skip Challenge 2026',
    medal: '',
    year: '2026',
    isAwarded: false,
    isInternational: false,
    filterTags: ['IA', 'Desenvolvimento'],
    links: [],
  },
  {
    id: 'algo-esta-errado',
    title: 'Algo Está Errado!',
    category: 'Games',
    shortDesc: 'Jogo cooperativo de investigação em uma fazenda cheia de comportamentos estranhos.',
    fullDesc:
      'Criei o jogo com coautoria de Gabrielle Nalagaka para a GameJamPlus 26/27. Duas pessoas compartilham o teclado e trocam pistas para identificar três anomalias antes do fim do tempo.',
    image: `${import.meta.env.BASE_URL}projects/algo-esta-errado.svg`,
    tags: ['Cooperativo', 'Investigação', 'Puzzle'],
    impact: 'GameJamPlus 26/27',
    medal: '',
    year: '2026',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Games'],
    links: [
      { label: 'Página do jogo no itch.io', url: 'https://1aspiraqualquer.itch.io/algoestaerrado' },
    ],
  },
  {
    id: 'apotegatha',
    title: 'Apotegatha',
    category: 'Games',
    shortDesc: 'Simulação sobre uma gatinha apotecária que prepara poções e decide quais pedidos aceitar.',
    fullDesc:
      'O jogo foi feito em Unity e publicado em equipe para a Women Game Jam 2026. Na pele da apotecária, você coleta ingredientes, prepara poções e conhece as histórias dos clientes.',
    image: `${import.meta.env.BASE_URL}projects/apotegatha.svg`,
    tags: ['Unity', 'Simulação', 'Narrativa', '2D'],
    impact: 'Women Game Jam 2026',
    medal: '',
    year: '2026',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Games'],
    links: [
      { label: 'Página do jogo no itch.io', url: 'https://arcadeage.itch.io/apotegatha' },
    ],
  },
  {
    id: 'a-little-warmth',
    title: 'A Little Warmth',
    category: 'Games',
    shortDesc: 'Quebra-cabeça em que você guia folhas de outono para aquecer animais da floresta.',
    fullDesc:
      'Criei o jogo para a Mini Jam 221. Em cinco fases, você usa o vento para levar folhas a diferentes abrigos, contornando obstáculos antes da primeira geada.',
    image: `${import.meta.env.BASE_URL}projects/a-little-warmth.svg`,
    tags: ['Puzzle', 'Game Design', 'Navegador'],
    impact: 'Mini Jam 221: Autumn',
    medal: '',
    year: '2026',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Games'],
    links: [
      { label: 'Página do jogo no itch.io', url: 'https://1aspiraqualquer.itch.io/alittlewarmth' },
    ],
  },
  {
    id: 'afterparty',
    title: 'Afterparty',
    category: 'Games',
    shortDesc: 'Jogo sobre um pequeno robô que arruma a sala depois de uma festa.',
    fullDesc:
      'O jogador recolhe e recicla os restos da festa, melhora o equipamento e guarda quatro lembranças sem acordar a pessoa adormecida no sofá.',
    image: `${import.meta.env.BASE_URL}projects/afterparty.svg`,
    tags: ['Exploração', 'Game Design', 'Navegador'],
    impact: 'Publicado no itch.io',
    medal: '',
    year: '2026',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Games'],
    links: [
      { label: 'Página do jogo no itch.io', url: 'https://1aspiraqualquer.itch.io/afterparty' },
    ],
  },
  {
    id: 'paranormal-cleanup',
    title: 'Paranormal Cleanup',
    category: 'Games',
    shortDesc: 'Jogo de reflexos sobre um turno de limpeza em uma casa assombrada.',
    fullDesc:
      'Criei o jogo para a Trijam #393. O jogador precisa acertar os olhos que se abrem nas paredes e terminar a limpeza antes que o turno acabe.',
    image: `${import.meta.env.BASE_URL}projects/paranormal-cleanup.svg`,
    tags: ['Arcade', 'Reflexos', 'Game Design'],
    impact: 'Trijam #393',
    medal: '',
    year: '2026',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Games'],
    links: [
      { label: 'Página do jogo no itch.io', url: 'https://1aspiraqualquer.itch.io/paranormalcleanup' },
    ],
  },
  {
    id: 'raizesgo',
    title: 'RaízesGo',
    category: 'AgroTech',
    shortDesc:
      'Plataforma digital conectando produtores rurais, compradores institucionais e logística.',
    fullDesc:
      'Projeto vencedor do desafio Rotas de Integração – Centro-Oeste, promovido pela Enap em 2024. A plataforma conecta compradores institucionais a produtores locais e propõe um assistente virtual via WhatsApp para facilitar o acesso à solução.',
    image: `${import.meta.env.BASE_URL}projects/raizesgo.svg`,
    tags: [
      'React',
      'TypeScript',
      'Python',
      'PostgreSQL',
      'Docker',
      'Chatbot WhatsApp',
      'UX/UI',
      'GovTech',
      'AgroTech',
    ],
    impact: '🥇 1º lugar — Rotas de Integração 2024',
    medal: '🥇',
    year: '2024',
    isAwarded: true,
    isInternational: false,
    filterTags: ['Desenvolvimento', 'AgroTech', '1º Lugar', 'Top 3'],
    links: [{ label: 'Demonstração', url: 'https://youtu.be/F920sajuSaY' }],
  },
  {
    id: 'frutos-do-cerrado',
    title: 'Frutos do Cerrado',
    category: 'Sustentabilidade',
    shortDesc: 'Plataforma sustentável para comunidades quilombolas e preservação do Cerrado.',
    fullDesc:
      'Plataforma sustentável premiada no Hackathon do Governo de Goiás 2024, desenvolvida para apoiar comunidades quilombolas e a preservação do bioma Cerrado. A solução conecta produtores locais a mercados justos, promovendo valorização cultural, sustentabilidade ambiental e desenvolvimento econômico comunitário.',
    image: `${import.meta.env.BASE_URL}projects/frutos-do-cerrado.svg`,
    tags: ['Sustentabilidade', 'Comunidades', 'Cerrado', 'GovTech', 'UX/UI'],
    impact: '🏆 1º Lugar Hackathon Governo de Goiás 2024',
    medal: '🏆',
    year: '2024',
    isAwarded: true,
    isInternational: false,
    filterTags: ['Sustentabilidade', '1º Lugar', 'Top 3'],
    links: [{ label: 'GitHub', url: 'https://github.com/Jhaysavi/frutos-do-cerrado' }],
  },
  {
    id: 'reclapp',
    title: 'ReClapp',
    category: 'Sustentabilidade',
    shortDesc: 'MVP gamificado para reciclagem e educação ambiental.',
    fullDesc:
      'Solução gamificada de sustentabilidade reconhecida no Hack Frost NL 2.0. O projeto explora como mecânicas de jogo podem apoiar a reciclagem e a educação ambiental.',
    image: `${import.meta.env.BASE_URL}projects/reclapp.svg`,
    tags: ['Gamificação', 'Reciclagem', 'Educação Ambiental', 'React', 'UX/UI'],
    impact: '🥇 1º Lugar Hack Frost NL 2.0',
    medal: '🥇',
    year: '2022',
    isAwarded: true,
    isInternational: true,
    filterTags: ['Sustentabilidade', 'Games', '1º Lugar', 'Top 3', 'Internacionais'],
    links: [{ label: 'Devpost', url: 'https://devpost.com/software/reclapp/updates/318345' }],
  },
  {
    id: 'giro',
    title: 'Girô',
    category: 'Educação',
    shortDesc: 'Plataforma colaborativa de aprendizagem antirracista.',
    fullDesc:
      'Acervo virtual de práticas de aprendizagem decoloniais e antirracistas, criado para valorizar a diversidade cultural e apoiar educadores e comunidades. O projeto conquistou o 1º lugar no GiraLab Hackathon, em 2022, e teve continuidade por meio do GiraLab.',
    image: `${import.meta.env.BASE_URL}projects/giro.svg`,
    tags: ['Educação', 'Impacto Social', 'Antirracismo', 'UX/UI', 'Plataforma'],
    impact: '🥇 1º lugar — GiraLab Hackathon 2022',
    medal: '🏆',
    year: '2022',
    isAwarded: true,
    isInternational: false,
    filterTags: ['Educação', 'Impacto Social'],
    links: [{ label: 'Link', url: 'https://giralab.org.br/giro/' }],
  },
  {
    id: 'earth-connections',
    title: 'Earth Connections',
    category: 'Sustentabilidade',
    shortDesc: 'Solução inspirada em ciência e dados da NASA para conexões ambientais globais.',
    fullDesc:
      'Projeto da equipe Space6, finalista regional em Barueri no NASA Space Apps Challenge 2024. A proposta utiliza dados abertos e observações ambientais para aproximar temas científicos de impactos locais.',
    image: `${import.meta.env.BASE_URL}projects/earth-connections.svg`,
    tags: ['NASA', 'Dados', 'Sustentabilidade', 'Visualização', 'Full Stack'],
    impact: 'Finalista regional — NASA Space Apps Challenge 2024',
    medal: '',
    year: '2024',
    isAwarded: false,
    isInternational: true,
    filterTags: ['Sustentabilidade', 'Internacionais', 'Menções'],
    links: [
      {
        label: 'Página oficial NASA Space Apps',
        url: 'https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/space6/?tab=project',
      },
      { label: 'Demonstração', url: 'https://www.youtube.com/watch?v=qtBHqOawj3A' },
      {
        label: 'Protótipo (Figma)',
        url: 'https://www.figma.com/proto/O0tmEgdtLDcPDi3cEEtTin/NASA-SPACE-APPS',
      },
    ],
  },
  {
    id: 'os-greens',
    title: 'Os Greens e o Resgate do Sábado Animado',
    category: 'Games',
    shortDesc: 'Jogo de plataforma em que Lilo resgata os Greens para trazer o Sábado Animado de volta.',
    fullDesc:
      'Trabalhei no roteiro e na narrativa deste jogo da GameJamPlus 24/25. O jogador percorre uma ilha, desvia de armadilhas e desbloqueia fases ao resgatar os Greens. O jogo foi finalista no Desafio SBT.',
    image: 'https://img.itch.zone/aW1nLzE4MjQ5ODcxLmpwZw==/original/DjjVv0.jpg',
    imageCredit: 'Arte original do jogo publicada na minha página do itch.io.',
    tags: ['Game Design', 'Storytelling', 'Sustentabilidade', 'GameJam'],
    impact: 'Finalista — Desafio SBT | GameJamPlus 24/25',
    medal: '🏅',
    year: '2025',
    isAwarded: true,
    isInternational: false,
    filterTags: ['Games'],
    links: [
      { label: 'Jogo', url: 'https://soubeatrizkaroline.itch.io/greens' },
      { label: 'Pitch', url: 'https://www.youtube.com/watch?v=a_whtO1U2s4' },
      { label: 'Demonstração', url: 'https://www.youtube.com/watch?v=wLFgBpOJBKA' },
    ],
  },
  {
    id: 'greenhat',
    title: 'GreenHat',
    category: 'Educação Financeira',
    shortDesc: 'Projeto de educação sobre criptomoedas e incentivo à participação feminina em investimentos.',
    fullDesc:
      'Aplicativo desenvolvido para o TechTogether Miami, reconhecido com o prêmio Most Courageous Hack #1. A proposta combina educação sobre criptomoedas com incentivo à participação feminina em investimentos.',
    image: `${import.meta.env.BASE_URL}projects/greenhat.svg`,
    tags: ['Educação Financeira', 'Criptomoedas', 'Inclusão', 'Investimentos'],
    impact: '🏆 Winner Most Courageous Hack #1 TechTogether Miami',
    medal: '🏆',
    year: '2022',
    isAwarded: true,
    isInternational: true,
    filterTags: ['Educação', 'UX/UI', 'Impacto Social', 'Internacionais'],
    links: [],
  },
  {
    id: 'ium',
    title: 'ium',
    category: 'UX/UI',
    shortDesc: 'Solução de monitoramento fisiológico para pessoas trans e travestis em terapia hormonal.',
    fullDesc:
      'Solução desenvolvida para o Hacka Pride 2023 e premiada em 2º lugar. O ium propõe monitoramento fisiológico para pessoas trans e travestis em terapia hormonal, com foco em cuidado e acompanhamento.',
    image: `${import.meta.env.BASE_URL}projects/ium.svg`,
    tags: ['UX/UI', 'Acessibilidade', 'Impacto Social', 'Design'],
    impact: '🥈 2º Lugar Hacka Pride 2023',
    medal: '🥈',
    year: '2023',
    isAwarded: true,
    isInternational: false,
    filterTags: ['UX/UI', 'Impacto Social', '2º Lugar', 'Top 3'],
    links: [],
  },
  {
    id: 'equipa-tech',
    title: 'Equipa Tech',
    category: 'Desenvolvimento',
    shortDesc: 'Proposta para ampliar o acesso a equipamentos e internet para estudantes de tecnologia.',
    fullDesc:
      'Projeto premiado em 2º lugar no Potência Hack 2023. A Equipa Tech propõe ampliar o acesso a equipamentos e internet para estudantes de tecnologia, apoiando a continuidade dos estudos e a formação profissional.',
    image: `${import.meta.env.BASE_URL}projects/equipa-tech.svg`,
    tags: ['Desenvolvimento', 'Impacto Social', 'Mulheres em Tech', 'Plataforma'],
    impact: '🥈 2º Lugar Potência Hack 2023',
    medal: '🥈',
    year: '2023',
    isAwarded: true,
    isInternational: false,
    filterTags: ['Desenvolvimento', 'Impacto Social', '2º Lugar', 'Top 3'],
    links: [],
  },
  {
    id: 'infinitour',
    title: 'Infinit Tour',
    category: 'UX/UI',
    shortDesc: 'Plataforma de turismo com experiências personalizadas e interativas.',
    fullDesc:
      'Projeto premiado em 2º lugar no Hackatour Cataratas 2022. Contribuí com UI/UX Design, incluindo desenvolvimento visual e prototipação da solução de turismo.',
    image: `${import.meta.env.BASE_URL}projects/infinitour.svg`,
    tags: ['UX/UI', 'Desenvolvimento', 'Turismo', 'Gamificação', 'Mapas'],
    impact: '🥈 2º Lugar Hackatour Cataratas 2022',
    medal: '🥈',
    year: '2022',
    isAwarded: true,
    isInternational: false,
    filterTags: ['UX/UI', 'Desenvolvimento', '2º Lugar', 'Top 3'],
    links: [],
  },
  {
    id: 'viga',
    title: 'VIGA',
    category: 'Impacto Social',
    shortDesc: 'Solução para dar visibilidade e apoio a causas sociais.',
    fullDesc:
      'Projeto desenvolvido para o Hacka Pride 2022, classificado em 3º lugar. A solução visa dar visibilidade e apoio a causas sociais, combinando design impactante e funcionalidades práticas para promoção de direitos e inclusão.',
    image: `${import.meta.env.BASE_URL}projects/viga.svg`,
    tags: ['Impacto Social', 'Design', 'Inclusão', 'Visibilidade'],
    impact: '🥉 3º Lugar Hacka Pride 2022',
    medal: '🥉',
    year: '2022',
    isAwarded: true,
    isInternational: false,
    filterTags: ['Impacto Social', '3º Lugar', 'Top 3'],
    links: [],
  },
  {
    id: 'pegabot-extension',
    title: 'Pegabot Extension',
    category: 'Desenvolvimento',
    shortDesc: 'Extensão de navegador criada para o ecossistema Pegabot.',
    fullDesc:
      'Extensão desenvolvida durante o Hackathon Pegabot, reconhecida com Menção Honrosa. Minha contribuição incluiu suporte em front-end com HTML e CSS e prototipação no Figma.',
    image: `${import.meta.env.BASE_URL}projects/pegabot-extension.svg`,
    tags: ['Desenvolvimento', 'Front-end', 'Figma', 'Cidadania Digital'],
    impact: '🎖 Menção Honrosa Hackathon Pegabot',
    medal: '🎖',
    year: '2022',
    isAwarded: true,
    isInternational: false,
    filterTags: ['Desenvolvimento', 'UX/UI', 'Menções'],
    links: [],
  },
  {
    id: 'connectgreen',
    title: 'ConnectGreen',
    category: 'Sustentabilidade',
    shortDesc: 'Plataforma conectando iniciativas sustentáveis, empresas e cidadãos.',
    fullDesc:
      'Plataforma de tecnologia verde classificada no Top 10 do iHack2Green 2022. A solução conecta iniciativas sustentáveis, empresas e cidadãos, promovendo economia circular e cidades mais verdes através de tecnologia e engajamento comunitário.',
    image: `${import.meta.env.BASE_URL}projects/connectgreen.svg`,
    tags: ['Sustentabilidade', 'Economia Circular', 'Cidades Inteligentes', 'Plataforma'],
    impact: 'Top 10 — iHack2Green 2022',
    medal: '',
    year: '2022',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Sustentabilidade', 'Menções'],
    links: [],
  },
  {
    id: 'dionisa',
    title: 'Dionisa',
    category: 'Impacto Social',
    shortDesc:
      'Projeto combinando cultura, tecnologia e impacto social para empoderamento feminino.',
    fullDesc:
      'Projeto ficou em 7º lugar da Hackatona ADE Sampa 2022. A solução combina cultura, tecnologia e impacto social para promover o empoderamento feminino e a valorização de histórias inspiradoras, criando um espaço digital para narrativas de mudança.',
    image: `${import.meta.env.BASE_URL}projects/dionisa.svg`,
    tags: ['Impacto Social', 'Cultura', 'Empoderamento', 'Plataforma'],
    impact: '7º lugar — Hackatona ADE Sampa 2022',
    medal: '',
    year: '2022',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Impacto Social', 'Menções'],
    links: [],
  },
  {
    id: 'gansoffice',
    title: 'GansOffice',
    category: 'Games',
    shortDesc: 'Quebra-cabeças em um escritório onde um ganso tenta terminar o expediente.',
    fullDesc:
      'Trabalhei no design de narrativas deste jogo criado na Women Game Jam 2022. O jogador investiga um escritório vazio e resolve enigmas para sair.',
    image: `${import.meta.env.BASE_URL}projects/gansoffice.svg`,
    tags: ['Puzzle', 'Design de Narrativas', 'Game Jam'],
    impact: 'Women Game Jam 2022',
    medal: '',
    year: '2022',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Games'],
    links: [
      { label: 'Página do jogo no itch.io', url: 'https://arcadeage.itch.io/gansoffice' },
    ],
  },
  {
    id: 'rutherfox',
    title: 'Rutherfox',
    category: 'Games',
    shortDesc: 'Jogo de enigmas que acompanha Gânia, uma raposa que perdeu o lar em uma explosão.',
    fullDesc:
      'Contribuí com roteiro e planejamento neste projeto da CTRL ALT JAM. Gânia resolve desafios enquanto procura os responsáveis pela explosão.',
    image: `${import.meta.env.BASE_URL}projects/rutherfox.svg`,
    tags: ['Roteiro', 'Planejamento', 'Puzzle'],
    impact: 'CTRL ALT JAM',
    medal: '',
    year: '2022',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Games'],
    links: [
      { label: 'Página do jogo no itch.io', url: 'https://arcadeage.itch.io/rutherfox' },
    ],
  },
  {
    id: 'slime-escape',
    title: 'Slime Escape: The Prisoner 93',
    category: 'Games',
    shortDesc: 'Jogo de fuga em 3D em que um slime usa suas habilidades para escapar da prisão.',
    fullDesc:
      'Trabalhei com roteiro e gestão ágil na equipe. O jogo usa habilidades como invisibilidade e absorção na busca por uma rota de fuga.',
    image: `${import.meta.env.BASE_URL}projects/slime-escape.svg`,
    tags: ['Unity', 'Roteiro', 'Gestão Ágil', '3D'],
    impact: 'CTRL ALT JAM #2',
    medal: '',
    year: '2023',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Games'],
    links: [
      { label: 'Página do jogo no itch.io', url: 'https://beatrizkcs.itch.io/slime-escape' },
    ],
  },
  {
    id: 'ground-zero',
    title: 'Ground Zero',
    category: 'Games',
    shortDesc: 'Jogo de plataforma sobre uma produtora de games presa em um mundo paralelo.',
    fullDesc:
      'Criado em equipe na Game Jam das Minas 2023.2, o protótipo acompanha Maria enquanto ela reúne assinaturas e se adapta a um ciclo de dia e noite que altera seus sentidos.',
    image: `${import.meta.env.BASE_URL}projects/ground-zero.svg`,
    tags: ['Construct', 'Plataforma', 'Narrativa'],
    impact: 'Game Jam das Minas 2023.2',
    medal: '',
    year: '2023',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Games'],
    links: [
      { label: 'Página do jogo no itch.io', url: 'https://beatrizkcs.itch.io/ground-zero' },
    ],
  },
  {
    id: 'bb-rendinha',
    title: 'BB Rendinha',
    category: 'Educação',
    shortDesc: 'Experiência gamificada de educação financeira voltada a universitários.',
    fullDesc:
      'Criamos o BB Rendinha para o desafio Rolê que Rende. A proposta integra desafios e conteúdos sobre organização financeira, economia e investimentos à experiência do Banco do Brasil.',
    image: `${import.meta.env.BASE_URL}projects/bb-rendinha.svg`,
    tags: ['Educação Financeira', 'Gamificação', 'Produto Digital'],
    impact: '🥉 3º lugar — Rolê que Rende | Banco do Brasil Digital Week',
    medal: '🥉',
    year: '2024',
    isAwarded: true,
    isInternational: false,
    filterTags: ['Educação', '3º Lugar', 'Top 3'],
    links: [
      { label: 'Reconhecimento no IFPE', url: 'https://portal.ifpe.edu.br/recife/noticias/estudante-do-curso-tecnico-em-mecanica-do-ifpe-recife-se-destaca-em-projetos-de-inovacao-e-impacto-social/' },
    ],
  },
  {
    id: 'diagnos',
    title: 'Diagnós',
    category: 'Saúde',
    shortDesc: 'Projeto desenvolvido por uma equipe multidisciplinar no Autismo Tech 2023.',
    fullDesc:
      'O projeto ficou entre as dez soluções mais bem classificadas no Autismo Tech 2023.',
    image: `${import.meta.env.BASE_URL}projects/diagnos.svg`,
    tags: ['Saúde', 'Inclusão', 'Hackathon'],
    impact: 'Top 10 — Autismo Tech 2023',
    medal: '',
    year: '2023',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Saúde', 'Impacto Social'],
    links: [],
  },
  {
    id: 'solitude',
    title: 'Solitude',
    category: 'Games',
    shortDesc: 'Jogo de plataforma sobre reconstruir a autoestima após o fim de um relacionamento.',
    fullDesc:
      'Criado em equipe para a LiveJam do GameDev Toolkit. A história acompanha Sol, que precisa redescobrir como viver sozinha e reconstruir sua confiança depois de um término.',
    image: `${import.meta.env.BASE_URL}projects/solitude.svg`,
    tags: ['Plataforma', 'Narrativa', 'Game Jam'],
    impact: 'LiveJam — GameDev Toolkit',
    medal: '',
    year: '2023',
    isAwarded: false,
    isInternational: false,
    filterTags: ['Games'],
    links: [{ label: 'Página e download do jogo', url: 'https://beatrizkcs.itch.io/solitude' }],
  },
]

export const ACHIEVEMENT_FILTERS = [
  'Todos',
  '1º Lugar',
  'Top 3',
  'Menções',
  'Internacionais',
  'IA',
  'UX/UI',
  'Sustentabilidade',
  'Games',
  'Saúde',
  'Impacto Social',
]

export const PROJECT_FILTERS = [
  'Todos',
  'IA',
  'Desenvolvimento',
  'UX/UI',
  'Games',
  'Sustentabilidade',
  'Educação',
  'Saúde',
  'AgroTech',
  'Impacto Social',
]

export const UNIFIED_FILTERS = [
  'Todos',
  'IA',
  'Desenvolvimento',
  'UX/UI',
  'Games',
  'Sustentabilidade',
  'Saúde',
  'Educação',
  'Impacto Social',
  'AgroTech',
  'Internacional',
  'Premiados',
]

export const ACHIEVEMENT_STATS = [
  {
    emoji: '🏆',
    value: '70+',
    label: 'Hackathons',
    description:
      'Participações em maratonas de inovação no Brasil e em equipes e competições internacionais, desde 2022.',
  },
  {
    emoji: '🥇',
    value: '10+',
    label: 'Pódios Conquistados',
    description:
      'Premiações e colocações de destaque em diferentes áreas, incluindo tecnologia, inovação, games, sustentabilidade, impacto social e UX/UI.',
  },
  {
    emoji: '🌎',
    value: '6+',
    label: 'Países em competições',
    description:
      'Experiências em desafios com equipes e comunidades do Brasil, Estados Unidos, Canadá, Portugal, Reino Unido (Inglaterra) e Índia.',
  },
  {
    emoji: '🎮',
    value: String(PROJECTS.filter((project) => project.category === 'Games').length),
    label: 'Jogos no portfólio',
    description: 'Jogos autorais e em equipe, desenvolvidos em game jams e iniciativas independentes.',
  },
  {
    emoji: '🤝',
    value: 'Diversas',
    label: 'Equipes Multidisciplinares',
    description:
      'Experiência colaborando com profissionais de diferentes áreas em ambientes de alta pressão e desenvolvimento acelerado.',
  },
]

export const TECH_INTRO_TEXT =
  'Sou desenvolvedora Full Stack Júnior, formada em ADS, estudante de Marketing e Embaixadora Estudantil do Google. Trabalho em projetos digitais que conectam tecnologia, experiência do usuário, comunicação e criatividade.'

export const TECHNOLOGIES: TechnologyCategory[] = [
  {
    category: 'Frontend & Desenvolvimento Web',
    items: [
      { name: 'React.js', level: 'Intermediário', iconName: 'Code2' },
      { name: 'TypeScript', level: 'Básico/Intermediário', iconName: 'FileCode' },
      { name: 'JavaScript', level: 'Intermediário', iconName: 'Braces' },
      { name: 'HTML5', level: 'Intermediário', iconName: 'Code2' },
      { name: 'CSS3', level: 'Intermediário', iconName: 'Palette' },
      { name: 'Vite', level: 'Básico/Intermediário', iconName: 'Zap' },
    ],
  },
  {
    category: 'Backend & Dados',
    items: [
      { name: 'Node.js', level: 'Básico/Intermediário', iconName: 'Server' },
      { name: 'Python', level: 'Intermediário', iconName: 'Terminal' },
      { name: 'APIs REST & JSON', level: 'Básico/Intermediário', iconName: 'Network' },
      { name: 'SQLite / PocketBase', level: 'Básico', iconName: 'Database' },
      { name: 'PostgreSQL', level: 'Básico', iconName: 'Database' },
    ],
  },
  {
    category: 'Inteligência Artificial & Dados',
    items: [
      {
        name: 'IA Generativa / LLMs',
        level: 'Básico/Intermediário',
        iconName: 'Bot',
        note: 'em evolução através de projetos',
      },
      { name: 'Machine Learning', level: 'Básico', iconName: 'Brain' },
      { name: 'Análise de Dados', level: 'Intermediário', iconName: 'BarChart3' },
    ],
  },
  {
    category: 'Design & Produto',
    items: [
      { name: 'Figma', level: 'Intermediário', iconName: 'Layout' },
      { name: 'Prototipação', level: 'Intermediário', iconName: 'Layers' },
      { name: 'UX/UI Design', level: 'Intermediário', iconName: 'Component' },
      { name: 'Pesquisa com Usuários', level: 'Básico/Intermediário', iconName: 'Search' },
    ],
  },
  {
    category: 'Ferramentas & Competências',
    items: [
      { name: 'Git & GitHub', level: 'Intermediário', iconName: 'GitBranch' },
      { name: 'Microsoft Excel', level: 'Avançado', iconName: 'Table' },
      { name: 'Microsoft Office', level: 'Avançado', iconName: 'FileText' },
      { name: 'Metodologias Ágeis Scrum/Kanban', level: 'Intermediário', iconName: 'Users' },
      { name: 'Gestão de Projetos', level: 'Intermediário', iconName: 'ClipboardList' },
      { name: 'Gamificação', level: 'Intermediário', iconName: 'Gamepad' },
    ],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ines Cardinot',
    role: 'Integrante de equipe',
    context: 'Hackathon Conexão Ancestral',
    text: 'Trabalhei com a Beatriz no Hackathon Conexão Ancestral e vi de perto como ela apoiava diferentes frentes do time. Ela ajudou a definir prioridades e trabalhou com a gente até a entrega.',
    linkedin: 'https://www.linkedin.com/in/beatrizkcs/',
  },
  {
    id: '2',
    name: 'Carolina Ruas',
    role: 'Integrante de equipe',
    context: 'Hackathon Conexão Ancestral',
    text: 'A experiência da Bia em hackathons fez diferença para o nosso time. Ela compartilhou o que sabia com paciência e deu espaço para todo mundo contribuir com ideias.',
    linkedin: 'https://www.linkedin.com/in/beatrizkcs/',
  },
  {
    id: '3',
    name: 'Daniel Jasmelino',
    role: 'Colega de equipe',
    context: 'Capiba Quest · Ideathon P&D Design',
    text: 'Foi muito bom contar com a parceria da Bia e do Lucas no Capiba Quest. Na nossa equipe, juntar desenvolvimento, design e negócio fez diferença, e a demo jogável ajudou a mostrar a ideia na prática.',
    linkedin: 'https://pt.linkedin.com/posts/daniel-jasmelino_ideathon2026-capibaquest-osnoobs20-activity-7528528599281459200-5402',
    fromPublicPost: true,
  },
  {
    id: '4',
    name: 'Kesly Silva',
    role: 'Colega de equipe',
    context: 'CONECTA · Hackathon Conexão Ancestral',
    text: 'O Conexão Ancestral foi meu primeiro hackathon. Agradeço à Beatriz por compartilhar a experiência dela com a gente. Trocar ideias e ver o CONECTA tomando forma em equipe foi uma das melhores partes.',
    linkedin: 'https://br.linkedin.com/in/kesly-silva',
    fromPublicPost: true,
  },
  {
    id: '5',
    name: 'Monique Cardoso',
    role: 'Colega de equipe',
    context: 'Don’t Skip Challenge · Adapta Summit',
    text: 'Nossa equipe ficou em terceiro lugar na primeira etapa, e eu tive a oportunidade de apresentar a parte de negócios na final do Adapta Summit. Agradeço à Beatriz e à Sonia pela parceria nessa experiência.',
    linkedin: 'https://br.linkedin.com/in/moniquercardoso/en',
    fromPublicPost: true,
  },
  {
    id: '6',
    name: 'Pedro Jansen Guimarães',
    role: 'Colega de equipe',
    context: 'Space Mining Challenge',
    text: 'Agradeço à Beatriz, à Bianca e ao Davi pelo trabalho em equipe. Nosso diferencial foi combinar a pesquisa em mineração espacial com uma proposta de negócio.',
    linkedin: 'https://br.linkedin.com/in/pedro-jansen-guimaraes',
    fromPublicPost: true,
  },
  {
    id: '7',
    name: 'Joana D’arc Passos',
    role: 'Colega de equipe',
    context: 'Pesquisa e design em hackathon',
    text: 'Meu primeiro hackathon me mostrou como organizar o trabalho de UX ajuda a transformar uma ideia em algo útil para as pessoas. Agradeço à Beatriz, à Sofia e ao Daniel por essa experiência em equipe.',
    linkedin: 'https://br.linkedin.com/in/joanapassosmarques',
    fromPublicPost: true,
  },
  {
    id: '8',
    name: 'Daiane Fonseca',
    role: 'Colega de equipe',
    context: 'QuantGirls · Qollab × IonQ',
    text: 'Com a Beatriz e a Sonia, desenvolvi três projetos na QuantGirls e conquistamos seis prêmios em um fim de semana. Saí da experiência com uma visão mais ampla de como tornar a computação quântica acessível.',
    linkedin: 'https://br.linkedin.com/in/beatrizkcs',
    fromPublicPost: true,
  },
  {
    id: '9',
    name: 'Bianca Rezende',
    role: 'Colega de equipe',
    context: 'Aqua Lunar · Space Mining Challenge',
    text: 'No meu primeiro hackathon, trabalhei com a Beatriz, a Monique e o Davi para transformar pesquisa sobre água lunar em uma proposta prática. Gostei de unir experiências de áreas diferentes e agradeço à equipe pela parceria.',
    linkedin: 'https://br.linkedin.com/in/kayzwk',
    fromPublicPost: true,
  },
]

export const CONTACT_LINKS = {
  github: 'https://github.com/SouBeatrizKaroline',
  linkedin: 'https://www.linkedin.com/in/beatrizkcs/',
  instagram: 'https://www.instagram.com/1aspiraqualquer',
  email: '1aspiraqualquer@gmail.com',
  whatsappHref: 'https://wa.me/5581985708677',
  phone: '+55 81 9 8570-8677',
  phoneHref: 'tel:+5581985708677',
}


