import type { ReactElement } from 'react';
import { FaGithub, FaLinkedin, FaArrowRight, FaFilePdf, FaEnvelope } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { developer } from '@/data/developer';
import Reveal from '@/components/util/Reveal';
import FeaturedProjects from '../FeaturedProjects';

export default function Index(): ReactElement {
    const { name, username, email, sociakMedia } = developer;
    const { t } = useTranslation();

    return (
        <section data-section className='section main__apresentation' id='apresentation'>
            <div className='apresentation__section'>
                {/* ── Left — Text Content ─────────────────────────────────── */}
                <div className='section__my-apresentation'>
                    <Reveal delay={0.3}>
                        <h1 className='my-apresentation__name'>{name}</h1>
                    </Reveal>

                    <Reveal delay={0.45}>
                        <p className='my-apresentation__role'>{t('apresentation.role_title')}</p>
                    </Reveal>

                    <Reveal delay={0.6}>
                        <p className='my-apresentation__about'>{t('apresentation.role')}</p>
                    </Reveal>

                    <Reveal delay={0.75}>
                        <div className='hero__cta-row'>
                            <a href='#projects' className='cta-btn cta-btn--primary'>
                                {t('apresentation.see_projects')}{' '}
                                <FaArrowRight className='btn-icon' />
                            </a>
                            <a
                                href='/resume.pdf'
                                download='Curriculo-Rafael-Henrique-Soares-de-Freitas.pdf'
                                className='cta-btn cta-btn--secondary'
                            >
                                <FaFilePdf className='btn-icon-left' />{' '}
                                {t('apresentation.download_cv')}
                            </a>
                            <a
                                href={sociakMedia?.linkedin}
                                target='_blank'
                                rel='noreferrer'
                                className='cta-btn cta-btn--secondary'
                            >
                                <FaLinkedin className='btn-icon-left' /> LinkedIn
                            </a>
                        </div>
                    </Reveal>

                    <Reveal delay={0.9}>
                        <div className='hero__social-row'>
                            <a
                                href={sociakMedia?.github}
                                target='_blank'
                                rel='noreferrer'
                                title={`@${username}`}
                                className='social-link'
                            >
                                <FaGithub />
                                <span>@{username}</span>
                            </a>
                            <a href={`mailto:${email}`} className='social-link'>
                                <FaEnvelope />
                                <span>{email}</span>
                            </a>
                        </div>
                    </Reveal>
                </div>

                {/* ── Right — Featured projects ──────────────────────────── */}
                <Reveal delay={0.5}>
                    <FeaturedProjects />
                </Reveal>
            </div>
        </section>
    );
}
