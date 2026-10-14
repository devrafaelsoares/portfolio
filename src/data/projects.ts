import type { Project } from '@/types/project';
import {
    AI,
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
    TYPESCRIPT,
} from '@/data/technologies';
import { developer } from '@/data/developer';

export const projects: Project[] = [
    {
        developer,
        title: 'Sofia — IA Conversacional Multi-Tenant',
        description:
            'Plataforma SaaS para suporte ao cliente através de agentes de IA, centralizando WhatsApp e Instagram com triagem, agendamentos automatizados e dashboard em tempo real.',
        image: { url: 'projects/sofia.png?v=2' },
        date: new Date('2026-10-03'),
        technologies: [REACT, TYPESCRIPT, NODEJS, PYTHON, AI],
    },
    {
        developer,
        title: 'EduAgenda — Gestão Educacional e Agendamento',
        description:
            'Plataforma para orquestrar o ciclo de aulas particulares entre professores e alunos, com cruzamento de agendas, pacotes de horas e geração de salas virtuais (Google Meet).',
        image: { url: 'projects/eduagenda.png?v=2' },
        date: new Date('2026-06-15'),
        technologies: [REACT, NEXTJS, NODEJS, RABBITMQ, CSS],
    },
    {
        developer,
        title: 'URL Shortener',
        description:
            'Full RESTful API to shorten and manage URLs, with access tracking, authentication and live Swagger docs. Deployed on Render.',
        image: { url: 'projects/url-shortener.png?v=2' },
        date: new Date('2025-01-12'),
        url: 'https://github.com/devrafaelsoares/url-shortener',
        technologies: [TYPESCRIPT, NODEJS, POSTGRESQL, REDIS, DOCKER],
    },
    {
        developer,
        title: 'Store API RESTful',
        description:
            'RESTful API for product and shopping cart management, with Redis cache, Docker containerization and PostgreSQL database.',
        image: { url: 'projects/store-api.png?v=2' },
        date: new Date('2024-01-03'),
        url: 'https://github.com/devrafaelsoares/store-api-restful',
        technologies: [JAVA, SPRINGBOOT, POSTGRESQL, REDIS, DOCKER],
    },
    {
        developer,
        title: 'Spring Boot Auth',
        description:
            'Complete authentication system with Spring Security and JWT (RFC 7519): sign-up, login, e-mail verification and role-based access control.',
        image: { url: 'projects/spring-auth.png?v=2' },
        date: new Date('2024-02-12'),
        url: 'https://github.com/devrafaelsoares/spring-app-auth',
        technologies: [JAVA, SPRINGBOOT, POSTGRESQL, DOCKER],
    },
    {
        developer,
        title: 'NLW Journey — Trip Planner',
        description:
            'Travel planning app built during Rocketseat NLW. Create trip itineraries, add daily activities and invite participants.',
        image: { url: 'projects/nlw-journey.png?v=2' },
        date: new Date('2024-09-16'),
        url: 'https://github.com/devrafaelsoares/nlw-journey-trip-planner',
        technologies: [TYPESCRIPT, NODEJS, REACT, DOCKER],
    },
];
