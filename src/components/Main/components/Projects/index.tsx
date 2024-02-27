import { ReactElement, useState } from 'react';
import Reveal from '@/components/util/Reveal';
import { CardProject } from '@/components/CardProject';
import { projects } from '@/data/projects';

export default function Index(): ReactElement {
    const [expanded, setExpanded] = useState(false);
    const projectsForDisplay = expanded ? projects : projects.slice(0, 3);

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
                        {projectsForDisplay.map(
                            ({ developer, date, image, title, url, description, technologies }, index) => {
                                const delay = (index + 12) / 10;
                                return (
                                    <Reveal delay={delay}>
                                        <CardProject.Root
                                            tabIndex={0}
                                            key={index}
                                            className="card__wrapper"
                                            banner={image}
                                        >
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
                            }
                        )}
                        {projects.length > 3 && (
                            <Reveal delay={1.3}>
                                <button onClick={() => setExpanded(!expanded)} className="more-projects-button">
                                    {expanded ? 'Menos' : 'Mais'} projetos
                                </button>
                            </Reveal>
                        )}
                    </section>
                </Reveal>
            </div>
        </section>
    );
}
