import { NODEJS, PYTHON, REACT, KEYCLOACK, DOCKER, POSTGRESQL } from '@/data/technologies';
import { TechnologyEvent } from '@/types/technology-event';

export const technologyEvents: TechnologyEvent[] = [
    {
        year: 2021,
        title: 'Primeiros passos',
        about: 'Neste ano, dei início à minha trajetória na área do desenvolvimento de software ao me matricular em busca da minha primeira graduação, aprofundando simultaneamente meus estudos nas mais recentes tecnologias emergentes.',
    },
    {
        year: 2023,
        title: 'Iniciação Científica',
        about: 'Integro a equipe de desenvolvimento da Faculdade Senac, colaborando com outros estudantes e ex-alunos em um projeto de visão computacional. Nosso objetivo é a implementação de um sistema de reconhecimento facial que possibilitará o controle de acesso e a gestão de presença por meio da identificação facial previamente registrada.',
        technologies: [PYTHON, KEYCLOACK, NODEJS, DOCKER, POSTGRESQL, REACT],
    },
];
