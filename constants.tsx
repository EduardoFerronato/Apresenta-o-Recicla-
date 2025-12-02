import { SlideData, SlideType } from './types';
import { Leaf, Map, Users, ShieldCheck, Database, Layout, Search, Edit3, CheckCircle, ClipboardList } from 'lucide-react';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    type: SlideType.COVER,
    title: "Recicla+",
    subtitle: "Especificação de Requisitos de Software v1.1",
    extraData: {
      authors: ["Eduardo Ferronato", "Felipe Becker"],
      institution: "ADS - UNIFASIPE",
      date: "2025"
    }
  },
  {
    id: 2,
    type: SlideType.SPLIT,
    title: "O Problema",
    content: [
      "O crescimento das preocupações ambientais exige um destino correto para resíduos.",
      "A população tem dificuldade em encontrar locais para descarte de: óleo, pilhas, eletrônicos e vidros.",
      "Falta de engajamento social e centralização de informações sobre reciclagem."
    ],
    image: "https://picsum.photos/id/134/800/600" // Nature/Architecture placeholder
  },
  {
    id: 3,
    type: SlideType.SPLIT,
    title: "A Solução: Recicla+",
    content: [
      "Um sistema web responsivo e colaborativo.",
      "Mapa interativo de pontos de coleta.",
      "Cadastro colaborativo: Usuários inserem novos pontos.",
      "Foco na sustentabilidade e responsabilidade coletiva."
    ],
    image: "https://picsum.photos/id/433/800/600" // Tech/Meeting placeholder
  },
  {
    id: 4,
    type: SlideType.BULLETS,
    title: "Funcionalidades Principais",
    content: [
      "Pesquisa de Locais: Filtros por tipo de material (óleo, metal, plástico).",
      "Mapa Interativo: Visualização clara de endereços e horários.",
      "Colaboração: Cadastro de novos pontos por usuários autenticados.",
      "Gestão: Edição e exclusão de pontos pelo próprio autor.",
      "Avaliação: Feedback sobre a qualidade do ponto de coleta (Roadmap)."
    ],
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop", // Recycling bins specifically
    extraData: {
      icon: <Search className="w-12 h-12 text-brand-primary" />
    }
  },
  {
    id: 5,
    type: SlideType.BULLETS,
    title: "Requisitos Funcionais (RF)",
    content: [
      "- Pesquisa: Busca otimizada por tipo de material (óleo, pilhas, etc).",
      "- Cadastro: Inserção de novos pontos com endereço e horário.",
      "- Edição/Exclusão: Gerenciamento total pelo autor do registro.",
      "- Autenticação: Login seguro via e-mail e senha.",
      "- Avaliação: Notas e comentários sobre a qualidade do serviço.",
      "- Notificações: Alertas sobre novos pontos na região."
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop", // Person working on laptop/forms
    extraData: {
      icon: <ClipboardList className="w-12 h-12 text-brand-primary" />
    }
  },
  {
    id: 6,
    type: SlideType.BULLETS,
    title: "Requisitos Não Funcionais",
    content: [
      "Desempenho: Tempo de resposta < 2 segundos.",
      "Escalabilidade: Suporte a 100 usuários simultâneos.",
      "Disponibilidade: 95% do tempo (24h).",
      "Acessibilidade: Diretrizes WCAG 2.1 (Inclusivo).",
      "Segurança: Dados sensíveis criptografados."
    ],
    image: "https://20746817.fs1.hubspotusercontent-na1.net/hubfs/20746817/Imported_Blog_Media/por-que-ter-servidor-data-center-no-brasil-under.png", // Server room / Datacenter
    extraData: {
      icon: <Users className="w-12 h-12 text-brand-accent" />
    }
  },
  {
    id: 7,
    type: SlideType.FLOWCHART,
    title: "Fluxo do Usuário",
    subtitle: "Visão simplificada do diagrama de atividades",
    content: "Diagrama interativo baseado na página 10 do documento.",
  },
  {
    id: 8,
    type: SlideType.TECH_STACK,
    title: "Tecnologias & Requisitos",
    subtitle: "Stack moderna e robusta para alta disponibilidade",
    content: [], // Handled by component
    extraData: {
      items: [
        { name: "Frontend", desc: "React / Next.js", icon: <Layout /> },
        { name: "Linguagem", desc: "TypeScript", icon: <CheckCircle /> },
        { name: "Banco de Dados", desc: "PostgreSQL / MySQL", icon: <Database /> },
        { name: "Segurança", desc: "HTTPS / Criptografia", icon: <ShieldCheck /> },
      ]
    }
  },
  {
    id: 9,
    type: SlideType.CLOSING,
    title: "Obrigado!",
    subtitle: "Recicla+ conecta pessoas à sustentabilidade.",
    content: "Dúvidas?",
    extraData: {
      contact: "Eduardo Ferronato & Felipe Becker"
    }
  }
];