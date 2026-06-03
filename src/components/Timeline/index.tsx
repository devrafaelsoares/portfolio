import { technologyEvents } from '@/data/events';
import { MdEmojiEvents, MdEvent, MdScience } from 'react-icons/md';
import Reveal from '@/components/util/Reveal';
import { useTranslation } from 'react-i18next';

export default function Index() {
    const { t } = useTranslation();
    return (
        <section className="timeline">
            <ul className="timeline__content">
                {technologyEvents.map(({ year, title, about, technologies }, index) => {
                    const delay = (index + 10) / 10;

                    return (
                        <Reveal key={index} delay={delay}>
                            <li key={index} className="event" data-date={year}>
                                <div className="event__title-container">
                                    <MdEmojiEvents className="title-container__icon" />
                                    <h2 className="event__title">{title}</h2>
                                </div>
                                <div className="event__year-container">
                                    <MdEvent className="year-container__icon" />
                                    <h3 className="year-container__year">{year}</h3>
                                </div>
                                <p className="event__about">{about}</p>
                                {technologies && (
                                    <div className="event__skills-info-container">
                                        <MdScience className="skills-info-container__icon" />
                                        <p className="skills-info-container__year">{t('experiences.technologies')}</p>
                                    </div>
                                )}
                                <div className="event__skills-container">
                                    {technologies?.map(({ name, url }, index) => (
                                        <img className="skill" key={index} src={url} alt={name} />
                                    ))}
                                </div>
                            </li>
                        </Reveal>
                    );
                })}
            </ul>
        </section>
    );
}
