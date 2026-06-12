import type { ReactElement } from 'react';
import { FaGithub, FaLinkedin, FaArrowRight, FaFilePdf } from 'react-icons/fa6';
import { useTranslation, Trans } from 'react-i18next';
import { developer } from '@/data/developer';
import Reveal from '@/components/util/Reveal';

export default function Index(): ReactElement {
    const { name, username, sociakMedia } = developer;
    const { t } = useTranslation();

    return (
        <section data-section className='section main__apresentation' id='apresentation'>
            <div className='apresentation__section'>
                {/* ── Left — Text Content ─────────────────────────────────── */}
                <div className='section__my-apresentation'>
                    <Reveal delay={0.3}>
                        <div className='hero__greeting'>{t('apresentation.greeting')}</div>
                        <h1 className='my-apresentation__name'>{name}</h1>
                    </Reveal>

                    <Reveal delay={0.45}>
                        <p className='my-apresentation__role'>
                            Full Stack Developer
                            <span className='role__separator'> · </span>
                            <span className='role__accent'>{t('apresentation.role')}</span>
                        </p>
                    </Reveal>

                    <Reveal delay={0.6}>
                        <p className='my-apresentation__about'>
                            <Trans i18nKey='apresentation.about_html'>
                                Desenvolvedor Full Stack com foco em construir aplicações robustas e
                                escaláveis — do backend com <strong>Java / Spring Boot</strong> ao
                                frontend com <strong>React & TypeScript</strong>. Apaixonado por
                                boas práticas, arquitetura limpa e soluções que fazem diferença.
                            </Trans>
                        </p>
                    </Reveal>

                    <Reveal delay={0.75}>
                        <div className='hero__cta-row'>
                            <a href='#projects' className='cta-btn cta-btn--primary'>
                                {t('apresentation.see_projects')}{' '}
                                <FaArrowRight className='btn-icon' />
                            </a>
                            <a
                                href={sociakMedia?.linkedin}
                                target='_blank'
                                rel='noreferrer'
                                className='cta-btn cta-btn--secondary'
                            >
                                <FaLinkedin className='btn-icon-left' /> LinkedIn
                            </a>
                            <a
                                href='/resume.pdf'
                                download='RafaelSoares_Resume.pdf'
                                className='cta-btn cta-btn--secondary'
                            >
                                <FaFilePdf className='btn-icon-left' /> {t('apresentation.download_cv')}
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
                        </div>
                    </Reveal>
                </div>

                {/* ── Right — Terminal window ─────────────────────────────── */}
                <Reveal delay={0.5}>
                    <div className='hero__terminal'>
                        <div className='terminal__topbar'>
                            <div className='terminal__dots'>
                                <span className='dot dot--red' />
                                <span className='dot dot--yellow' />
                                <span className='dot dot--green' />
                            </div>
                            <span className='terminal__title'>portfolio.sh</span>
                        </div>
                        <div className='terminal__body'>
                            <p className='t-line'>
                                <span className='t-prompt'>~</span>
                                <span className='t-cmd'> whoami</span>
                            </p>
                            <p className='t-output t-name'>{name}</p>

                            <p className='t-line t-gap'>
                                <span className='t-prompt'>~</span>
                                <span className='t-cmd'> cat role.txt</span>
                            </p>
                            <p className='t-output'>Full Stack Developer</p>

                            <p className='t-line t-gap'>
                                <span className='t-prompt'>~</span>
                                <span className='t-cmd'> skills --top</span>
                            </p>
                            <p className='t-output'>
                                <span className='t-tag'>Java</span>
                                <span className='t-tag'>Spring Boot</span>
                                <span className='t-tag'>TypeScript</span>
                            </p>
                            <p className='t-output'>
                                <span className='t-tag'>React</span>
                                <span className='t-tag'>Node.js</span>
                                <span className='t-tag'>Docker</span>
                            </p>
                            <p className='t-output'>
                                <span className='t-tag'>PostgreSQL</span>
                                <span className='t-tag'>Redis</span>
                            </p>

                            <p className='t-line t-gap'>
                                <span className='t-prompt'>~</span>
                                <span className='t-cmd'> status</span>
                            </p>
                            <p className='t-output t-status'>
                                <span className='t-dot-green' />
                                {t('apresentation.open_to_work')}
                            </p>

                            <p className='t-line t-gap t-cursor-line'>
                                <span className='t-prompt'>~</span>
                                <span className='t-cursor'>▋</span>
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className='scroll-indicator' aria-hidden='true'>
                <div className='scroll-indicator__line' />
                <span>scroll</span>
            </div>
        </section>
    );
}
