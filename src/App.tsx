import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './assets/styles/components/_app.scss';
import { useState } from 'react';
import { MenuResponsiveContext } from './contexts/MenuContext';

export default function App() {
    const [isActiveMenu, setIsMenuActive] = useState(false);
    return (
        <div className="container">
            <MenuResponsiveContext.Provider value={{ isActiveMenu, setIsMenuActive }}>
                <Header />
            </MenuResponsiveContext.Provider>
            <Main />
            <Footer />
        </div>
    );
}
