interface SkillCardDescriptionProps {
    description: string;
}

export default function Index({ description }: SkillCardDescriptionProps) {
    return <span className="skill-card__duration">{description}</span>;
}
