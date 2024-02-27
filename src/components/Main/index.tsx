import { ReactElement } from 'react';
import Apresentation from './components/Apresentation';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import '@/assets/styles/components/main/_index.scss';
import ScrollToTop from '@/components/ScroolTop';
import { FaArrowAltCircleUp } from 'react-icons/fa';

export default function Index(): ReactElement {
    return (
        <main className="container__main">
            <Apresentation />
            <Skills />
            <Experiences />
            <Projects />
            <ScrollToTop component={<FaArrowAltCircleUp />} smooth />
        </main>
    );
}
