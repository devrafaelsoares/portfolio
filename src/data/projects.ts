import type { Project } from '@/types/project';
import {
    AI,
    ASTRO,
    CSS,
    DOCKER,
    JAVA,
    NEXTJS,
    NODEJS,
    POSTGRESQL,
    PYTHON,
    RABBITMQ,
    REACT,
    REDIS,
    SPRINGBOOT,
    TAILWINDCSS,
    TYPESCRIPT,
} from '@/data/technologies';
import { developer } from '@/data/developer';

export const projects: Project[] = [
    {
        id: 'sofia',
        developer,
        category: 'PLATFORM',
        title: 'Sofia — IA Conversacional Multi-Tenant',
        description:
            'Plataforma SaaS para suporte ao cliente através de agentes de IA, centralizando WhatsApp e Instagram com triagem, agendamentos automatizados e dashboard em tempo real.',
        image: { url: 'projects/sofia.png?v=2' },
        date: new Date('2026-10-03'),
        technologies: [REACT, TYPESCRIPT, NODEJS, PYTHON, AI],
        details: {
            overview:
                'Criação do Sofia, uma plataforma SaaS projetada para escalar o suporte ao cliente de empresas através de agentes de Inteligência Artificial. O sistema centraliza a comunicação de canais como WhatsApp e Instagram em um único dashboard intuitivo. A solução automatiza o fluxo de conversas, triagem e agendamentos com respostas humanizadas, reduzindo o tempo de espera e aumentando a conversão de vendas, tudo gerenciado através de uma infraestrutura escalável e de alta disponibilidade.',
            features: [
                'Centralização de canais de atendimento (WhatsApp Business e Instagram Direct) em tempo real',
                'Agente de IA com personalidade configurável: ajuste fino de temperatura, tom de voz (Formal, Amigável, Profissional) e regras de negócio',
                'Automação de triagem, respostas humanizadas e agendamento de consultas com sincronização',
                'Dashboard analítico em tempo real com métricas de mensagens, retenção, taxa de resolução e tempo de resposta',
                'Arquitetura Multi-Tenant com isolamento de dados corporativos e alta disponibilidade',
            ],
            screenshots: [
                {
                    url: 'projects/screenshots/sofia-hero.jpg',
                    caption:
                        'Visão Geral do Sofia • Assistente de Atendimento Inteligente Omnichannel',
                },
                {
                    url: 'projects/screenshots/sofia-dashboard.png',
                    caption:
                        'Dashboard Analítico • Performance Corporativa e Métricas em Tempo Real',
                },
                {
                    url: 'projects/screenshots/sofia-assistant.png',
                    caption: 'Configuração do Assistente • Personalidade, Regras e Tom de Voz',
                },
                {
                    url: 'projects/screenshots/sofia-whatsapp.png',
                    caption: 'Integração WhatsApp Business • Conexão Instantânea via QR Code',
                },
                {
                    url: 'projects/screenshots/sofia-instagram.png',
                    caption:
                        'Integração Instagram Direct • Conexão Estável e Resposta Automática a DMs',
                },
            ],
            metrics: [
                { label: 'Resolução por IA', value: '96%' },
                { label: 'Tempo de Resposta', value: '< 10s' },
                { label: 'Atendimento', value: '24/7 Omnichannel' },
            ],
        },
    },
    {
        id: 'eduagenda',
        developer,
        category: 'PLATFORM',
        title: 'EduAgenda — Gestão Educacional e Agendamento',
        description:
            'Sistema Full-Stack de agendamento de aulas com Clean Architecture, integração Google Calendar/Meet API e acessibilidade Gov.br (WCAG 2.1 AA).',
        image: { url: 'projects/eduagenda.png?v=2' },
        date: new Date('2026-06-15'),
        technologies: [REACT, NEXTJS, NODEJS, RABBITMQ, CSS],
        details: {
            overview:
                'O EduAgenda é uma plataforma robusta desenvolvida para orquestrar o ciclo completo de aulas particulares entre tutores e alunos. Empregando os princípios da Clean Architecture, o sistema integra Google Calendar API para geração automática de salas no Google Meet, motor de agendamento anti-conflito em tempo real, gestão de contratos com pacotes de horas e uma interface reativa em React e Vite em conformidade com o Design System Gov.br (WCAG 2.1 AA).',
            features: [
                'Motor de Agendamento Anti-Conflito — Algoritmos que processam disponibilidade e impedem agendamentos duplos (double-booking)',
                'Geração Automática Google Meet — Conexão nativa com Google Calendar API com salas virtuais instantâneas',
                'Gestão de Catálogo e Contratos — Criação de pacotes de aulas e controle exato de saldo de horas com débito automatizado',
                'Segurança com Cookies HttpOnly — Sessões protegidas contra ataques XSS com tokens criptográficos seguros',
                'Acessibilidade WCAG 2.1 AA — Interface baseada no Design System Gov.br com alto contraste e labels explícitos',
                'Camada de Apresentação Sanitizada — Validação estrita de schemas com Zod e cache assíncrono via TanStack Query',
            ],
            screenshots: [
                {
                    url: 'projects/screenshots/eduagenda-student.png',
                    caption: 'Painel do Aluno • Gestão de Aulas Disponíveis e Agendamentos',
                },
                {
                    url: 'projects/screenshots/eduagenda-teacher.png',
                    caption: 'Painel do Professor • Configuração de Matérias e Fuso Horário',
                },
                {
                    url: 'projects/screenshots/eduagenda-classes.png',
                    caption: 'Painel de Aulas • Confirmação, Remarcação e Cancelamento',
                },
            ],
            metrics: [
                { label: 'Arquitetura', value: 'Clean Architecture' },
                { label: 'Videoconferência', value: 'Google Meet API' },
                { label: 'Acessibilidade', value: 'WCAG 2.1 AA (Gov.br)' },
            ],
        },
    },
    {
        id: 'motta-barberclub',
        developer,
        category: 'LANDING_PAGE',
        title: 'Motta Barberclub — Barbearia Premium',
        description:
            'Landing page premium de alta conversão para barbearia de alto padrão em Taguatinga Norte - DF, com agendamento online integrado (AppBarber) e performance extrema.',
        image: { url: 'projects/motta-barberclub.png' },
        date: new Date('2026-10-10'),
        technologies: [ASTRO, TAILWINDCSS, TYPESCRIPT, CSS],
        details: {
            overview:
                'Landing page de alta conversão e estética luxury desenvolvida para a Motta Barberclub, barbearia de alto padrão em Taguatinga Norte - DF. Focada em performance máxima, SEO local e agendamento instantâneo via integração com a plataforma AppBarber.',
            features: [
                'Arquitetura ultrarrápida com Astro para pontuação 100/100 no Google PageSpeed (Core Web Vitals)',
                'Design responsivo dark luxury com tipografia clássica (Cinzel) e moderna (Plus Jakarta Sans)',
                'Integração direta com o sistema de agendamento online AppBarber',
                'Apresentação de serviços, barboterapia com toalha quente, avaliações 5.0 e mapa interativo',
                'Otimização completa de SEO local e meta tags Open Graph para redes sociais',
            ],
            screenshots: [
                {
                    url: 'projects/screenshots/motta-hero.png',
                    caption: 'Hero Section • Estética Dark Luxury e Chamada para Ação',
                },
                {
                    url: 'projects/screenshots/motta-services.png',
                    caption: 'Serviços & Cortes • Tabela de Cuidados Masculinos',
                },
                {
                    url: 'projects/screenshots/motta-experience.png',
                    caption: 'Experiência & Avaliações • AppBarber 5.0 Estrelas',
                },
            ],
            metrics: [
                { label: 'Performance', value: '100 PageSpeed' },
                { label: 'Conversão', value: 'AppBarber Integrado' },
                { label: 'Avaliação', value: '5.0 Estrelas' },
            ],
        },
    },
    {
        id: 'url-shortener',
        developer,
        category: 'API',
        title: 'Enterprise URL Shortener',
        description:
            'Plataforma de Encurtamento de URLs de Alto Desempenho com Clean Architecture, Segurança Zero-Trust e Threat Intelligence.',
        image: { url: 'projects/url-shortener.png?v=2' },
        date: new Date('2025-01-12'),
        technologies: [TYPESCRIPT, NODEJS, POSTGRESQL, REDIS, DOCKER],
        details: {
            overview:
                'O Enterprise URL Shortener é um sistema backend construído em Node.js (Fastify) e TypeScript, desenhado para escala massiva e segurança de nível militar. Projetado utilizando Clean Architecture (Hexagonal), promove total desacoplamento entre regras de negócio, persistência (Sequelize/PostgreSQL) e interfaces web. É capaz de processar milhares de redirecionamentos por segundo usando um padrão de Cache-Aside com Redis e algoritmos matemáticos nativos (crypto.randomBytes) com conversão para Base62 O(1).',
            features: [
                'Alta Performance — Encurtamento ultrarrápido com gerador nativo em C++ e conversão Base62 O(1)',
                'Threat Intelligence — Provedor de Safe Browsing com blacklists locais e detecção ativa de XSS e Phishing',
                'Segurança Zero-Trust — Autenticação com JWT ES256 transacionado exclusivamente por Cookies HttpOnly, Secure e SameSite=Strict',
                'Argon2 Hashing — Derivação de chaves otimizada em memória e tempo, altamente resistente a ataques de força bruta via GPU',
                'Redis Cache-Aside — Mitigação de sobrecarga em banco de dados e lentidão de I/O em picos de tráfego',
                'Prevenção de Race Conditions — Tratamento de colisões no banco de dados dobrando o throughput de escritas',
                'Documentação OpenAPI 3.0 — Interface interativa nativa via Swagger com suporte a injeção de cookieAuth',
            ],
            metrics: [
                { label: 'Algoritmo', value: 'Base62 O(1)' },
                { label: 'Autenticação', value: 'ES256 + HttpOnly' },
                { label: 'Cache & Sessão', value: 'Redis Cache-Aside' },
                { label: 'Threat Intel', value: 'Safe Browsing' },
            ],
        },
    },
    {
        id: 'store-api',
        developer,
        category: 'API',
        title: 'Store API RESTful',
        description:
            'API RESTful para catálogo de e-commerce e carrinho de alta concorrência com Spring Boot, Redis Cache e PostgreSQL.',
        image: { url: 'projects/store-api.png?v=2' },
        date: new Date('2024-01-03'),
        technologies: [JAVA, SPRINGBOOT, POSTGRESQL, REDIS, DOCKER],
        details: {
            overview:
                'API RESTful desenvolvida em Java 21 e Spring Boot para e-commerce de alta performance, abrangendo gerenciamento completo de catálogo de produtos, controle de carrinho de compras com sessão distribuída via Redis e persistência relacional transacional com PostgreSQL. Conta com arquitetura em camadas desacoplada e conteinerização completa com Docker.',
            features: [
                'Gestão de Carrinho Distribuído — Armazenamento de sessão de alta concorrência com Redis in-memory',
                'Catálogo de Produtos e Categorias — CRUD completo com paginação otimizada e validação de entidades',
                'Autenticação e Autorização — Controle de acesso seguro com Spring Security e Bearer Token',
                'Tratamento Global de Exceções — Respostas padronizadas de erro conforme RFC 7807 sem expor stack traces',
                'Virtualização Desacoplada — Infraestrutura completa automatizada com Docker e Docker Compose',
            ],
            metrics: [
                { label: 'Sessão & Cache', value: 'Redis Distribuído' },
                { label: 'Persistência', value: 'PostgreSQL' },
                { label: 'Containers', value: 'Docker Compose' },
            ],
        },
    },
    {
        id: 'spring-auth',
        developer,
        category: 'API',
        title: 'Spring Boot Auth',
        description:
            'API REST de autenticação e autorização corporativa com Spring Security, JWT RSA256 assimétrico e cookies HttpOnly seguros.',
        image: { url: 'projects/spring-auth.png?v=2' },
        date: new Date('2024-02-12'),
        technologies: [JAVA, SPRINGBOOT, POSTGRESQL, DOCKER],
        details: {
            overview:
                'O Spring Boot Auth é uma API REST backend de autenticação e autorização construída com Spring Boot 3 e Java 21 LTS, projetada com foco em segurança corporativa de nível militar. O projeto implementa um modelo de controle de acesso baseado em papéis (RBAC) com três níveis de granularidade: Usuários, Papéis (Roles) e Privilégios (Privileges). A autenticação utiliza JWT assinado com criptografia assimétrica RSA256 entregue via cookies HttpOnly + Secure + SameSite=Strict, garantindo proteção total contra XSS, CSRF e interceptação de tokens.',
            features: [
                'JWT com RSA256 — Criptografia assimétrica onde a chave privada assina tokens e a pública valida',
                'Cookies Seguros — Flags HttpOnly, Secure (HTTPS-only) e SameSite=Strict blindando contra ataques XSS e CSRF',
                'RBAC Multinível — Hierarquia completa User → Role → Privilege com authorities e permissões granulares',
                'Confirmação de Conta — Fluxo completo de ativação cadastral por e-mail com token criptográfico UUID',
                'E-mail Assíncrono — Disparo assíncrono com @EnableAsync, Spring Mail e templates HTML Thymeleaf',
                'Global Exception Handler — Respostas de erro padronizadas e blindadas que nunca expõem stack traces',
                'Testes Unitários — Cobertura abrangente de serviços e regras de negócio com JUnit 5 e Mockito',
                'Docker Multi-Stage — Containers otimizados com JDK 21 build e JRE Alpine runtime com usuário não-root',
            ],
            metrics: [
                { label: 'Criptografia', value: 'RSA256 Assimétrico' },
                { label: 'Controle de Acesso', value: 'RBAC Multinível' },
                { label: 'Segurança Web', value: 'Cookies HttpOnly' },
                { label: 'Linguagem & Framework', value: 'Java 21 • Spring Boot 3' },
            ],
        },
    },
    {
        id: 'nlw-journey',
        developer,
        category: 'PLATFORM',
        title: 'NLW Journey — Trip Planner',
        description:
            'Aplicação web para planejamento colaborativo de viagens, roteirização de atividades diárias e gestão de convidados.',
        image: { url: 'projects/nlw-journey.png?v=2' },
        date: new Date('2024-09-16'),
        technologies: [TYPESCRIPT, NODEJS, REACT, DOCKER],
        details: {
            overview:
                'Aplicação moderna de planejamento colaborativo de viagens construída durante o Rocketseat NLW. Permite criar itinerários detalhados com datas de início e fim, convidar participantes por e-mail com confirmação de presença, organizar a linha do tempo com atividades por horário e centralizar links importantes e hospedagem.',
            features: [
                'Criação e Gestão de Viagens — Definição de destinos, períodos de viagem e metadados',
                'Convites por E-mail — Envio de convites e acompanhamento de confirmação de participantes',
                'Linha do Tempo de Atividades — Agendamento de eventos e passeios organizados por dia e horário',
                'Centralização de Links Úteis — Armazenamento seguro de links de hospedagem e transportes',
                'Ambiente Contêinerizado — Inicialização rápida e orquestração de serviços com Docker Compose',
            ],
            metrics: [
                { label: 'Frontend', value: 'React + TypeScript' },
                { label: 'Backend API', value: 'Node.js Fastify' },
                { label: 'Containerização', value: 'Docker Compose' },
            ],
            screenshots: [
                {
                    url: 'projects/screenshots/nlw-journey-dashboard.png',
                    caption: 'Dashboard da Viagem com Linha do Tempo e Atividades',
                },
                {
                    url: 'projects/screenshots/nlw-journey-activity-modal.png',
                    caption: 'Modal de Agendamento e Criação de Nova Atividade',
                },
                {
                    url: 'projects/screenshots/nlw-journey-guests.png',
                    caption: 'Gestão de Participantes e Convites com Stepper',
                },
                {
                    url: 'projects/screenshots/nlw-journey-home.png',
                    caption: 'Tela Inicial de Boas-Vindas e Planejamento em Modo Escuro',
                },
            ],
        },
    },
];
