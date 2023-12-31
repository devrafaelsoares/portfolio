import { HTMLAttributes } from 'react';

interface SkillTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    title: string;
}

export default function Index({ title, ...rest }: SkillTitleProps) {
    return (
        <h2 className="skill-card__title" {...rest}>
            {title}
        </h2>
    );
}
