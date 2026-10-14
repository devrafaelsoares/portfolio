import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import type { Project, ProjectCategory } from '@/types/project';
import { useTranslation } from 'react-i18next';
import {
    FaXmark,
    FaCheck,
    FaChevronLeft,
    FaChevronRight,
    FaCalendarDays,
    FaArrowUpRightFromSquare,
    FaLayerGroup,
    FaCircleInfo,
    FaListCheck,
    FaServer,
    FaDatabase,
    FaCloud,
    FaStar,
    FaMemory,
    FaGaugeHigh,
    FaShieldHalved,
    FaUserShield,
    FaEnvelopeOpenText,
    FaVideo,
    FaRobot,
    FaClock,
    FaGlobe,
    FaCode,
    FaChartSimple,
    FaLock,
    FaTerminal,
} from 'react-icons/fa6';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

function getCategoryIcon(category: ProjectCategory): ReactElement {
    switch (category) {
        case 'API':
            return <FaServer />;
        case 'LANDING_PAGE':
            return <FaGlobe />;
        case 'PLATFORM':
        default:
            return <FaLayerGroup />;
    }
}

function getMetricIcon(label: string, value: string) {
    const combined = `${label} ${value}`.toLowerCase();

    if (
        combined.includes('cache') ||
        combined.includes('redis') ||
        combined.includes('memoria') ||
        combined.includes('sessão')
    ) {
        return FaMemory;
    }
    if (
        combined.includes('banco') ||
        combined.includes('database') ||
        combined.includes('postgres') ||
        combined.includes('sql') ||
        combined.includes('persistência')
    ) {
        return FaDatabase;
    }
    if (
        combined.includes('deploy') ||
        combined.includes('cloud') ||
        combined.includes('container') ||
        combined.includes('docker')
    ) {
        return FaCloud;
    }
    if (
        combined.includes('pagespeed') ||
        combined.includes('performance') ||
        combined.includes('velocidade')
    ) {
        return FaGaugeHigh;
    }
    if (
        combined.includes('segurança') ||
        combined.includes('security') ||
        combined.includes('jwt') ||
        combined.includes('auth') ||
        combined.includes('criptografia') ||
        combined.includes('rsa256') ||
        combined.includes('es256') ||
        combined.includes('httponly')
    ) {
        return FaLock;
    }
    if (
        combined.includes('threat') ||
        combined.includes('safe browsing') ||
        combined.includes('argon2') ||
        combined.includes('zero-trust')
    ) {
        return FaShieldHalved;
    }
    if (combined.includes('permiss') || combined.includes('rbac') || combined.includes('acesso')) {
        return FaUserShield;
    }
    if (
        combined.includes('avaliação') ||
        combined.includes('estrelas') ||
        combined.includes('star') ||
        combined.includes('conversão')
    ) {
        return FaStar;
    }
    if (combined.includes('ia') || combined.includes('resolução')) {
        return FaRobot;
    }
    if (
        combined.includes('tempo') ||
        combined.includes('atendimento') ||
        combined.includes('24/7')
    ) {
        return FaClock;
    }
    if (
        combined.includes('mensageria') ||
        combined.includes('rabbitmq') ||
        combined.includes('fila')
    ) {
        return FaEnvelopeOpenText;
    }
    if (combined.includes('meet') || combined.includes('video')) {
        return FaVideo;
    }
    if (combined.includes('algoritmo') || combined.includes('base62') || combined.includes('c++')) {
        return FaTerminal;
    }
    if (
        combined.includes('spring') ||
        combined.includes('java') ||
        combined.includes('frontend') ||
        combined.includes('backend') ||
        combined.includes('linguagem') ||
        combined.includes('arquitetura') ||
        combined.includes('clean architecture')
    ) {
        return FaCode;
    }
    return FaChartSimple;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps): ReactElement | null {
    const { t, i18n } = useTranslation();
    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    useEffect(() => {
        if (!project) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (project.details?.screenshots && project.details.screenshots.length > 1) {
                if (e.key === 'ArrowLeft') {
                    setCurrentImageIdx(prev =>
                        prev === 0 ? project.details!.screenshots!.length - 1 : prev - 1,
                    );
                } else if (e.key === 'ArrowRight') {
                    setCurrentImageIdx(prev =>
                        prev === project.details!.screenshots!.length - 1 ? 0 : prev + 1,
                    );
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
    }, [project, onClose]);

    if (!project) return null;

    const screenshots = project.details?.screenshots || [];
    const hasScreenshots = screenshots.length > 0;
    const currentScreenshot = hasScreenshots ? screenshots[currentImageIdx] : null;

    const formatDate = (date: Date) =>
        date.toLocaleDateString(i18n.language === 'pt-BR' ? 'pt-BR' : 'en-US', {
            month: 'long',
            year: 'numeric',
        });

    const categoryLabel = t(`projects.category_labels.${project.category}`);
    const categoryIcon = getCategoryIcon(project.category);

    return (
        <div className='project-modal__backdrop' onClick={onClose}>
            <div
                className='project-modal project-modal__content'
                onClick={e => e.stopPropagation()}
                role='dialog'
                aria-modal='true'
            >
                {/* Close Button */}
                <button
                    className='project-modal__close'
                    onClick={onClose}
                    aria-label={t('projects.close_modal') || 'Fechar'}
                >
                    <FaXmark />
                </button>

                {/* Header */}
                <div className='project-modal__header'>
                    <div className='project-modal__meta'>
                        <span
                            className={`project-modal__category badge--${project.category.toLowerCase()}`}
                        >
                            <span className='project-modal__category-icon'>{categoryIcon}</span>
                            {categoryLabel}
                        </span>

                        <span className='project-modal__date'>
                            <FaCalendarDays />
                            {formatDate(project.date)}
                        </span>

                        <span className='project-modal__author'>@{project.developer.username}</span>
                    </div>

                    <h2 className='project-modal__title'>{project.title}</h2>
                </div>

                {/* Visual Media Showcase: Interactive Screenshots or Cover Banner */}
                {hasScreenshots && currentScreenshot ? (
                    <div className='project-modal__gallery'>
                        <div className='project-modal__viewer'>
                            <img
                                src={currentScreenshot.url}
                                alt={currentScreenshot.caption || project.title}
                                className='project-modal__main-image'
                            />

                            {screenshots.length > 1 && (
                                <>
                                    <button
                                        className='project-modal__nav project-modal__nav--prev'
                                        onClick={() =>
                                            setCurrentImageIdx(prev =>
                                                prev === 0 ? screenshots.length - 1 : prev - 1,
                                            )
                                        }
                                        aria-label='Imagem anterior'
                                    >
                                        <FaChevronLeft />
                                    </button>
                                    <button
                                        className='project-modal__nav project-modal__nav--next'
                                        onClick={() =>
                                            setCurrentImageIdx(prev =>
                                                prev === screenshots.length - 1 ? 0 : prev + 1,
                                            )
                                        }
                                        aria-label='Próxima imagem'
                                    >
                                        <FaChevronRight />
                                    </button>
                                </>
                            )}

                            {currentScreenshot.caption && (
                                <div className='project-modal__caption'>
                                    <span>{currentScreenshot.caption}</span>
                                    <span className='project-modal__counter'>
                                        {currentImageIdx + 1} / {screenshots.length}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Thumbnails */}
                        {screenshots.length > 1 && (
                            <div className='project-modal__thumbnails'>
                                {screenshots.map((s, i) => (
                                    <button
                                        key={i}
                                        className={`project-modal__thumb ${i === currentImageIdx ? 'is-active' : ''}`}
                                        onClick={() => setCurrentImageIdx(i)}
                                    >
                                        <img src={s.url} alt={`Thumbnail ${i + 1}`} />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ) : project.image?.url ? (
                    <div className='project-modal__cover'>
                        <img
                            src={project.image.url}
                            alt={project.title}
                            className='project-modal__cover-img'
                        />
                        <div className='project-modal__cover-overlay' />
                    </div>
                ) : null}

                {/* Metrics / Technical Highlights */}
                {project.details?.metrics && project.details.metrics.length > 0 && (
                    <div className='project-modal__metrics'>
                        {project.details.metrics.map((m, i) => {
                            const MetricIcon = getMetricIcon(m.label, m.value);
                            return (
                                <div key={i} className='project-modal__metric-card metric-box'>
                                    <div className='project-modal__metric-top'>
                                        <span className='project-modal__metric-icon'>
                                            <MetricIcon />
                                        </span>
                                        <span className='project-modal__metric-label metric-box__label'>
                                            {m.label}
                                        </span>
                                    </div>
                                    <span className='project-modal__metric-value metric-box__value'>
                                        {m.value}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Body Details */}
                <div className='project-modal__body'>
                    {/* Overview */}
                    <div className='project-modal__section'>
                        <div className='project-modal__section-header'>
                            <span className='project-modal__section-icon'>
                                <FaCircleInfo />
                            </span>
                            <h3 className='project-modal__section-title section-heading'>
                                {t('projects.modal.overview')}
                            </h3>
                        </div>
                        <p className='project-modal__text'>
                            {project.details?.overview || project.description}
                        </p>
                    </div>

                    {/* Features */}
                    {project.details?.features && project.details.features.length > 0 && (
                        <div className='project-modal__section'>
                            <div className='project-modal__section-header'>
                                <span className='project-modal__section-icon'>
                                    <FaListCheck />
                                </span>
                                <h3 className='project-modal__section-title section-heading'>
                                    {t('projects.modal.features')}
                                </h3>
                            </div>
                            <ul className='project-modal__features'>
                                {project.details.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className='project-modal__feature-item feature-item'
                                    >
                                        <span className='project-modal__feature-icon feature-item__icon'>
                                            <FaCheck />
                                        </span>
                                        <span className='project-modal__feature-text feature-item__text'>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Technologies */}
                    {project.technologies && project.technologies.length > 0 && (
                        <div className='project-modal__section'>
                            <div className='project-modal__section-header'>
                                <span className='project-modal__section-icon'>
                                    <FaLayerGroup />
                                </span>
                                <h3 className='project-modal__section-title section-heading'>
                                    {t('projects.modal.technologies')}
                                </h3>
                            </div>
                            <div className='project-modal__techs'>
                                {project.technologies.map((tech, i) => (
                                    <div
                                        key={i}
                                        className='project-modal__tech-badge tech-badge'
                                        title={tech.name}
                                    >
                                        <div className='project-modal__tech-icon-box'>
                                            <img
                                                src={tech.url}
                                                alt={tech.name}
                                                className='project-modal__tech-icon tech-badge__icon'
                                            />
                                        </div>
                                        <span className='project-modal__tech-name tech-badge__name'>
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Modal Footer */}
                <div className='project-modal__footer'>
                    {project.url && (
                        <a
                            href={project.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='project-modal__btn project-modal__btn--primary'
                        >
                            <FaArrowUpRightFromSquare />
                            <span>{t('projects.modal.view_project')}</span>
                        </a>
                    )}
                    <button
                        type='button'
                        className='project-modal__btn project-modal__btn--ghost'
                        onClick={onClose}
                    >
                        {t('projects.modal.close')}
                    </button>
                </div>
            </div>
        </div>
    );
}
