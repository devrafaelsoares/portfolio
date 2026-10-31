import type { SocialMedia } from './social-media';

export type Developer = {
    readonly name: string;
    readonly username: string;
    readonly sociakMedia?: SocialMedia;
    readonly email?: string;
    readonly aboutMe?: string;
    readonly gradutiation?: string;
};
