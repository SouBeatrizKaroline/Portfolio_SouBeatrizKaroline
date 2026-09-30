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
  tags: string[]
  impact: string
  medal: string
  year: string
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
}

export const HERO_STATS = [
  { value: '15', label: 'Projetos & Hackathons', sub: 'Premiações e participações' },
  { value: '4', label: 'Países com Soluções', sub: 'Canadá, EUA, Inglaterra e Índia' },
  { value: '7', label: 'Vidas & Disciplinas', sub: 'Saúde, Tech, Design & Games' },
  { value: '4', label: 'Primeiros Lugares', sub: 'Incluindo vitória internacional' },
]

export const TIMELINE_EVENTS: Milestone[] = [
  {
    year: '2014',
    title: 'Primeiros passos em Engenharia & Construção',
    description:
      'Curso Técnico em Edificações — base em desenho técnico, modelagem, estruturas, noções de elétrica e resolução de problemas práticos.',
    icon: 'Building2',
  },
  {
    year: '2016',
    title: 'Saúde, Pessoas & Sistemas',
    description:
      'Início da graduação em Enfermagem Bacharelado pela UFPE — experiência com cuidado humano, saúde pública e gestão de equipes.',
    icon: 'Activity',
  },
  {
    year: '2022',
    title: 'Tecnologia, Hackathons & Inovação',
    description:
      'Entrada no ecossistema de tecnologia — desenvolvimento de soluções digitais, programação, UX/UI e prototipação em maratonas de inovação.',
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
    title: 'Primeiras Experiências Internacionais',
    description:
      'Primeira viagem internacional para competir presencialmente — ampliação da visão global e conexão com comunidades de inovação mundial.',
    icon: 'Plane',
  },
  {
    year: '2025',
    title: 'Incubação, Pré-incubação & Empreendedorismo',
    description:
      'Participação em programas de incubação e desenvolvimento de projetos estruturados — transformando ideias em produtos com potencial de mercado.',
    icon: 'Rocket',
  },
  {
    year: '2026',
    title: 'Construindo o Próximo Capítulo',
    description:
      'Busca por parcerias, mentorias e investimentos para transformar protótipos em soluções escaláveis com impacto social e global.',
    icon: 'Sparkles',
  },
]

export const TIMELINE_HIGHLIGHT =
  'De edificações à tecnologia, da saúde à inteligência artificial: minha trajetória é construída pela combinação de diferentes conhecimentos para criar soluções que conectam pessoas e impacto.'

