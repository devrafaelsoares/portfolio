export type TechnologieName =
    | 'REACT'
    | 'TYPESCRIPT'
    | 'NODEJS'
    | 'TAILWINDCSS'
    | 'PYTHON'
    | 'JAVA'
    | 'KEYCLOACK'
    | 'DOCKER'
    | 'POSTGRESQL'
    | 'SPRINGBOOT'
    | 'REDIS'
    | 'SASS'
    | 'AI'
    | 'NEXTJS'
    | 'RABBITMQ'
    | 'CSS'
    | 'ASTRO';

export type Technologie = {
    readonly name: string;
    readonly slug: string;
    readonly url: string;
};

export type TechnologieInfo = { [K in TechnologieName]: Technologie };
