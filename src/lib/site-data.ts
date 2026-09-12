export interface Service {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  details: string[];
  basePrice: number;
  duration: string;
  recommendedFrequency: string;
  tags: string[];
  imageUrl: string;
  featured?: boolean;
}

export interface SimulatorOption {
  id: string;
  name: string;
  multiplier?: number;
  additionalCost?: number;
  description?: string;
  badge?: string;
}

export interface TimelineStep {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  iconName: 'Sparkles' | 'HeartHandshake' | 'Award' | 'Theater';
}

export interface CareChecklistItem {
  id: string;
  category: 'Bolsa & Itens' | 'Preparação & Coque' | 'Corpo & Mente' | 'Sapatilhas & Cuidados';
  title: string;
  description: string;
  iconName: 'ShoppingBag' | 'Sparkles' | 'Heart' | 'CheckCircle2';
}

export interface AuthorityBadge {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'ShieldCheck' | 'Sparkles' | 'Users' | 'Heart';
}

export interface GalleryResultItem {
  id: string;
  title: string;
  category: 'ballet' | 'palco' | 'aulas' | 'detalhes';
  categoryLabel: string;
  imageUrl: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
  technicalDetails: string;
  tag: string;
}

export interface ContactInfo {
  name: string;
  tagline: string;
  subtagline: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  cep: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappLink: string;
  instagramHandle: string;
  instagramUrl: string;
  googleMapsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const STUDIO_INFO: ContactInfo = {
  name: 'Studio Day Cardoso',
  tagline: 'A Dança que Cura a Alma',
  subtagline: 'Escola de Ballet & Dança de Alto Padrão em Ourinhos/SP',
  address: 'Av. Conselheiro Rodrigues Alves, 275',
  neighborhood: 'Centro',
  city: 'Ourinhos',
  state: 'SP',
  cep: '19901-010',
  phoneDisplay: '(14) 99639-1661',
  phoneRaw: '5514996391661',
  whatsappLink: 'https://wa.me/5514996391661?text=Ol%C3%A1!%20Visitei%20o%20site%20do%20Studio%20Day%20Cardoso%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20e%20agendar%20uma%20visita.',
  instagramHandle: '@daycardosostudio',
  instagramUrl: 'https://www.instagram.com/daycardosostudio/',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=-22.9785047,-49.8752503',
  coordinates: {
    lat: -22.9785047,
    lng: -49.8752503,
  },
};

export const AUTHORITY_BADGES: AuthorityBadge[] = [
  {
    id: 'badge-1',
    title: 'Piso Flutuante Profissional',
    subtitle: 'Absorção de impacto e proteção articular',
    iconName: 'ShieldCheck',
  },
  {
    id: 'badge-2',
    title: 'Turmas Reduzidas VIP',
    subtitle: 'Atenção e correção individualizada',
    iconName: 'Users',
  },
  {
    id: 'badge-3',
    title: 'A Dança que Cura a Alma',
    subtitle: 'Metodologia acolhedora e sensível',
    iconName: 'Heart',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'baby-class',
    name: 'Baby Class & Iniciação Lúdica',
    category: 'Iniciação (2 a 6 anos)',
    tagline: 'Os primeiros passos com ludicidade, afeto e magia.',
    description: 'Ambiente acolhedor e seguro onde os pequenos descobrem a musicalidade, a coordenação motora e o prazer de dançar através de narrativas encantadas e desenvolvimento psicomotor.',
    details: [
      'Estímulo motor, consciência espacial e ritmo',
      'Socialização e desenvolvimento da sensibilidade afetiva',
      'Ambiente lúdico com foco no bem-estar integral',
      'Turmas com número limitado para máximo cuidado'
    ],
    basePrice: 140,
    duration: '45 min/aula',
    recommendedFrequency: '2x por semana',
    tags: ['Infantil', 'Lúdico', 'Acolhimento', 'Primeiros Passos'],
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'ballet-classico',
    name: 'Ballet Clássico & Formação',
    category: 'Formação Técnica & Arte',
    tagline: 'Técnica, elegância, postura e leveza sublime.',
    description: 'Desenvolvimento estruturado da técnica clássica com foco em alinhamento postural, fortalecimento muscular, disciplina, graciosidade e expressão artística em cada movimento.',
    details: [
      'Desenvolvimento postural e consciência biomecânica',
      'Turmas divididas criteriosamente por faixa etária e nível',
      'Harmonia de movimento, flexibilidade e força sustentada',
      'Repertório clássico e preparação para espetáculos'
    ],
    basePrice: 170,
    duration: '60 min/aula',
    recommendedFrequency: '2x a 3x por semana',
    tags: ['Clássico', 'Postura', 'Disciplina', 'Excelência'],
    imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1000&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'pontas-repertorio',
    name: 'Técnica de Pontas & Repertório',
    category: 'Nível Intermediário & Avançado',
    tagline: 'A elevação máxima da técnica e expressividade.',
    description: 'Curso dedicado ao fortalecimento dos pés, tornozelos e centro de gravidade, permitindo a transição segura para as sapatilhas de ponta e o estudo de variações clássicas consagradas.',
    details: [
      'Fortalecimento articular e preparação específica de tornozelos',
      'Uso correto e seguro das sapatilhas de ponta',
      'Estudo de variações de repertório de grandes companhias',
      'Aprimoramento de equilíbrio, sustentação e linhas'
    ],
    basePrice: 190,
    duration: '60 min/aula',
    recommendedFrequency: '2x por semana',
    tags: ['Pontas', 'Avançado', 'Repertório', 'Alta Performance'],
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'ballet-adulto',
    name: 'Ballet Adulto & Iniciantes',
    category: 'Bem-estar & Realização Pessoal',
    tagline: 'Nunca é tarde para viver o sonho de dançar.',
    description: 'Aulas especialmente desenhadas para jovens e adultos que desejam iniciar na dança ou retomar a prática, respeitando a biomecânica adulta com foco em tônus, flexibilidade e prazer.',
    details: [
      'Ambiente livre de julgamentos e focado no acolhimento',
      'Ganho expressivo de flexibilidade, postura e força',
      'Alívio do estresse e reconexão profunda com o próprio corpo',
      'Adaptações ergonômicas para cada biotipo'
    ],
    basePrice: 160,
    duration: '60 min/aula',
    recommendedFrequency: '2x por semana',
    tags: ['Adultos', 'Autoestima', 'Flexibilidade', 'Sem Limites de Idade'],
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'danca-contemporanea',
    name: 'Dança Contemporânea',
    category: 'Expressão & Conexão Emocional',
    tagline: 'Fluidez, chão, respiração e liberdade criativa.',
    description: 'Uma linguagem profunda e poética que explora o movimento orgânico, a relação com a gravidade, a respiração e a conexão genuína com as emoções mais nobres da alma.',
    details: [
      'Pesquisa de movimento corporal contemporâneo e floorwork',
      'Trabalho de chão, quedas e suspensões fluídas',
      'Improvisação, sensibilidade musical e composição cênica',
      'Conexão mente, corpo e cura através da arte'
    ],
    basePrice: 160,
    duration: '60 min/aula',
    recommendedFrequency: '2x por semana',
    tags: ['Contemporâneo', 'Fluidez', 'Expressão', 'Cura Emocional'],
    imageUrl: 'https://images.unsplash.com/photo-1509670811275-7aaf45348800?q=80&w=1200&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'jazz-musical',
    name: 'Jazz & Danças Rítmicas',
    category: 'Energia & Dinâmica Teatral',
    tagline: 'Ritmo vibrante, vigor, força e musicalidade.',
    description: 'Trabalho corporal eletrizante que une técnica clássica à explosão coreográfica do jazz, desenvolvendo coordenação apurada, presença de palco e alta queima calórica.',
    details: [
      'Técnica precisa de giros, saltos e alinhamento',
      'Musicalidade, dinâmica sincopada e expressividade',
      'Aulas energizantes e excelente condicionamento físico',
      'Coreografias modernas e vibrantes'
    ],
    basePrice: 150,
    duration: '60 min/aula',
    recommendedFrequency: '2x por semana',
    tags: ['Jazz', 'Ritmo', 'Energia', 'Coreografia'],
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    featured: false,
  },
];

export const SIMULATOR_CONFIG = {
  frequencies: [
    { id: '1x', label: '1x por semana', multiplier: 0.75, description: 'Ideal para iniciação ou complemento suave' },
    { id: '2x', label: '2x por semana', multiplier: 1.0, description: 'Recomendação ideal para evolução técnica consistente', badge: 'Mais Escolhida' },
    { id: '3x', label: '3x por semana', multiplier: 1.35, description: 'Para alunas focadas em rápida evolução e palco', badge: 'Intensivo' },
    { id: 'vip', label: 'Passaporte VIP (Ilimitado)', multiplier: 1.75, description: 'Acesso a todas as modalidades do Studio sem limites', badge: 'Experiência Completa' },
  ],
  levels: [
    { id: 'baby', label: 'Baby & Infantil (2 a 7 anos)', baseModality: 'Baby Class & Iniciação Lúdica', basePrice: 140 },
    { id: 'juvenil', label: 'Infanto-Juvenil (8 a 14 anos)', baseModality: 'Ballet Clássico / Jazz', basePrice: 160 },
    { id: 'adulto', label: 'Adulto Iniciante / Intermediário', baseModality: 'Ballet Adulto & Flexibilidade', basePrice: 160 },
    { id: 'avancado', label: 'Formação & Avançado', baseModality: 'Ballet Clássico + Pontas', basePrice: 180 },
  ],
  optionals: [
    { id: 'pontas', label: 'Módulo Sapatilhas de Ponta', price: 50, description: 'Fortalecimento e técnica específica de pontas' },
    { id: 'contemporaneo', label: 'Aula Extra: Dança Contemporânea', price: 60, description: 'Expanda o repertório com aulas de fluidez e chão' },
    { id: 'alongamento', label: 'Alongamento & Flexibilidade Profunda', price: 45, description: 'Melhore abertura, postura e mobilidade articular' },
    { id: 'kit-uniforme', label: 'Kit Aluno Day Cardoso (Collant + Meia + Rede)', price: 120, isOneTime: true, description: 'Uniforme oficial padrão do Studio' },
  ],
  discounts: {
    semestral: 0.10, // 10% desconto
    anual: 0.15, // 15% desconto
  }
};

export const TIMELINE: TimelineStep[] = [
  {
    step: '01',
    number: 'Etapa 01',
    title: 'Aula Experimental de Acolhimento',
    subtitle: 'Gratuita & Sem Compromisso',
    description: 'Você ou sua filha(o) participam de uma aula completa para vivenciar a energia da sala, a estrutura do piso flutuante e a metodologia sensível do Studio Day Cardoso.',
    badge: '1º Encontro',
    iconName: 'Sparkles',
  },
  {
    step: '02',
    number: 'Etapa 02',
    title: 'Avaliação Individual & Nivelamento',
    subtitle: 'Cuidado com a sua Biomecânica',
    description: 'A professora avalia idade, experiência prévia e objetivos individuais para indicar a turma perfeita onde você evoluirá com segurança e prazer.',
    badge: 'Diagnóstico',
    iconName: 'HeartHandshake',
  },
  {
    step: '03',
    number: 'Etapa 03',
    title: 'Matrícula & Integração à Família',
    subtitle: 'Seu Novo Espaço de Expressão',
    description: 'Formalização simples, orientações do uniforme oficial e entrada na comunidade acolhedora do Studio no Centro de Ourinhos.',
    badge: 'Boas-Vindas',
    iconName: 'Award',
  },
  {
    step: '04',
    number: 'Etapa 04',
    title: 'O Palco & Espetáculo de Gala',
    subtitle: 'A Emoção do Reconhecimento',
    description: 'Apresentação em grandes teatros de Ourinhos com figurinos impecáveis, iluminação cênica e a celebração de todo o seu progresso artístico.',
    badge: 'Apresentação',
    iconName: 'Theater',
  },
];

export const CARE_GUIDE_ITEMS: CareChecklistItem[] = [
  {
    id: 'care-1',
    category: 'Bolsa & Itens',
    title: 'O que Levar na Bolsa de Dança',
    description: 'Sapatilhas de meia-ponta limpas, meias-calças reservas, garrafinha térmica com água fresca, toalhinha de rosto e casaco leve para o pós-aula.',
    iconName: 'ShoppingBag',
  },
  {
    id: 'care-2',
    category: 'Preparação & Coque',
    title: 'O Coque Perfeito & Postura de Cabeça',
    description: 'Cabelos bem presos com elástico firme, rede protetora invisível e grampos reforçados. O coque alto alonga o pescoço e garante precisão nos giros.',
    iconName: 'Sparkles',
  },
  {
    id: 'care-3',
    category: 'Corpo & Mente',
    title: 'Alimentação Leve & Hidratação',
    description: 'Faça um lanche leve rico em carboidratos complexos (como frutas e castanhas) 40 minutos antes da aula. Mantenha hidratação contínua antes e depois.',
    iconName: 'Heart',
  },
  {
    id: 'care-4',
    category: 'Sapatilhas & Cuidados',
    title: 'Preservação das Sapatilhas',
    description: 'Nunca lave suas sapatilhas de couro ou lona na máquina. Deixe-as arejar à sombra após cada ensaio e mantenha as fitas e elásticos sempre bem costurados.',
    iconName: 'CheckCircle2',
  },
];

export const GALLERY_ITEMS: GalleryResultItem[] = [
  {
    id: 'gal-1',
    title: 'Expressão & Conexão Sublime',
    category: 'ballet',
    categoryLabel: 'Ballet Clássico',
    imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1200&auto=format&fit=crop',
    aspect: 'tall',
    caption: 'Alinhamento de braços e arabesque fluido em sala de ensaios com iluminação natural.',
    technicalDetails: 'Técnica Vaganova adaptada • Foco em arabesque e sustentação escapular • Sala Principal Day Cardoso',
    tag: 'Técnica & Leveza',
  },
  {
    id: 'gal-2',
    title: 'Disciplina e Precisão na Barra',
    category: 'aulas',
    categoryLabel: 'Rotina de Sala',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
    aspect: 'square',
    caption: 'O trabalho meticuloso de pés, en dehors e postura nas barras de madeira tratada.',
    technicalDetails: 'Aquecimento articular • Trabalho de pés e elevação de calcanhar • Turma Adulto & Formação',
    tag: 'Barra & Postura',
  },
  {
    id: 'gal-3',
    title: 'A Magia do Palco em Ourinhos',
    category: 'palco',
    categoryLabel: 'Gala & Espetáculos',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    aspect: 'wide',
    caption: 'O momento inesquecível de subir ao palco e compartilhar a paixão pela dança com a plateia.',
    technicalDetails: 'Espetáculo Anual de Gala • Figurino clássico sob medida • Teatro Municipal de Ourinhos',
    tag: 'Espetáculo Anual',
  },
  {
    id: 'gal-4',
    title: 'Fluidez & Expressão Contemporânea',
    category: 'ballet',
    categoryLabel: 'Contemporâneo',
    imageUrl: 'https://images.unsplash.com/photo-1509670811275-7aaf45348800?q=80&w=1200&auto=format&fit=crop',
    aspect: 'tall',
    caption: 'A dança como caminho de libertação, respiração e conexão emocional profunda.',
    technicalDetails: 'Floorwork & Suspensão • Pesquisa coreográfica livre • Cura e Expressão',
    tag: 'A Dança que Cura',
  },
  {
    id: 'gal-5',
    title: 'O Ritual das Sapatilhas de Ponta',
    category: 'detalhes',
    categoryLabel: 'Bastidores & Detalhes',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
    aspect: 'square',
    caption: 'O cuidado com a amarração das fitas de cetim e a preparação para elevar o corpo.',
    technicalDetails: 'Sapatilhas de ponta profissional • Amarração clássica no tornozelo • Nível Avançado',
    tag: 'Sapatilhas de Ponta',
  },
  {
    id: 'gal-6',
    title: 'Energia, Saltos e Dinâmica',
    category: 'aulas',
    categoryLabel: 'Jazz & Movimento',
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1200&auto=format&fit=crop',
    aspect: 'wide',
    caption: 'Explosão rítmica, entusiasmo e trabalho coreográfico conjunto nas aulas de Jazz.',
    technicalDetails: 'Grand jeté e giros com controle • Coordenação rítmica • Expressão cênica',
    tag: 'Ritmo & Vigor',
  },
  {
    id: 'gal-7',
    title: 'Iniciação e Primeiros Passos',
    category: 'aulas',
    categoryLabel: 'Baby Class',
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop',
    aspect: 'square',
    caption: 'Ludicidade e afeto nos primeiros passos das pequenas bailarinas no Studio Day Cardoso.',
    technicalDetails: 'Coordenação psicomotora • Musicalidade e imaginação • Turma Baby Class (2 a 6 anos)',
    tag: 'Baby Class',
  },
  {
    id: 'gal-8',
    title: 'Gala & Coreografia no Palco',
    category: 'palco',
    categoryLabel: 'Gala & Espetáculos',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
    aspect: 'wide',
    caption: 'Grande produção coreográfica com iluminação cênica de teatro, figurinos clássicos e aclamação do público.',
    technicalDetails: 'Espetáculo de Encerramento • Figurinos exclusivos bordados • Teatro Municipal de Ourinhos',
    tag: 'Grande Final',
  },
  {
    id: 'gal-9',
    title: 'Bastidores & Figurinos de Tule',
    category: 'detalhes',
    categoryLabel: 'Bastidores & Detalhes',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
    aspect: 'tall',
    caption: 'A beleza dos tules, rendas e a preparação minuciosa antes da entrada em cena.',
    technicalDetails: 'Acabamento artesanal • Preparação de camarim • Tutu clássico e romântico',
    tag: 'Camarim & Figurinos',
  },
];

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  content: string;
  date?: string;
  source?: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Carolina Mendes',
    role: 'Mãe de Aluna Baby Class (5 anos)',
    rating: 5,
    content: 'Minha filha iniciou no Studio Day Cardoso tímida e hoje se expressa com uma confiança linda! O cuidado da equipe e a paciência com as pequenas é algo raro de encontrar. O espetáculo no fim de ano foi de chorar de emoção.',
    date: 'Ourinhos/SP',
    source: 'Google Avaliações',
  },
  {
    id: 'test-2',
    author: 'Beatriz Vasconcelos',
    role: 'Aluna de Ballet Adulto Iniciante',
    rating: 5,
    content: 'Eu achava que já havia passado da idade de começar ballet. No Studio Day Cardoso fui acolhida com tanto carinho e respeito! Minha postura melhorou 100%, minhas dores nas costas sumiram e a aula é a melhor hora da minha semana.',
    date: 'Ourinhos/SP',
    source: 'Google Avaliações',
  },
  {
    id: 'test-3',
    author: 'Mariana Duarte Sampaio',
    role: 'Aluna de Formação & Pontas',
    rating: 5,
    content: 'A estrutura do estúdio com piso flutuante faz toda a diferença para treinar saltos e pontas sem sobrecarregar as articulações. A professora Dayana ensina com rigor técnico e muito amor à arte.',
    date: 'Ourinhos/SP',
    source: 'Google Avaliações',
  },
];

export const TESTIMONIALS_CONFIG = {
  note: 'Avaliações verificadas de alunas e famílias da comunidade de Ourinhos/SP.',
  source: 'Google Avaliações (Nota 5.0 ★★★★★)',
  items: TESTIMONIALS,
};

export const PILLARS = [
  {
    number: '01',
    title: 'Técnica & Biomecânica',
    description: 'Ensino estruturado com precisão anatômica, garantindo evolução segura e proteção às articulações.',
  },
  {
    number: '02',
    title: 'Expressão & Cura da Alma',
    description: 'A dança como ferramenta transformadora de autoconfiança, superação emocional e sensibilidade artística.',
  },
  {
    number: '03',
    title: 'Disciplina & Graciosidade',
    description: 'Desenvolvimento do foco, elegância e perseverança que acompanham a aluna por toda a vida.',
  },
  {
    number: '04',
    title: 'Comunidade & Acolhimento',
    description: 'Um espaço livre de julgamentos, onde cada aluna é celebrada em sua singularidade e beleza.',
  },
];
