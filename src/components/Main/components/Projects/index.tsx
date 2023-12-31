import { ReactElement } from 'react';
import Reveal from '../../../util/Reveal';
import { CardProject } from '../../../CardProject';
import { projects } from '../../../../data/projects';

export default function Index(): ReactElement {
    return (
        <section data-section className="section main__projects" id="projects">
            <Reveal delay={0.8}>
                <div className="section__content">
                    <h1 className="section-title projects__title">Projetos</h1>
                </div>
            </Reveal>
            <div className="section__projects">
                <Reveal delay={0.9}>
                    <section className="project card">
                        {projects.map(({ developer, date, image, title, url, description, technologies }, index) => {
                            const delay = (index + 12) / 10;
                            return (
                                <Reveal delay={delay}>
                                    <CardProject.Root tabIndex={0} key={index} className="card__wrapper" banner={image}>
                                        <CardProject.Date date={date} />
                                        <CardProject.Body>
                                            <div className="content">
                                                <span className="author">{developer.username}</span>
                                                <h1 className="title">
                                                    <a href={url} target="_blank">
                                                        {title}
                                                    </a>
                                                </h1>
                                                <p className="text">{description}</p>
                                                <div className="skills">
                                                    {technologies?.map((technologie, index) => (
                                                        <img
                                                            key={index}
                                                            className="skills__skill"
                                                            src={technologie.url}
                                                        ></img>
                                                    ))}
                                                </div>
                                                <a href={url} target="_blank" className="button">
                                                    Ver mais
                                                </a>
                                            </div>
                                        </CardProject.Body>
                                    </CardProject.Root>
                                </Reveal>
                            );
                        })}
                    </section>
                </Reveal>
            </div>
        </section>
    );
}
