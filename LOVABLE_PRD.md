# 🩰 PRD & Blueprint de Migração — Studio Day Cardoso (Lovable)

Este documento contém todo o **Product Requirements Document (PRD)**, tokens de design, catálogo de dados completo, componentes, regras de negócios e o **Prompt Mestre de Construção** para recriar 100% fielmente este projeto no **Lovable**.

---

## 1. Visão Geral do Produto

- **Nome do Projeto**: Studio Day Cardoso — Landing Page & Plataforma Institucional Interativa
- **Slogan / Tagline**: *A Dança que Cura a Alma*
- **Segmento**: Escola de Ballet Clássico, Dança Contemporânea, Jazz e Baby Class de Alto Padrão
- **Localização**: Av. Conselheiro Rodrigues Alves, 275 - Centro, Ourinhos - SP (CEP: 19901-010)
- **WhatsApp / Telefone**: (14) 99639-1661 | `5514996391661`
- **Instagram**: `@daycardosostudio`
- **Público-Alvo**: Mães de crianças de 2 a 12 anos, jovens e adultas que sonham em praticar ballet (sem limite de idade), bailarinas de nível intermediário/avançado buscando técnica de pontas e piso flutuante profissional.

---

## 2. Stack Tecnológica & Dependências (Lovable)

- **Framework**: React 18+ (Vite SPA) com TypeScript
- **Estilização**: Tailwind CSS v3 / v4
- **Ícones**: `lucide-react` (Sparkles, Heart, HeartHandshake, ShieldCheck, Users, Award, Camera, BookOpen, Clock, MapPin, Phone, Instagram, MessageCircle, Star, Quote, ArrowRight, Check, CheckCircle2, ChevronLeft, ChevronRight, X, Maximize2, ShoppingBag, Theater, Calculator, ExternalLink, Navigation, Copy, Share2, Sparkle)
- **Animações**: `motion/react` ou `framer-motion` (fade-in, slide-up, scale on hover)
- **Tipografia**:
  - Títulos & Editorial: `DM Serif Display` (Google Fonts)
  - Textos & Interface: `Fira Sans` / `Plus Jakarta Sans`

---

## 3. Design System & Tokens Visuais (Estética Ballet Princesa Sofisticado)

### 3.1. Paleta de Cores (Hex & Tailwind Variables)

```css
/* Backgrounds & Canvas */
--color-ballet-canvas: #FFF5F8;         /* Fundo principal da página */
--color-ballet-canvas-subtle: #FDF0F5;  /* Fundo alternado de seções */
--color-ballet-pink-light: #FCE8EF;     /* Rosa bebê acetinado */
--color-ballet-pink: #F7C5D5;           /* Rosa suave iluminado */
--color-ballet-pink-vibrant: #E26D8E;   /* Rosa vibrante / destaque primário */
--color-ballet-pink-dark: #C43660;      /* Rosa escuro / texto de ênfase */

/* Acentos Metálicos */
--color-rose-gold: #E6A892;
--color-rose-gold-dark: #C47D68;
--color-tiara-gold: #D49D42;

/* Textos & Contrastes (Ameixa Profundo) */
--color-plum-deep: #2A0E1D;            /* Títulos e texto principal (alto contraste) */
--color-plum-rich: #481E34;
--color-plum-muted: #6E4358;           /* Subtítulos e parágrafos */
--color-plum-subtle: #9E748B;          /* Textos de apoio e bordas */
```

### 3.2. Utilitários de Vidro & Glassmorphism

```css
/* Background Noise */
.bg-noise {
  background-image: radial-gradient(rgba(216, 77, 116, 0.07) 1px, transparent 0);
  background-size: 24px 24px;
}

/* Glass Rose Cards */
.glass-rose-card {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(226, 109, 142, 0.28);
  box-shadow: 0 16px 36px -12px rgba(184, 51, 92, 0.08), 0 0 20px -8px rgba(247, 197, 213, 0.4);
}

/* Glass Pills */
.glass-pink-pill {
  background: linear-gradient(135deg, rgba(255, 240, 245, 0.9) 0%, rgba(247, 197, 213, 0.6) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(216, 77, 116, 0.32);
  color: #B32751;
}

/* Gradientes de Destaque */
.rose-gradient-bg {
  background: linear-gradient(135deg, #F08CA7 0%, #E25D82 50%, #C43660 100%);
  color: #FFFFFF;
}

.rose-gradient-text {
  background: linear-gradient(135deg, #B82852 0%, #E26D8E 50%, #D49D42 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.shadow-lifted {
  box-shadow: 0 16px 36px -12px rgba(184, 51, 92, 0.1), 0 0 22px -6px rgba(247, 197, 213, 0.35);
}
```

