import { technologyEvents } from '@/data/events';
import { MdEvent, MdWork } from 'react-icons/md';
import Reveal from '@/components/util/Reveal';
import { useTranslation } from 'react-i18next';

export default function Index() {
    const { t } = useTranslation();
    return (
        <section className='timeline'>
            <ul className='timeline__content'>
                {technologyEvents.map(({ id }, index) => {
                    const delay = (index + 10) / 10;
                    const key = `experiences.items.${id}`;
                    const highlights = t(`${key}.highlights`, { returnObjects: true }) as string[];

                    return (
                        <Reveal key={id} delay={delay}>
                            <li className='event'>
                                <div className='event__title-container'>
                                    <MdWork className='title-container__icon' />
                                    <h2 className='event__title'>{t(`${key}.company`)}</h2>
                                </div>
                                <div className='event__year-container'>
                                    <MdEvent className='year-container__icon' />
                                    <h3 className='year-container__year'>{t(`${key}.period`)}</h3>
                                </div>
                                <p className='event__about'>{t(`${key}.role`)}</p>
                                <ul className='event__highlights'>
                                    {highlights.map(highlight => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                </ul>
                            </li>
                        </Reveal>
                    );
                })}
            </ul>
        </section>
    );
}
// EOF
