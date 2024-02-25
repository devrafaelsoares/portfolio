import { Fragment, ReactNode } from 'react';

interface SKillCardSkills {
    children: ReactNode;
}

export default function Index({ children }: SKillCardSkills) {
    return <Fragment>{children}</Fragment>;
}
