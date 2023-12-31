import { Project } from '../types/project';
import { NODEJS, PYTHON, REACT, TAILWINDCSS, TYPESCRIPT } from '../data/technologies';
import { developer } from '../data/developer';

export const projects: Project[] = [
    {
        developer,
        title: 'Coutdown',
        description: 'Contador regressivo para marcação de eventos',
        image: {
            url: 'projects/countdown.jpeg',
        },
        date: new Date('2023-11-01 00:00:00'),
        url: 'https://github.com/devrafaelsoares/react-countdown',
        technologies: [TYPESCRIPT, REACT, NODEJS, TAILWINDCSS],
    },
    {
        developer,
        title: 'CPF Validator',
        description: 'Sistema de validação de CPF',
        image: {
            url: 'projects/cpf-generator.png',
        },
        date: new Date('2023-12-30 00:00:00'),
        url: 'https://github.com/devrafaelsoares/cpf-generator',
        technologies: [PYTHON],
    },
];
