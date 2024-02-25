import { Skills } from '@/types/skills';
import { DOCKER, JAVA, NODEJS, POSTGRESQL, REACT, TAILWINDCSS, TYPESCRIPT } from '@/data/technologies';

export const skills: readonly Skills[] = [
    {
        technologie: TYPESCRIPT,
        compotences: ['Object-oriented programming'],
    },
    {
        technologie: JAVA,
        compotences: ['Spring Boot', 'Stream & Collection API', 'Functional programming'],
    },
    {
        technologie: NODEJS,
        compotences: ['Express'],
    },
    {
        technologie: REACT,
    },
    {
        technologie: POSTGRESQL,
    },
    {
        technologie: DOCKER,
    },
    {
        technologie: TAILWINDCSS,
    },
];
