import type { ReactElement } from 'react';
import { useState } from 'react';
import Reveal from '@/components/util/Reveal';
import { projects } from '@/data/projects';
import { FaGithub } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import '@/assets/styles/components/_card-project.scss';

export default function Index(): ReactElement {
    const [expanded, setExpanded] = useState(false);
    const projectsForDisplay = expanded ? projects : projects.slice(0, 3);
    const { t, i18n } = useTranslation();

    const formatDate = (date: Date) =>
        date.toLocaleDateString(i18n.language === 'pt-BR' ? 'pt-BR' : 'en-US', {
            month: 'short',
            year: 'numeric',
        });

    return (
        <section data-section className='section main__projects' id='projects'>
            <Reveal delay={0.3}>
                <div className='section__content'>
                    <h1 className='section-title projects__title'>{t('projects.title')}</h1>
                </div>
            </Reveal>

            <div className='section__projects'>
                <div className='project card'>
                    <div className='section__card-grid'>
                        {projectsForDisplay.map(
                            (
                                { developer, date, image, title, url, description, technologies },
                                index,
                            ) => {
                                const delay = (index + 2) / 10;
                                return (
                                    <Reveal key={index} delay={delay}>
                                        <div
                                            tabIndex={0}
                                            className='card__wrapper'
                                            style={{ backgroundImage: `url(${image.url})` }}
                                        >
                                            <div className='card__overlay' />

                                            {/* Date badge */}
                                            <div className='card__header-info'>
                                                <span className='date'>{formatDate(date)}</span>
                                            </div>

                                            {/* Body */}
                                            <div className='card__body-content'>
                                                <span className='author'>
                                                    @{developer.username}
                                                </span>
                                                <h2 className='title'>
                                                    <a href={url} target='_blank' rel='noreferrer'>
                                                        {title}
                                                    </a>
                                                </h2>
                                                <p className='text'>{description}</p>

                                                <div className='skills'>
                                                    {technologies?.map((tech, i) => (
                                                        <img
                                                            key={i}
                                                            className='skills__skill'
                                                            src={tech.url}
                                                            alt={tech.name}
                                                            title={tech.name}
                                                        />
                                                    ))}
                                                </div>

                                                <a
                                                    href={url}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    className='button'
                                                >
                                                    <FaGithub />
                                                    {t('projects.github_link')}
                                                </a>
                                            </div>
                                        </div>
                                    </Reveal>
                                );
                            },
                        )}
                    </div>

                    {projects.length > 3 && (
                        <Reveal delay={0.5}>
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className='more-projects-button'
                            >
                                {expanded
                                    ? t('projects.less_projects')
                                    : t('projects.more_projects')}
                            </button>
                        </Reveal>
                    )}
                </div>
            </div>
        </section>
    );
}
