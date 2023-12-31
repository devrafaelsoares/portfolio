import { ReactNode } from 'react';

interface SKillCardSkills {
    children: ReactNode;
}

export default function Index({ children }: SKillCardSkills) {
    return <>{children}</>;
}