---

## 4. Estrutura de Arquivos Recomendada

```
src/
├── lib/
│   └── site-data.ts           # Banco de dados estático, constantes, textos e itens
├── components/
│   ├── Navbar.tsx             # Menu fixo com blur, logo e drawer mobile
│   ├── Hero.tsx               # Dobra principal com imagem mascarada, stats e CTAs
│   ├── Positioning.tsx        # Faixa com 3 pilares de autoridade (piso flutuante, etc.)
│   ├── AboutStudio.tsx        # Seção Day Cardoso, metodologia, história e foto
│   ├── Modalities.tsx         # Grid com as 6 modalidades, tags e preços
│   ├── ModalityModal.tsx      # Modal com detalhes completos da modalidade
│   ├── BudgetSimulator.tsx    # Simulador interativo com cálculo de frequência e opcionais
│   ├── StudentJourney.tsx     # Linha do tempo editorial em 4 etapas (Do 1º passo ao palco)
│   ├── EmotionalBanner.tsx    # Banner imersivo "A Dança que Cura a Alma"
│   ├── ExperiencePillars.tsx  # 4 Princípios numerados de excelência
│   ├── MomentsEvents.tsx      # Seção dos festivais anuais e apresentações de gala
│   ├── Gallery.tsx            # Galeria com filtros por categoria e hover editorial
│   ├── LightboxModal.tsx      # Visualizador de imagem com ficha técnica e botão WhatsApp
│   ├── CareGuideChecklist.tsx # Guia de bolsa, coque e cuidados com botão de copiar
│   ├── Testimonials.tsx       # Prova social com nota 5.0 do Google e depoimentos
│   ├── IntermediateCTA.tsx    # Chamada de conversão antes da localização
│   ├── LocationMap.tsx        # Endereço, telefones e Google Maps embed interativo
│   ├── ContactSection.tsx     # Formulário com pré-formatação para WhatsApp
│   ├── Footer.tsx             # Rodapé completo, links institucionais e direitos
│   ├── MobileStickyCTA.tsx    # Barra fixa inferior exclusiva para mobile
│   └── VisitModal.tsx         # Modal de agendamento de aula gratuita e visita
├── App.tsx                    # Orquestrador central e gerenciamento de modais
├── index.css                  # Estilos globais, temas e classes personalizadas
└── main.tsx                   # Entry point React
```

---

## 5. Estrutura de Dados Completa (`src/lib/site-data.ts`)

```typescript
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

export const STUDIO_INFO = {
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

export const AUTHORITY_BADGES = [
  { id: 'badge-1', title: 'Piso Flutuante Profissional', subtitle: 'Absorção de impacto e proteção articular', iconName: 'ShieldCheck' },
  { id: 'badge-2', title: 'Turmas Reduzidas VIP', subtitle: 'Atenção e correção individualizada', iconName: 'Users' },
  { id: 'badge-3', title: 'A Dança que Cura a Alma', subtitle: 'Metodologia acolhedora e sensível', iconName: 'Heart' },
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
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1509670811275-7aaf45348800?q=80&w=1000&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1000&auto=format&fit=crop',
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
    semestral: 0.10,
    anual: 0.15,
  }
};

export const TIMELINE = [
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

export const CARE_GUIDE_ITEMS = [
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

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Expressão & Conexão Sublime',
    category: 'ballet',
    categoryLabel: 'Ballet Clássico',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1000&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?q=80&w=1200&auto=format&fit=crop',
    aspect: 'wide',
    caption: 'O momento inesquecível de subir ao palco e compartilhar a paixão pela dança com a plateia.',
    technicalDetails: 'Espetáculo Anual de Gala • Figurino clássico sob medida • Teatro Municipal de Ourinhos',
    tag: 'Espetáculo Anual',
  },
  {
    id: 'gal-4',
    title: 'Fluidez Contemporânea',
    category: 'ballet',
    categoryLabel: 'Contemporâneo',
    imageUrl: 'https://images.unsplash.com/photo-1509670811275-7aaf45348800?q=80&w=1000&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop',
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
];

export const TESTIMONIALS = [
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

export const PILLARS = [
  { number: '01', title: 'Técnica & Biomecânica', description: 'Ensino estruturado com precisão anatômica, garantindo evolução segura e proteção às articulações.' },
  { number: '02', title: 'Expressão & Cura da Alma', description: 'A dança como ferramenta transformadora de autoconfiança, superação emocional e sensibilidade artística.' },
  { number: '03', title: 'Disciplina & Graciosidade', description: 'Desenvolvimento do foco, elegância e perseverança que acompanham a aluna por toda a vida.' },
  { number: '04', title: 'Comunidade & Acolhimento', description: 'Um espaço livre de julgamentos, onde cada aluna é celebrada em sua singularidade e beleza.' },
];
```

