import type { ReactElement } from 'react';
import { useState } from 'react';
import Reveal from '@/components/util/Reveal';
import { getProjects } from '@/data/projects';
import type { ProjectCategory } from '@/types/project';
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa6';
import ProjectModal from './ProjectModal';
import '@/assets/styles/components/_card-project.scss';

type FilterCategory = 'ALL' | ProjectCategory;

export default function Index(): ReactElement {
    const { t, i18n } = useTranslation();
    const [activeCategory, setActiveCategory] = useState<FilterCategory>('ALL');
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
    const projects = getProjects(t);
    const selectedProject = projects.find(p => p.id === selectedProjectId) ?? null;

    const filteredProjects =
        activeCategory === 'ALL' ? projects : projects.filter(p => p.category === activeCategory);

    const years = [...new Set(filteredProjects.map(p => p.date.getFullYear()))];

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

            {/* Projects by year */}
            <div className='projects__list'>
                {years.map(year => (
                    <div key={year} className='projects__year-group'>
                        <h2 className='projects__year'>{year}</h2>
                        <div className='projects__rows'>
                            {filteredProjects
                                .filter(project => project.date.getFullYear() === year)
                                .map(project => (
                                    <div
                                        key={project.id}
                                        tabIndex={0}
                                        role='button'
                                        className='project-row'
                                        aria-label={t('projects.details_of', {
                                            title: project.title,
                                        })}
                                        onClick={() => setSelectedProjectId(project.id)}
                                        onKeyDown={e => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                setSelectedProjectId(project.id);
                                            }
                                        }}
                                    >
                                        <img
                                            src={project.image.url}
                                            alt=''
                                            className='project-row__image'
                                            loading='lazy'
                                        />
                                        <div className='project-row__body'>
                                            <p className='project-row__meta'>
                                                {t(`projects.category_labels.${project.category}`)}
                                                {' · '}
                                                {formatDate(project.date)}
                                            </p>
                                            <h3 className='project-row__title'>{project.title}</h3>
                                            <p className='project-row__text'>
                                                {project.description}
                                            </p>
                                            <div className='project-row__footer'>
                                                <div className='project-row__techs'>
                                                    {project.technologies?.map(tech => (
                                                        <img
                                                            key={tech.slug}
                                                            src={tech.url}
                                                            alt={tech.name}
                                                            title={tech.name}
                                                        />
                                                    ))}
                                                </div>
                                                <span className='project-row__action'>
                                                    {t('projects.view_details')}
                                                    <FaArrowRight />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Details Modal */}
            <ProjectModal
                key={selectedProjectId}
                project={selectedProject}
                onClose={() => setSelectedProjectId(null)}
            />
        </section>
    );
}
