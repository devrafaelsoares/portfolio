import { HTMLAttributes, ReactNode } from 'react';

interface SkillCardHeaderProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
}

export default function Index({ children, ...rest }: SkillCardHeaderProps) {
    return (
        <header className="skill-card__header" {...rest}>
            {children}
        </header>
    );
}
