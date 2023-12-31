import { Developer } from './developer';
import { Image } from './image';
import { Technologie } from './technologie';

export type Project = {
    readonly developer: Developer;
    readonly title: string;
    readonly description?: string;
    readonly image: Image;
    readonly date: Date;
    readonly url?: string;
    readonly technologies?: Technologie[];
};
