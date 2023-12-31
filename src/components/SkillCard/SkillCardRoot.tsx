import { HTMLAttributes, ReactNode } from 'react';

interface SkillCardRoot extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export default function Index({ children, ...rest }: SkillCardRoot) {
    return (
        <div className="skill-card" {...rest}>
            {children}
        </div>
    );
}
