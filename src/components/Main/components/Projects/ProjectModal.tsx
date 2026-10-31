import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import type { Project } from '@/types/project';
import { useTranslation } from 'react-i18next';
import { FaXmark, FaChevronLeft, FaChevronRight, FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps): ReactElement | null {
    const { t, i18n } = useTranslation();
    const [currentImageIdx, setCurrentImageIdx] = useState(0);
    const screenshotCount = project?.details?.screenshots?.length ?? 0;

    useEffect(() => {
        if (!project) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (screenshotCount > 1) {
                if (e.key === 'ArrowLeft') {
                    setCurrentImageIdx(prev => (prev === 0 ? screenshotCount - 1 : prev - 1));
                } else if (e.key === 'ArrowRight') {
                    setCurrentImageIdx(prev => (prev === screenshotCount - 1 ? 0 : prev + 1));
                }
            }
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [project, screenshotCount, onClose]);

    if (!project) return null;

    const screenshots = project.details?.screenshots || [];
    const currentScreenshot = screenshots[currentImageIdx];
    const metrics = project.details?.metrics || [];
    const features = project.details?.features || [];

    const formatDate = (date: Date) =>
        date.toLocaleDateString(i18n.language === 'pt-BR' ? 'pt-BR' : 'en-US', {
            month: 'long',
            year: 'numeric',
        });

    const showPrevious = () =>
        setCurrentImageIdx(prev => (prev === 0 ? screenshots.length - 1 : prev - 1));
    const showNext = () =>
        setCurrentImageIdx(prev => (prev === screenshots.length - 1 ? 0 : prev + 1));

    return (
        <div className='project-modal__backdrop' onClick={onClose}>
            <div
                className='project-modal'
                onClick={e => e.stopPropagation()}
                role='dialog'
                aria-modal='true'
                aria-labelledby='project-modal-title'
            >
                <header className='project-modal__header'>
                    <div>
                        <p className='project-modal__meta'>
                            {t(`projects.category_labels.${project.category}`)}
                            {' · '}
                            {formatDate(project.date)}
                        </p>
                        <h2 id='project-modal-title' className='project-modal__title'>
                            {project.title}
                        </h2>
                    </div>
                    <button
                        type='button'
                        className='project-modal__close'
                        onClick={onClose}
                        aria-label={t('projects.close_modal')}
                    >
                        <FaXmark />
                    </button>
                </header>

                {currentScreenshot ? (
                    <figure className='project-modal__gallery'>
                        <div className='project-modal__viewer'>
                            <img
                                src={currentScreenshot.url}
                                alt={currentScreenshot.caption || project.title}
                            />
                            {screenshots.length > 1 && (
                                <>
                                    <button
                                        type='button'
                                        className='project-modal__nav project-modal__nav--prev'
                                        onClick={showPrevious}
                                        aria-label={t('projects.modal.previous_image')}
                                    >
                                        <FaChevronLeft />
                                    </button>
                                    <button
                                        type='button'
                                        className='project-modal__nav project-modal__nav--next'
                                        onClick={showNext}
                                        aria-label={t('projects.modal.next_image')}
                                    >
                                        <FaChevronRight />
                                    </button>
                                </>
                            )}
                        </div>
                        <figcaption className='project-modal__caption'>
                            <span>{currentScreenshot.caption}</span>
                            {screenshots.length > 1 && (
                                <span className='project-modal__counter'>
                                    {currentImageIdx + 1} / {screenshots.length}
                                </span>
                            )}
                        </figcaption>
                        {screenshots.length > 1 && (
                            <div className='project-modal__thumbnails'>
                                {screenshots.map((s, i) => (
                                    <button
                                        type='button'
                                        key={s.url}
                                        className={`project-modal__thumb ${i === currentImageIdx ? 'is-active' : ''}`}
                                        onClick={() => setCurrentImageIdx(i)}
                                    >
                                        <img
                                            src={s.url}
                                            alt={`${t('projects.modal.thumbnail')} ${i + 1}`}
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </figure>
                ) : (
                    <img className='project-modal__cover' src={project.image.url} alt='' />
                )}

                {metrics.length > 0 && (
                    <dl className='project-modal__metrics'>
                        {metrics.map(m => (
                            <div key={m.label}>
                                <dt>{m.label}</dt>
                                <dd>{m.value}</dd>
                            </div>
                        ))}
                    </dl>
                )}

                <section className='project-modal__section'>
                    <h3>{t('projects.modal.overview')}</h3>
                    <p className='project-modal__text'>
                        {project.details?.overview || project.description}
                    </p>
                </section>

                {features.length > 0 && (
                    <section className='project-modal__section'>
                        <h3>{t('projects.modal.features')}</h3>
                        <ul className='project-modal__features'>
                            {features.map(feature => {
                                const [name, ...rest] = feature.split(' — ');
                                return (
                                    <li key={feature}>
                                        {rest.length > 0 ? (
                                            <>
                                                <strong>{name}</strong>
                                                <span>{rest.join(' — ')}</span>
                                            </>
                                        ) : (
                                            <span>{feature}</span>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                )}

                {project.technologies && project.technologies.length > 0 && (
                    <section className='project-modal__section'>
                        <h3>{t('projects.modal.technologies')}</h3>
                        <div className='project-modal__techs'>
                            {project.technologies.map(tech => (
                                <span key={tech.slug}>
                                    <img src={tech.url} alt='' />
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </section>
                )}

                {project.url && (
                    <a
                        href={project.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='project-modal__link'
                    >
                        {t('projects.modal.view_project')}
                        <FaArrowUpRightFromSquare />
                    </a>
                )}
            </div>
        </div>
    );
}
