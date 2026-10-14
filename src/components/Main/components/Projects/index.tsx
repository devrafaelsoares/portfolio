import type { ReactElement } from 'react';
import { useState } from 'react';
import Reveal from '@/components/util/Reveal';
import { projects } from '@/data/projects';
import type { Project, ProjectCategory } from '@/types/project';
import { useTranslation } from 'react-i18next';
import ProjectModal from './ProjectModal';
import '@/assets/styles/components/_card-project.scss';

type FilterCategory = 'ALL' | ProjectCategory;

export default function Index(): ReactElement {
    const { t, i18n } = useTranslation();
    const [activeCategory, setActiveCategory] = useState<FilterCategory>('ALL');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects =
        activeCategory === 'ALL' ? projects : projects.filter(p => p.category === activeCategory);

    const formatDate = (date: Date) =>
        date.toLocaleDateString(i18n.language === 'pt-BR' ? 'pt-BR' : 'en-US', {
            month: 'short',
            year: 'numeric',
        });

    const categoryFilters: { key: FilterCategory; labelKey: string }[] = [
        { key: 'ALL', labelKey: 'projects.categories.all' },
        { key: 'PLATFORM', labelKey: 'projects.categories.platform' },
        { key: 'API', labelKey: 'projects.categories.api' },
        { key: 'LANDING_PAGE', labelKey: 'projects.categories.landing_page' },
    ];

    return (
        <section data-section className='section main__projects' id='projects'>
            <Reveal delay={0.2}>
                <div className='section__content'>
                    <h1 className='section-title projects__title'>{t('projects.title')}</h1>
                </div>
            </Reveal>

            {/* Category Filter Tabs */}
            <Reveal delay={0.3}>
                <div className='projects__filter-container'>
                    <div className='projects__filters' role='tablist'>
                        {categoryFilters.map(({ key, labelKey }) => (
                            <button
                                key={key}
                                role='tab'
                                aria-selected={activeCategory === key}
                                className={`projects__filter-btn ${activeCategory === key ? 'is-active' : ''}`}
                                onClick={() => setActiveCategory(key)}
                            >
                                {t(labelKey)}
                                <span className='filter-count'>
                                    {key === 'ALL'
                                        ? projects.length
                                        : projects.filter(p => p.category === key).length}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </Reveal>

            {/* Projects Grid */}
            <div className='section__projects'>
                <div className='project card'>
                    <div className='section__card-grid'>
                        {filteredProjects.map((project, index) => {
                            const delay = ((index % 6) + 2) / 10;
                            const categoryLabel = t(`projects.category_labels.${project.category}`);

                            return (
                                <Reveal key={project.id || index} delay={delay}>
                                    <div
                                        tabIndex={0}
                                        className='card__wrapper'
                                        onClick={() => setSelectedProject(project)}
                                        onKeyDown={e => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                setSelectedProject(project);
                                            }
                                        }}
                                        role='button'
                                        aria-label={`Ver detalhes de ${project.title}`}
                                    >
                                        {/* Banner Area */}
                                        <div className='card__banner'>
                                            <img
                                                src={project.image.url}
                                                alt={project.title}
                                                className='card__banner-img'
                                                loading='lazy'
                                            />
                                            <div className='card__banner-overlay' />

                                            {/* Category Tag (Top-Left) */}
                                            <div className='card__category-badge'>
                                                <span
                                                    className={`badge-pill badge--${project.category.toLowerCase()}`}
                                                >
                                                    {categoryLabel}
                                                </span>
                                            </div>

                                            {/* Date badge (Top-Right) */}
                                            <div className='card__header-info'>
                                                <span className='date'>
                                                    {formatDate(project.date)}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Body */}
                                        <div className='card__body-content'>
                                            <span className='author'>
                                                @{project.developer.username}
                                            </span>
                                            <h2 className='title'>{project.title}</h2>
                                            <p className='text'>{project.description}</p>

                                            <div className='card__footer'>
                                                <div className='skills'>
                                                    {project.technologies?.map((tech, i) => (
                                                        <div
                                                            key={i}
                                                            className='skills__item'
                                                            title={tech.name}
                                                        >
                                                            <img
                                                                className='skills__skill'
                                                                src={tech.url}
                                                                alt={tech.name}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>

                                                <button
                                                    type='button'
                                                    className='button button--details'
                                                    onClick={e => {
                                                        e.stopPropagation();
                                                        setSelectedProject(project);
                                                    }}
                                                >
                                                    {t('projects.view_details')}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Details Modal */}
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </section>
    );
}
