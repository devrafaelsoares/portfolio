import type { ReactNode } from 'react';
import { Fragment } from 'react';

interface SKillCardSkills {
    children: ReactNode;
}

export default function Index({ children }: SKillCardSkills) {
    return <Fragment>{children}</Fragment>;
}
