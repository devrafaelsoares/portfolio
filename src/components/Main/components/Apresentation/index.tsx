import { ReactElement } from 'react';
import { FaGithub, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';
import { PiGraduationCapFill, PiPersonArmsSpreadFill } from 'react-icons/pi';
import { MdExpandLess } from 'react-icons/md';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { developer } from '../../../../data/developer';
import Reveal from '../../../util/Reveal';

export default function Index(): ReactElement {
    const [typeWriter] = useTypewriter({
        words: ['System Analyst & Software Developer'],
        loop: false,
    });
    const { name, username, aboutMe, gradutiation, sociakMedia } = developer;

    return (
        <section data-section className="section main__apresentation" id="apresentation">
            <div className="apresentation__section">
                <div className="section__my-apresentation">
                    <Reveal delay={0.8}>
                        <div className="heading-top-line"></div>
                        <Reveal delay={0.7}>
                            <h1 className="my-apresentation__name">{name}</h1>
                        </Reveal>
                        <Reveal delay={0.6}>
                            <h2 className="my-apresentation__specialization">
                                {typeWriter} <Cursor cursorStyle="|" />
                            </h2>
                        </Reveal>
                        <Reveal delay={0.5}>
                            <div className="my-apresentation__social-media-row">
                                <div className="social-media-row__container">
                                    <a
                                        href={sociakMedia?.github}
                                        target="_blank"
                                        title={username}
                                        className="container__icon"
                                    >
                                        <FaGithub className="icon" />
                                    </a>
                                    <a
                                        href={sociakMedia?.linkedin}
                                        target="_blank"
                                        title={name}
                                        className="container__icon"
                                    >
                                        <FaLinkedin className="icon" />
                                    </a>
                                    <a href={sociakMedia?.x} title={name} className="container__icon">
                                        <FaSquareXTwitter className="icon" />
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                        <section className="my-apresentation__extras">
                            <Reveal delay={1.1}>
                                <Accordion className="extras__accordion">
                                    <AccordionSummary className="accordion__summary" expandIcon={<MdExpandLess />}>
                                        <Typography className="summary__typography">
                                            <PiPersonArmsSpreadFill className="typography__icon" />
                                            Sobre mim
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="accordion__details">
                                        <Typography className="details__typography">{aboutMe}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Reveal>
                            <Reveal delay={1}>
                                <Accordion className="extras__accordion">
                                    <AccordionSummary className="accordion__summary" expandIcon={<MdExpandLess />}>
                                        <Typography className="summary__typography">
                                            <PiGraduationCapFill className="typography__icon" />
                                            Graduação
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="accordion__details">
                                        <Typography className="details__typography">{gradutiation}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Reveal>
                        </section>
                    </Reveal>
                </div>
                <div className="my-apresentation__photo">
                    <Reveal delay={0.8}>
                        <img className="my-photo" src="me.png" alt="Rafael Henrique" />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
