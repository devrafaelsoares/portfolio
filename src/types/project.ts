import type { Developer } from './developer';
import type { Image } from './image';
import type { Technologie } from './technologie';

export type ProjectCategory = 'PLATFORM' | 'API' | 'LANDING_PAGE';

export type ProjectDetail = {
    readonly overview: string;
    readonly features: string[];
    readonly screenshots?: { url: string; caption?: string }[];
    readonly metrics?: { label: string; value: string }[];
};

export type Project = {
    readonly id: string;
    readonly developer: Developer;
    readonly title: string;
    readonly category: ProjectCategory;
    readonly description?: string;
    readonly image: Image;
    readonly date: Date;
    readonly url?: string;
    readonly technologies?: Technologie[];
    readonly details?: ProjectDetail;
};
