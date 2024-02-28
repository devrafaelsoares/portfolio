import { Project } from '@/types/project';
import {
    DOCKER,
    JAVA,
    NODEJS,
    POSTGRESQL,
    PYTHON,
    REACT,
    REDIS,
    SASS,
    SPRINGBOOT,
    TAILWINDCSS,
    TYPESCRIPT,
} from '@/data/technologies';
import { developer } from '@/data/developer';

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
    {
        developer,
        title: 'Store API',
        description: 'APIRESTful de um sistema de gerenciamento de produtos',
        image: {
            url: 'projects/store-api.png',
        },
        date: new Date('2024-01-03 00:00:00'),
        url: 'https://github.com/devrafaelsoares/store-api-restful',
        technologies: [JAVA, SPRINGBOOT, POSTGRESQL, REDIS, DOCKER],
    },
    {
        developer,
        title: 'Github Profiles App',
        description: 'Aplicação Web que permiti a busca das informações de um usuário existente no Github',
        image: {
            url: 'projects/github-profiles-app.png',
        },
        date: new Date('2024-02-08 00:00:00'),
        url: 'https://github.com/devrafaelsoares/github-profiles-app',
        technologies: [TYPESCRIPT, REACT, SASS, DOCKER],
    },
    {
        developer,
        title: 'Todo List App',
        description:
            'Aplicação Web que realizar o gerenciamentos de tarefas. Permitindo a criação, edição e conclusão de suas tarefas',
        image: {
            url: 'projects/todo-list-app.png',
        },
        date: new Date('2024-02-25 00:00:00'),
        url: 'https://github.com/devrafaelsoares/todo-list',
        technologies: [TYPESCRIPT, REACT, SASS, DOCKER],
    },
];
