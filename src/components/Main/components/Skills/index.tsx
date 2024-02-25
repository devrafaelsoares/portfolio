import { ReactElement } from 'react';
import Reveal from '@/components/util/Reveal';
import { SkillsCard } from '@/components/SkillCard';
import { skills } from '@/data/skills';

export default function Index(): ReactElement {
    return (
        <section data-section className="section main__skills" id="skills">
            <Reveal delay={0.8}>
                <div className="section__content">
                    <h1 className="section-title skills__title">Habilidades</h1>
                </div>
            </Reveal>
            <div className="content__skills">
                {skills.map(({ technologie: { name, slug, url }, compotences }, index) => {
                    const accountCompetence = compotences ? compotences.length : 0;
                    const delay = (index + 5) / 10;
                    const skillCardHeaderId = `skill-${slug}`;
                    const description = accountCompetence ? `${accountCompetence} competências` : '';

                    return (
                        <Reveal key={index} delay={delay}>
                            <SkillsCard.Root tabIndex={0} key={index}>
                                <SkillsCard.Header id={skillCardHeaderId}>
                                    <img className="skill-card__icon" src={url} alt={slug} />
                                </SkillsCard.Header>
                                <SkillsCard.Body>
                                    <SkillsCard.Title title={name} />
                                    <SkillsCard.Description description={description} />
                                    <SkillsCard.Skills>
                                        <ul className="skill-card__knowledge">
                                            {compotences?.map((compotence, index) => (
                                                <li key={index}>{compotence}</li>
                                            ))}
                                        </ul>
                                    </SkillsCard.Skills>
                                </SkillsCard.Body>
                            </SkillsCard.Root>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
