import type { ReactElement } from 'react';
import Reveal from '@/components/util/Reveal';
import { useTranslation } from 'react-i18next';
import {
    TYPESCRIPT,
    JAVA,
    PYTHON,
    REACT,
    SPRINGBOOT,
    NODEJS,
    POSTGRESQL,
    DOCKER,
    LANGCHAIN,
    RABBITMQ,
    NEXTJS,
    QUARKUS,
    MEILISEARCH,
    FASTAPI,
    QDRANT,
} from '@/data/technologies';

type Tech = { name: string; url: string; slug: string };
type Category = { labelKey: string; techs: Tech[] };

const categories: Category[] = [
    { labelKey: 'skills.categories.backend', techs: [NODEJS, FASTAPI, QUARKUS, SPRINGBOOT] },
    { labelKey: 'skills.categories.ai', techs: [LANGCHAIN] },
    { labelKey: 'skills.categories.database', techs: [POSTGRESQL, QDRANT, MEILISEARCH, RABBITMQ] },
    { labelKey: 'skills.categories.languages', techs: [TYPESCRIPT, PYTHON, JAVA] },
    { labelKey: 'skills.categories.frontend', techs: [REACT, NEXTJS] },
    { labelKey: 'skills.categories.infrastructure', techs: [DOCKER] },
];

export default function Index(): ReactElement {
    const { t } = useTranslation();
    return (
        <section data-section className='section main__skills' id='skills'>
            <Reveal delay={0.2}>
                <div className='section__content'>
                    <h1 className='section-title'>{t('skills.title')}</h1>
                </div>
            </Reveal>

            <Reveal delay={0.3}>
                <dl className='skills__list'>
                    {categories.map(({ labelKey, techs }) => (
                        <div key={labelKey} className='skills__row'>
                            <dt className='skills__label'>{t(labelKey)}</dt>
                            <dd className='skills__techs'>
                                {techs.map(({ name, url, slug }) => (
                                    <span key={slug} className='skills__tech'>
                                        <img src={url} alt='' className='skills__icon' />
                                        {name}
                                    </span>
                                ))}
                            </dd>
                        </div>
                    ))}
                </dl>
            </Reveal>
        </section>
    );
}
