import { CgMenuRight, CgClose } from 'react-icons/cg';
import { useContext, useEffect, useState } from 'react';
import { MenuResponsiveContext } from '@/contexts/MenuContext';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import Navigation from './components/Navigation';
import Logo from '@/components/icons/Logo';
import '@/assets/styles/components/_header.scss';

export default function Index() {
    const { isActiveMenu, setIsMenuActive } = useContext(MenuResponsiveContext);
    const [scrolled, setScrolled] = useState(false);
    const { i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language.startsWith('pt') ? 'en-US' : 'pt-BR';
        i18n.changeLanguage(newLang);
    };

    return (
        <header
            className={classnames('container__header', {
                'active-menu-responsive': isActiveMenu,
                scrolled,
            })}
        >
            <div className='header__content'>
                <div className='content__logo-container' title='devrafaelsoares'>
                    <Logo className='logo-container__icon' />
                    <h2 className='logo-container__text'>
                        <span>dev</span>rafaelsoares
                    </h2>
                </div>
                <Navigation />
                <button
                    onClick={toggleLanguage}
                    style={{
                        background: 'transparent',
                        border: '1px solid #6366f1',
                        color: '#a5b4fc',
                        borderRadius: '4px',
                        padding: '4px 10px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        marginLeft: 'auto',
                        marginRight: '16px',
                        fontSize: '0.8rem',
                        letterSpacing: '0.05em',
                    }}
                    title='Mudar Idioma / Change Language'
                >
                    {i18n.language.startsWith('pt') ? 'EN' : 'PT'}
                </button>
                <div className='content__resposive-nav'>
                    <button
                        className='menu__button'
                        onClick={() => setIsMenuActive(!isActiveMenu)}
                        title={isActiveMenu ? 'Fechar o menu' : 'Abrir o menu'}
                    >
                        {isActiveMenu ? (
                            <CgClose className='icon' />
                        ) : (
                            <CgMenuRight className='icon' />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
