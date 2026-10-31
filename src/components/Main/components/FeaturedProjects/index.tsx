import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

const featuredProjects = ['logistics', 'telemedicine', 'sofia'];

export default function Index(): ReactElement {
    const { t } = useTranslation();
    return (
        <div className='featured'>
            <h2 className='featured__title'>{t('featured.title')}</h2>
            <ul className='featured__list'>
                {featuredProjects.map(id => (
                    <li key={id} className='featured__item'>
                        <p className='featured__metric'>
                            <strong>{t(`featured.items.${id}.value`)}</strong>{' '}
                            {t(`featured.items.${id}.unit`)}
                        </p>
                        <h3 className='featured__name'>{t(`featured.items.${id}.name`)}</h3>
                        <p className='featured__context'>{t(`featured.items.${id}.context`)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
