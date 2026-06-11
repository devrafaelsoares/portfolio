import type { Project } from '@/types/project';
import {
    DOCKER,
    JAVA,
    NODEJS,
    POSTGRESQL,
    REACT,
    REDIS,
    SASS,
    SPRINGBOOT,
    TYPESCRIPT,
} from '@/data/technologies';
import { developer } from '@/data/developer';

export const projects: Project[] = [
    {
        developer,
        title: 'URL Shortener',
        description:
            'Full RESTful API to shorten and manage URLs, with access tracking, authentication and live Swagger docs. Deployed on Render.',
        image: { url: 'projects/url-shortener.png' },
        date: new Date('2025-01-12'),
        url: 'https://github.com/devrafaelsoares/url-shortener',
        technologies: [TYPESCRIPT, NODEJS, POSTGRESQL, REDIS, DOCKER],
    },
    {
        developer,
        title: 'Store API RESTful',
        description:
            'RESTful API for product and shopping cart management, with Redis cache, Docker containerization and PostgreSQL database.',
        image: { url: 'projects/store-api.png' },
        date: new Date('2024-01-03'),
        url: 'https://github.com/devrafaelsoares/store-api-restful',
        technologies: [JAVA, SPRINGBOOT, POSTGRESQL, REDIS, DOCKER],
    },
    {
        developer,
        title: 'Spring Boot Auth',
        description:
            'Complete authentication system with Spring Security and JWT (RFC 7519): sign-up, login, e-mail verification and role-based access control.',
        image: { url: 'projects/spring-auth.png' },
        date: new Date('2024-02-12'),
        url: 'https://github.com/devrafaelsoares/spring-app-auth',
        technologies: [JAVA, SPRINGBOOT, POSTGRESQL, DOCKER],
    },
    {
        developer,
        title: 'NLW Journey — Trip Planner',
        description:
            'Travel planning app built during Rocketseat NLW. Create trip itineraries, add daily activities and invite participants.',
        image: { url: 'projects/nlw-journey.png' },
        date: new Date('2024-09-16'),
        url: 'https://github.com/devrafaelsoares/nlw-journey-trip-planner',
        technologies: [TYPESCRIPT, NODEJS, REACT, DOCKER],
    },
    {
        developer,
        title: 'GitHub Profiles App',
        description:
            'Web app that fetches and displays public GitHub profiles in real time — repositories, top languages and user metrics.',
        image: { url: 'projects/github-profiles-app.png' },
        date: new Date('2024-02-08'),
        url: 'https://github.com/devrafaelsoares/github-profiles-app',
        technologies: [TYPESCRIPT, REACT, SASS, DOCKER],
    },
];