---

## 6. Lógica de Interatividade & Modais

1. **Simulador de Matrícula & Planos (`BudgetSimulator.tsx`)**:
   - `monthlyEstimate = (basePrice * frequencyMultiplier) + sum(monthlyOptionals)`
   - Desconto Semestral (10%) e Anual (15%) com economia calculada
   - Botão de envio que formata os dados selecionados em mensagem pré-preenchida no WhatsApp.
2. **Modal de Visita & Aula Experimental (`VisitModal.tsx`)**:
   - Formulário com Nome, Modalidade pré-selecionada, Tipo (Aula Experimental, Conhecer Espaço, Informações de Mensalidade) e Observações.
   - Ao submeter, abre o WhatsApp formatado com todos os dados.
3. **Modal de Detalhes da Modalidade (`ModalityModal.tsx`)**:
   - Exibe foto grande, descrição, benefícios em bullet points, duração e frequência recomendada com botão "Agendar Esta Modalidade".
4. **Lightbox de Galeria (`LightboxModal.tsx`)**:
   - Navegação por setas (anterior/próxima), atalho de teclado `Esc`, `ArrowLeft`, `ArrowRight` e botão "Quero Dançar Isso" integrado ao WhatsApp.
5. **Checklist & Guia da Bailarina (`CareGuideChecklist.tsx`)**:
   - Botão para copiar checklist diretamente para o clipboard do celular e botão de compartilhamento via WhatsApp.
6. **Mobile Sticky Bar (`MobileStickyCTA.tsx`)**:
   - Fica fixa no rodapé do celular após 300px de rolagem, garantindo alta conversão para aula experimental.

---

## 7. PROMPT MESTRE PARA O LOVABLE (Copie e Cole)

