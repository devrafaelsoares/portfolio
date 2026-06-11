import type { Technologie } from './technologie';

export type Skills = {
    readonly technologie: Technologie;
    readonly compotences?: string[];
};
