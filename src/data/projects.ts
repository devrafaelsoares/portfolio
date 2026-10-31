import type { TFunction } from 'i18next';
import type { Project, ProjectCategory } from '@/types/project';
import type { Image } from '@/types/image';
import type { Technologie } from '@/types/technologie';
import {
    ASTRO,
    CSS,
    DOCKER,
    FASTAPI,
    JAVA,
    NEXTJS,
    NODEJS,
    POSTGRESQL,
    PYTHON,
    QDRANT,
    RABBITMQ,
    REACT,
    REDIS,
    SPRINGBOOT,
    TAILWINDCSS,
    TYPESCRIPT,
} from '@/data/technologies';
import { developer } from '@/data/developer';

type ProjectData = {
    readonly id: string;
    readonly category: ProjectCategory;
    readonly image: Image;
    readonly date: Date;
    readonly technologies: Technologie[];
    readonly screenshots?: string[];
};

const projectsData: ProjectData[] = [
    {
        id: 'sofia',
        category: 'PLATFORM',
        image: { url: 'projects/sofia.png?v=5' },
        date: new Date('2026-10-03'),
        technologies: [REACT, TYPESCRIPT, PYTHON, FASTAPI, RABBITMQ, QDRANT],
        screenshots: [
            'projects/screenshots/sofia-assistant.webp',
            'projects/screenshots/sofia-dashboard.webp',
            'projects/screenshots/sofia-catalog.webp',
            'projects/screenshots/sofia-orders.webp',
            'projects/screenshots/sofia-appointments.webp',
            'projects/screenshots/sofia-faq.webp',
        ],
    },
    {
        id: 'eduagenda',
        category: 'PLATFORM',
        image: { url: 'projects/eduagenda.png?v=2' },
        date: new Date('2026-06-15'),
        technologies: [REACT, NEXTJS, NODEJS, RABBITMQ, CSS],
        screenshots: [
            'projects/screenshots/eduagenda-student.png',
            'projects/screenshots/eduagenda-teacher.png',
            'projects/screenshots/eduagenda-classes.png',
        ],
    },
    {
        id: 'motta_barberclub',
        category: 'LANDING_PAGE',
        image: { url: 'projects/motta-barberclub.png' },
        date: new Date('2026-10-10'),
        technologies: [ASTRO, TAILWINDCSS, TYPESCRIPT, CSS],
        screenshots: [
            'projects/screenshots/motta-hero.png',
            'projects/screenshots/motta-services.png',
            'projects/screenshots/motta-experience.png',
        ],
    },
    {
        id: 'url_shortener',
        category: 'API',
        image: { url: 'projects/url-shortener.png?v=2' },
        date: new Date('2025-01-12'),
        technologies: [TYPESCRIPT, NODEJS, POSTGRESQL, REDIS, DOCKER],
    },
    {
        id: 'store_api',
        category: 'API',
        image: { url: 'projects/store-api.png?v=2' },
        date: new Date('2024-01-03'),
        technologies: [JAVA, SPRINGBOOT, POSTGRESQL, REDIS, DOCKER],
    },
    {
        id: 'spring_auth',
        category: 'API',
        image: { url: 'projects/spring-auth.png?v=3' },
        date: new Date('2024-02-12'),
        technologies: [JAVA, SPRINGBOOT, POSTGRESQL, DOCKER],
    },
];

export const getProjects = (t: TFunction): Project[] =>
    projectsData
        .map(({ screenshots, ...project }) => {
            const key = `projects.items.${project.id}`;
            const captions = screenshots
                ? (t(`${key}.captions`, { returnObjects: true }) as string[])
                : [];

            return {
                ...project,
                developer,
                title: t(`${key}.title`),
                description: t(`${key}.description`),
                details: {
                    overview: t(`${key}.overview`),
                    features: t(`${key}.features`, { returnObjects: true }) as string[],
                    metrics: t(`${key}.metrics`, { returnObjects: true }) as {
                        label: string;
                        value: string;
                    }[],
                    screenshots: screenshots?.map((url, i) => ({ url, caption: captions[i] })),
                },
            };
        })
        .sort((a, b) => b.date.getTime() - a.date.getTime());
