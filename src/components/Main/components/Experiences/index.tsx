import type { ReactElement } from 'react';
import Reveal from '@/components/util/Reveal';
import Timeline from '@/components/Timeline';
import { useTranslation } from 'react-i18next';
import '@/assets/styles/components/_timeline.scss';

export default function Index(): ReactElement {
    const { t } = useTranslation();
    return (
        <section data-section className='section main__experiences' id='experiences'>
            <Reveal delay={0.8}>
                <div className='section__content'>
                    <h1 className='section-title experiences__title'>{t('experiences.title')}</h1>
                </div>
            </Reveal>
            <Timeline />
        </section>
    );
}
