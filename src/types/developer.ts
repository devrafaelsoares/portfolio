import { SocialMedia } from './social-media';

export type Developer = {
    readonly name: string;
    readonly username: string;
    readonly sociakMedia?: SocialMedia;
    readonly aboutMe?: string;
    readonly gradutiation?: string;
};
