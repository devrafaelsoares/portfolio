import { HTMLAttributes, ReactNode } from 'react';

interface SkillCardBody extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
}

export default function Index({ children, ...rest }: SkillCardBody) {
    return (
        <section className="skill-card__body" {...rest}>
            {children}
        </section>
    );
}
