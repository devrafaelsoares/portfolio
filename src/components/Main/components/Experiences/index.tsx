import { ReactElement } from 'react';
import Reveal from '../../../util/Reveal';
import Timeline from '../../../Timeline';
import '../../../../assets/styles/components/_timeline.scss';
export default function Index(): ReactElement {
    return (
        <section data-section className="section main__experiences" id="experiences">
            <Reveal delay={0.8}>
                <div className="section__content">
                    <h1 className="section-title experiences__title">Experiências</h1>
                </div>
            </Reveal>
            <Timeline />
        </section>
    );
}
