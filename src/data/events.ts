import { NODEJS, PYTHON, REACT, KEYCLOACK, DOCKER, POSTGRESQL } from '@/data/technologies';
import type { TechnologyEvent } from '@/types/technology-event';

export const technologyEvents: TechnologyEvent[] = [
    {
        year: 2021,
        title: 'First Steps',
        about: 'Started my journey in software development by enrolling in Systems Analysis and Development, diving deep into programming fundamentals and emerging technologies.',
    },
    {
        year: 2023,
        title: 'Research & Development',
        about: 'Joined the development team at SENAC College, collaborating with students and alumni on a computer vision project. The goal: building a facial recognition system for access control and attendance management using pre-registered facial identification.',
        technologies: [PYTHON, KEYCLOACK, NODEJS, DOCKER, POSTGRESQL, REACT],
    },
];
