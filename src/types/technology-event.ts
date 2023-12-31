import { Technologie } from './technologie';

export type TechnologyEvent = {
    readonly year?: number;
    readonly title: string;
    readonly about?: string;
    readonly technologies?: Technologie[];
};