export const SEVEN_LIVES: SkillLife[] = [
  {
    id: 1,
    emoji: '💻',
    title: 'Programação e Tecnologia',
    subtitle: 'Engenharia Frontend & Fullstack',
    description:
      'Desenvolvimento de aplicações reativas, acessíveis e escaláveis com React, TypeScript, TailwindCSS e arquiteturas modernas.',
    tags: ['React', 'TypeScript', 'Node.js', 'Vite', 'Tailwind'],
  },
  {
    id: 2,
    emoji: '🧠',
    title: 'Inteligência Artificial',
    subtitle: 'Engenharia de Prompts & RAG',
    description:
      'Criação de ecossistemas inteligentes, integração de LLMs, busca vetorial e modelos de recomendação contextualizados.',
    tags: ['AI Agents', 'Embeddings', 'Prompt Design', 'Python'],
  },
  {
    id: 3,
    emoji: '🩺',
    title: 'Saúde Digital & Biotech',
    subtitle: 'Domínio do Cuidado & Dados',
    description:
      'Aplicações direcionadas à triagem preditiva, gestão hospitalar e monitoramento inteligente de pacientes.',
    tags: ['Saúde Digital', 'Triagem Preditiva', 'UFPE', 'Usabilidade'],
  },
  {
    id: 4,
    emoji: '🎨',
    title: 'Design UX/UI & Acessibilidade',
    subtitle: 'Interfaces Humanizadas',
    description:
      'Arquitetura de informação limpa, prototipagem de alta fidelidade e conformidade com diretrizes WCAG de acessibilidade.',
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
      'Empoderamento de mulheres na tecnologia, mentoria em hackathons e facilitação de dinâmicas de ideação ágil.',
    tags: ['Mulheres em Tech', 'Mentoria', 'Agile', 'Comunidade'],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'destinai',
    title: 'DestinAI',
    category: 'IA',
    shortDesc:
      'Plataforma de IA preditiva para redução do desperdício de hortaliças na cadeia de suprimentos.',
    fullDesc:
      "Plataforma de IA preditiva desenvolvida em um desafio de inovação, focada na redução do desperdício de hortaliças na cadeia de suprimentos. O sistema utiliza modelos de machine learning para prever demanda, otimizar distribuição e conectar produtores a compradores de forma inteligente. A solução combina análise de dados, sustentabilidade e tecnologia AgroTech para criar impacto ambiental e econômico.",
    image: 'https://img.usecurling.com/p/600/400?q=ai%20agriculture%20vegetables&color=green',
    tags: ['IA Preditiva', 'Sustentabilidade', 'AgroTech', 'Logística', 'Full Stack'],
    impact: "🥉 3º lugar em desafio de inovação",
    medal: '🥉',
    year: '2024',
    isInternational: false,
    filterTags: ['IA', 'Sustentabilidade', 'AgroTech', '3º Lugar', 'Top 3'],
    links: [
      { label: 'Pitch', url: 'https://www.youtube.com/watch?v=3e69Hha1HJI' },
      { label: 'Protótipo', url: 'https://www.youtube.com/watch?v=ZQvmKHnbrgU' },
    ],
  },
  {
    id: 'raizesgo',
    title: 'RaízesGo',
    category: 'AgroTech',
    shortDesc:
      'Plataforma digital conectando produtores rurais, compradores institucionais e logística.',
    fullDesc:
      'Plataforma digital vencedora do Impulso Regional 2024 que conecta produtores rurais, compradores institucionais e serviços de logística em um único ecossistema. Desenvolvida com React, TypeScript e Python, a solução inclui chatbot WhatsApp para acesso simplificado, dashboard de gestão e sistema de matchmaking entre oferta e demanda. O projeto promove o desenvolvimento local e a transparência na cadeia agroalimentar.',
    image: 'https://img.usecurling.com/p/600/400?q=farm%20technology%20platform&color=green',
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
    impact: '🥇 1º Lugar Impulso Regional 2024',
    medal: '🥇',
    year: '2024',
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
    image: 'https://img.usecurling.com/p/600/400?q=brazilian%20savanna%20nature&color=green',
    tags: ['Sustentabilidade', 'Comunidades', 'Cerrado', 'GovTech', 'UX/UI'],
    impact: '🏆 1º Lugar Hackathon Governo de Goiás 2024',
    medal: '🏆',
    year: '2024',
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
      'MVP gamificado vencedor do Hack Frost NL 2.0, uma competição internacional de inovação. O aplicativo transforma a reciclagem e a educação ambiental em uma experiência engajadora, com sistema de pontuação, desafios e recompensas. A solução promove mudança de comportamento através de mecânicas de jogo aplicadas à sustentabilidade.',
    image: 'https://img.usecurling.com/p/600/400?q=recycling%20gamification%20app&color=green',
    tags: ['Gamificação', 'Reciclagem', 'Educação Ambiental', 'React', 'UX/UI'],
    impact: '🥇 1º Lugar Hack Frost NL 2.0',
    medal: '🥇',
    year: '2024',
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
      'Plataforma colaborativa de aprendizagem antirracista contemplada com investimento. O projeto cria um espaço digital para educação, reflexão e ação contra o racismo, utilizando narrativas interativas, conteúdo educacional e ferramentas de engajamento comunitário para promover inclusão e diversidade.',
    image: 'https://img.usecurling.com/p/600/400?q=education%20diversity%20learning&color=purple',
    tags: ['Educação', 'Impacto Social', 'Antirracismo', 'UX/UI', 'Plataforma'],
    impact: '🏆 Projeto contemplado com investimento',
    medal: '🏆',
    year: '2025',
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
      'Projeto classificado como Global Nominee no NASA Space Apps Challenge 2024 e finalista regional em Barueri/SP. A solução utiliza dados científicos e de satélite da NASA para criar visualizações interativas que conectam fenômenos ambientais globais a impactos locais, promovendo conscientização e ação climática.',
    image: 'https://img.usecurling.com/p/600/400?q=earth%20space%20nasa&color=blue',
    tags: ['NASA', 'Dados', 'Sustentabilidade', 'Visualização', 'Full Stack'],
    impact: '🌎 Global Nominee NASA Space Apps Challenge 2024',
    medal: '🌎',
    year: '2024',
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
    shortDesc: 'Jogo narrativo interativo sobre aventura e conscientização ambiental.',
    fullDesc:
      'Jogo desenvolvido para a GameJamPlus 24/25, classificado no Top 3. Uma experiência narrativa interativa que combina diversão e conscientização ambiental, onde personagens vegetais embarcam em uma aventura para resgatar o sábado animado. Atuei como cofundadora e roteirista, contribuindo com a narrativa e o storytelling do jogo.',
    image:
      'https://img.usecurling.com/p/600/400?q=video%20game%20adventure%20vegetables&color=orange',
    tags: ['Game Design', 'Storytelling', 'Sustentabilidade', 'GameJam'],
    impact: '🏅 Top 3 GameJamPlus 24/25',
    medal: '🏅',
    year: '2025',
    isInternational: false,
    filterTags: ['Games', 'Top 3'],
    links: [
      { label: 'Jogo', url: 'https://soubeatrizkaroline.itch.io/greens' },
      { label: 'Pitch', url: 'https://www.youtube.com/watch?v=a_whtO1U2s4' },
      { label: 'Demonstração', url: 'https://www.youtube.com/watch?v=wLFgBpOJBKA' },
    ],
  },
  {
    id: 'greenhat',
    title: 'GreenHat',
    category: 'IA',
    shortDesc: 'Solução de cibersegurança com IA e impacto social.',
    fullDesc:
      'Projeto vencedor do prêmio "Most Courageous Hack #1" no TechTogether Miami. Uma solução de cibersegurança com foco em IA que combina tecnologia e impacto social, protegendo usuários vulneráveis e promovendo segurança digital. O projeto destacou-se pela coragem e inovação na abordagem de problemas reais.',
    image: 'https://img.usecurling.com/p/600/400?q=cybersecurity%20tech%20shield&color=green',
    tags: ['Cibersegurança', 'IA', 'Impacto Social', 'Proteção'],
    impact: '🏆 Winner Most Courageous Hack #1 TechTogether Miami',
    medal: '🏆',
    year: '2024',
    isInternational: true,
    filterTags: ['IA', 'Impacto Social', '1º Lugar', 'Top 3', 'Internacionais'],
    links: [],
  },
  {
    id: 'ium',
    title: 'ium',
    category: 'UX/UI',
    shortDesc: 'Plataforma de inclusão e visibilidade LGBTQIA+ através de tecnologia.',
    fullDesc:
      'Plataforma desenvolvida para o Hacka Pride 2023, classificada em 2º lugar. A solução promove inclusão e visibilidade LGBTQIA+ através de tecnologia, com foco em UX/UI acessível e impacto social. O projeto combina design sensitivo, navegação intuitiva e conteúdo relevante para a comunidade.',
    image: 'https://img.usecurling.com/p/600/400?q=diversity%20inclusion%20tech&color=pink',
    tags: ['UX/UI', 'Acessibilidade', 'Impacto Social', 'Design'],
    impact: '🥈 2º Lugar Hacka Pride 2023',
    medal: '🥈',
    year: '2023',
    isInternational: false,
    filterTags: ['UX/UI', 'Impacto Social', '2º Lugar', 'Top 3'],
    links: [],
  },
  {
    id: 'equipa-tech',
    title: 'Equipa Tech',
    category: 'Desenvolvimento',
    shortDesc: 'Plataforma conectando mulheres a oportunidades de tecnologia.',
    fullDesc:
      'Plataforma desenvolvida para o Potência Hack 2023, classificada em 2º lugar. A solução conecta mulheres a oportunidades de tecnologia, oferecendo mentoria, networking e recursos de capacitação. O projeto promove inclusão digital e empoderamento feminino no ecossistema tech.',
    image: 'https://img.usecurling.com/p/600/400?q=women%20tech%20team%20empower&color=blue',
    tags: ['Desenvolvimento', 'Impacto Social', 'Mulheres em Tech', 'Plataforma'],
    impact: '🥈 2º Lugar Potência Hack 2023',
    medal: '🥈',
    year: '2023',
    isInternational: false,
    filterTags: ['Desenvolvimento', 'Impacto Social', '2º Lugar', 'Top 3'],
    links: [],
  },
  {
    id: 'infinitour',
    title: 'Infinitour',
    category: 'UX/UI',
    shortDesc: 'Plataforma de turismo com experiências personalizadas e interativas.',
    fullDesc:
      'Plataforma de turismo desenvolvida para o Hackatour Cataratas 2022, classificada em 2º lugar. A solução cria experiências turísticas personalizadas e interativas, conectando viajantes a atrações locais com foco em sustentabilidade e desenvolvimento regional. Inclui mapas interativos, recomendações e gamificação.',
    image: 'https://img.usecurling.com/p/600/400?q=tourism%20travel%20app&color=cyan',
    tags: ['UX/UI', 'Desenvolvimento', 'Turismo', 'Gamificação', 'Mapas'],
    impact: '🥈 2º Lugar Hackatour Cataratas 2022',
    medal: '🥈',
    year: '2022',
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
    image: 'https://img.usecurling.com/p/600/400?q=social%20impact%20visibility&color=pink',
    tags: ['Impacto Social', 'Design', 'Inclusão', 'Visibilidade'],
    impact: '🥉 3º Lugar Hacka Pride 2022',
    medal: '🥉',
    year: '2022',
    isInternational: false,
    filterTags: ['Impacto Social', '3º Lugar', 'Top 3'],
    links: [],
  },
  {
    id: 'pegabot-extension',
    title: 'Pegabot Extension',
    category: 'IA',
    shortDesc: 'Extensão de navegador para detectar e analisar bots em redes sociais.',
    fullDesc:
      'Extensão de navegador desenvolvida para o Hackathon Pegabot, recebeu Menção Honrosa. A ferramenta detecta e analisa comportamentos de bots em redes sociais, combinando IA e análise de padrões para combater desinformação. Inclui dashboard de análise e alertas em tempo real.',
    image: 'https://img.usecurling.com/p/600/400?q=browser%20extension%20security&color=blue',
    tags: ['IA', 'Desenvolvimento', 'Segurança', 'Análise de Dados'],
    impact: '🎖 Menção Honrosa Hackathon Pegabot',
    medal: '🎖',
    year: '2023',
    isInternational: false,
    filterTags: ['IA', 'Desenvolvimento', 'Menções'],
    links: [],
  },
  {
    id: 'connectgreen',
    title: 'ConnectGreen',
    category: 'Sustentabilidade',
    shortDesc: 'Plataforma conectando iniciativas sustentáveis, empresas e cidadãos.',
    fullDesc:
      'Plataforma de tecnologia verde classificada no Top 10 do iHack2Green 2022. A solução conecta iniciativas sustentáveis, empresas e cidadãos, promovendo economia circular e cidades mais verdes através de tecnologia e engajamento comunitário.',
    image: 'https://img.usecurling.com/p/600/400?q=green%20city%20sustainability&color=green',
    tags: ['Sustentabilidade', 'Economia Circular', 'Cidades Inteligentes', 'Plataforma'],
    impact: '🏆 Top 10 iHack2Green 2022',
    medal: '🏆',
    year: '2022',
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
      'Projeto classificado no Top 15 da Hackatona ADE Sampa 2022. A solução combina cultura, tecnologia e impacto social para promover o empoderamento feminino e a valorização de histórias inspiradoras, criando um espaço digital para narrativas de mudança.',
    image: 'https://img.usecurling.com/p/600/400?q=urban%20innovation%20culture&color=orange',
    tags: ['Impacto Social', 'Cultura', 'Empoderamento', 'Plataforma'],
    impact: '🏆 Top 15 Hackatona ADE Sampa 2022',
    medal: '🏆',
    year: '2022',
    isInternational: false,
    filterTags: ['Impacto Social', 'Menções'],
    links: [],
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
    value: '50+',
    label: 'Participações em Competições',
    description:
      'Hackathons, ideathons, game jams e desafios nacionais e internacionais de tecnologia, inovação e empreendedorismo.',
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
    value: '7+',
    label: 'Projetos Internacionais',
    description:
      'Projetos apresentados e desenvolvidos em competições e desafios globais de tecnologia e inovação.',
  },
  {
    emoji: '💡',
    value: '20+',
    label: 'MVPs Desenvolvidos',
    description:
      'Protótipos funcionais criados durante hackathons, pesquisas e desafios de inovação.',
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
  'Minha jornada combina desenvolvimento de software, design, inteligência artificial e resolução de problemas. Através de projetos, hackathons e estudos contínuos, sigo expandindo minhas habilidades para construir soluções digitais cada vez mais completas.'

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
    name: 'Monique Cardoso',
    role: 'Junior Data Scientist',
    context: 'NASA Space Apps Challenge 2024',
    text: 'Profissional muito colaborativa, dedicada e sempre disposta a ajudar. Sua capacidade de unir design e desenvolvimento trouxe grande valor ao time.',
  },
  {
    id: '2',
    name: 'Jefferson Carneiro',
    role: 'Design Tech Lead',
    context: 'Hackathon — Mesmo evento',
    text: 'A Beatriz tem uma visão estratégica incrível. Liderou a arquitetura do projeto com maestria, unindo tecnologia e design de forma excepcional.',
  },
  {
    id: '3',
    name: 'Pedro Izidio',
    role: 'Accessibility Product Designer',
    context: 'Hackathon',
    text: 'Trabalhar com a Beatriz é garantia de soluções criativas e um protótipo impecável. Sua energia e dedicação contagiam toda a equipe.',
  },
  {
    id: '4',
    name: 'Franciele Santos',
    role: 'Analista de Negócios',
    context: 'Reprograma + Santander',
    text: 'Uma profissional multidisciplinar fora de série. Sua determinação e visão de produto colocam qualquer projeto num patamar internacional.',
  },
  {
    id: '5',
    name: 'Ana Lins',
    role: 'Coordenadora Educacional — Gamescola',
    context: 'Woman Game Jam',
    text: 'A Beatriz une criatividade e técnica de forma única. Entregou narrativas interativas e mecânicas envolventes em tempo recorde no evento.',
  },
  {
    id: '6',
    name: 'Ana Paula Marcello',
    role: 'Tradutora e Programadora de Jogos',
    context: 'Woman Game Jam',
    text: 'Profissional excepcional em game design e storytelling. Sua paixão por games e tecnologia resulta em experiências imersivas e memoráveis.',
  },
  {
    id: '7',
    name: 'Gabriel Vieira',
    role: 'Cyber Security Specialist',
    context: 'Mentor — HackaPride',
    text: 'Como mentor, vi na Beatriz uma determinação rara. Ela transforma problemas complexos em soluções simples, seguras e com real impacto social.',
  },
  {
    id: '8',
    name: 'Jessica Donley',
    role: 'Somatic Therapy Specialist',
    context: 'Projeto Internacional',
    text: 'Colaborar com a Beatriz foi inspirador. Sua visão global e empatia criam soluções que conectam tecnologia, saúde e bem-estar de forma autêntica.',
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