```markdown
Crie uma landing page editorial e ultra sofisticada em React + TypeScript + Tailwind CSS para o "Studio Day Cardoso" em Ourinhos/SP, uma conceituada escola de ballet e dança com o lema "A Dança que Cura a Alma".

A estética visual DEVE ser no estilo "Princesa Ballet Clássico Sofisticado":
- Fundo canvas em tom blush suave (#FFF5F8 e #FDF0F5) com sutil efeito pontilhado radial (.bg-noise).
- Superfícies em rosa bebê acetinado (#FCE8EF) e vidro translúcido (Glassmorphism com backdrop-blur-md, bordas delicadas em rgba(226, 109, 142, 0.28) e sombras peroladas).
- Gradientes de destaque "Rose Gold" (de #F08CA7 a #C43660) para botões de CTA e títulos de destaque.
- Tipografia: Serifada editorial de alto padrão para títulos (DM Serif Display) e sem serifa moderna para leitura (Fira Sans / Plus Jakarta Sans) na cor ameixa profundo (#2A0E1D) com altíssima legibilidade.

A página deve conter as seguintes 18 seções e componentes completos e funcionais:

1. **Header / Navbar fixo**: Logo "STUDIO DAY CARDOSO" com subtítulo "A Dança que Cura a Alma", links de navegação suave (#inicio, #sobre, #modalidades, #simulador, #jornada, #galeria, #guia, #contato), botão CTA "Agendar Aula" e menu gaveta mobile responsivo com links rápidos e WhatsApp.
2. **Hero Section**: Tag pill cintilante "Ballet Clássico & Dança de Alto Padrão em Ourinhos/SP", título principal "Onde a técnica do ballet encontra a cura da alma.", parágrafo inspirador, 3 botões de ação (Agendar Aula Gratuita, Ver Modalidades, Falar no WhatsApp), 3 badges de autoridade (Piso Flutuante Profissional, Turmas Reduzidas VIP, A Dança que Cura a Alma) e foto de bailarina em pose clássica com máscara editorial estilizada.
3. **Positioning Section**: 3 cartões de destaque reforçando a proteção articular (piso flutuante anti-impacto), turmas VIP com correção personalizada e metodologia de acolhimento.
4. **About Studio Section**: Apresentação da fundadora Dayana Cardoso, história, ambiente acolhedor, valores pedagógicos e foto de estúdio com selos de garantia.
5. **Modalities Section**: Grid com 6 modalidades (Baby Class 2-6 anos, Ballet Clássico & Formação, Técnica de Pontas & Repertório, Ballet Adulto Iniciante, Dança Contemporânea, Jazz & Danças Rítmicas). Cada card tem imagem, tags, valor base a partir de, duração e botão "Explorar Detalhes" que abre um modal com ficha técnica.
6. **BudgetSimulator Section**: Simulador interativo onde o usuário escolhe a faixa etária/nível, a frequência semanal (1x, 2x, 3x, VIP Ilimitado) e adicionais opcionais (Pontas, Contemporâneo, Alongamento, Kit Uniforme). O simulador calcula dinamicamente a mensalidade, opções semestrais e anuais com desconto de 10% a 15%, e gera botão de envio formatado para o WhatsApp do estúdio.
7. **StudentJourney Section**: Linha do tempo editorial em 4 etapas conectadas: 01. Aula Experimental de Acolhimento, 02. Avaliação Individual & Nivelamento, 03. Matrícula & Integração à Família, 04. O Palco & Espetáculo de Gala no Teatro Municipal de Ourinhos.
8. **EmotionalBanner Section**: Bloco editorial imersivo destacando a essência da dança como alívio do estresse, resgate da autoestima e expressão pura.
9. **ExperiencePillars Section**: 4 pilares numerados em tipografia serifada gigante: 01. Técnica & Biomecânica, 02. Expressão & Cura da Alma, 03. Disciplina & Graciosidade, 04. Comunidade & Acolhimento.
10. **MomentsEvents Section**: Destaque dos espetáculos anuais nos grandes teatros de Ourinhos, bastidores, figurinos sob medida e iluminação cênica.
11. **Gallery Section**: Galeria fotográfica com filtros interativos (Todos, Ballet Clássico, Gala & Palco, Rotina de Sala, Detalhes), cartões com efeito hover revelando título e ficha técnica, e abertura de Lightbox Modal navegável com teclado (Esc, Setas) e botão direto de WhatsApp.
12. **CareGuideChecklist Section**: Guia prático com 4 cartões de cuidados (Bolsa de Dança, Coque Perfeito, Alimentação & Hidratação, Preservação de Sapatilhas), com botão interativo funcional para copiar a lista para o celular e botão de compartilhar no WhatsApp.
13. **Testimonials Section**: Depoimentos reais de mães de alunos do Baby Class, alunas de Ballet Adulto e formandas em pontas, com selo de nota 5.0 estrelas no Google Maps e link para avaliação.
14. **IntermediateCTA Section**: Chamada de alto impacto "O seu próximo grande passo começa em nossa sala de aula." com botões de agendamento.
15. **LocationMap Section**: Informações detalhadas de endereço (Av. Conselheiro Rodrigues Alves, 275 - Centro, Ourinhos/SP), telefone (14) 99639-1661, horários de atendimento, botão "Como Chegar" (Google Maps) e iframe interativo do mapa embutido.
16. **ContactSection**: Formulário de contato direto integrado ao WhatsApp com campos de Nome, Modalidade de Interesse, Telefone e Mensagem opcional.
17. **Footer**: Rodapé completo com logo, links institucionais, dados de contato, redes sociais e botão de "Voltar ao topo".
18. **MobileStickyCTA & Modais**: Barra de conversão flutuante para telas mobile, Modal de Agendamento de Visita/Aula, Modal de Detalhes da Modalidade e Lightbox de Fotos.

Utilize ícones do `lucide-react`, cores fiéis ao tema e links pré-formatados para o WhatsApp `5514996391661`.
```
