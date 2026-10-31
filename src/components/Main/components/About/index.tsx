import type { ReactElement } from 'react';
import { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import Reveal from '@/components/util/Reveal';

export default function Index(): ReactElement {
    const { t } = useTranslation();
    const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
    const bio = t('about.bio');

    const copyBio = async () => {
        try {
            await navigator.clipboard.writeText(bio);
            setCopyState('copied');
        } catch {
            setCopyState('failed');
        }
        setTimeout(() => setCopyState('idle'), 2500);
    };

    return (
        <section data-section className='section main__about-me' id='about'>
            <Reveal delay={0.2}>
                <div className='section__content'>
                    <h1 className='section-title'>{t('about.title')}</h1>
                </div>
            </Reveal>
            <Reveal delay={0.3}>
                <div className='about-me__content'>
                    <p className='about-me__bio'>{bio}</p>
                    <button type='button' className='about-me__copy' onClick={copyBio}>
                        {copyState === 'copied' ? <FaCheck /> : <FaCopy />}
                        <span aria-live='polite'>{t(`about.copy_${copyState}`)}</span>
                    </button>
                </div>
            </Reveal>
        </section>
    );
}
