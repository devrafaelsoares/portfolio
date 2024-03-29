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
    | 'SASS';

export type Technologie = {
    readonly name: string;
    readonly slug: string;
    readonly url: string;
};

export type TechnologieInfo = { [K in TechnologieName]: Technologie };
