import type { Developer } from './developer';
import type { Image } from './image';
import type { Technologie } from './technologie';

export type Project = {
    readonly developer: Developer;
    readonly title: string;
    readonly description?: string;
    readonly image: Image;
    readonly date: Date;
    readonly url?: string;
    readonly technologies?: Technologie[];
};
