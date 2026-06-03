import { ReactElement } from 'react';
import Reveal from '@/components/util/Reveal';
import { useTranslation } from 'react-i18next';
import { FaCode, FaPalette, FaGears, FaDatabase, FaDocker } from 'react-icons/fa6';
import {
    TYPESCRIPT, JAVA, PYTHON,
    REACT, TAILWINDCSS, SASS,
    SPRINGBOOT, NODEJS,
    POSTGRESQL, REDIS,
    DOCKER,
} from '@/data/technologies';

type Tech = { name: string; url: string; slug: string };
type Category = { labelKey: string; icon: ReactElement; techs: Tech[] };

const categories: Category[] = [
    {
        labelKey: 'skills.categories.languages',
        icon: <FaCode />,
        techs: [TYPESCRIPT, JAVA, PYTHON],
    },
    {
        labelKey: 'skills.categories.frontend',
        icon: <FaPalette />,
        techs: [REACT, TAILWINDCSS, SASS],
    },
    {
        labelKey: 'skills.categories.backend',
        icon: <FaGears />,
        techs: [SPRINGBOOT, NODEJS],
    },
    {
        labelKey: 'skills.categories.database',
        icon: <FaDatabase />,
        techs: [POSTGRESQL, REDIS],
    },
    {
        labelKey: 'skills.categories.infrastructure',
        icon: <FaDocker />,
        techs: [DOCKER],
    },
];

export default function Index(): ReactElement {
    const { t } = useTranslation();
    return (
        <section data-section className="section main__skills" id="skills">
            <Reveal delay={0.2}>
                <div className="section__content">
                    <h1 className="section-title">{t('skills.title')}</h1>
                </div>
            </Reveal>

            <div className="skills__grid">
                {categories.map(({ labelKey, icon, techs }, ci) => (
                    <Reveal key={ci} delay={0.15 + ci * 0.08}>
                        <div className="skill-category">
                            <div className="skill-category__header">
                                <span className="skill-category__icon">{icon}</span>
                                <span className="skill-category__label">{t(labelKey)}</span>
                            </div>
                            <div className="skill-category__chips">
                                {techs.map(({ name, url, slug }) => (
                                    <div key={slug} className="tech-chip">
                                        <img
                                            src={url}
                                            alt={name}
                                            className="tech-chip__icon"
                                        />
                                        <span className="tech-chip__name">{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
