import { CgMenuRight, CgClose } from 'react-icons/cg';
import { useContext } from 'react';
import { MenuResponsiveContext } from '../../contexts/MenuContext';
import classnames from 'classnames';
import Navigation from './components/Navigation';
import Logo from '../icons/Logo';
import '../../assets/styles/components/_header.scss';

export default function Index() {
    const { isActiveMenu, setIsMenuActive } = useContext(MenuResponsiveContext);

    return (
        <header className={classnames('container__header', [{ 'active-menu-responsive': isActiveMenu }])}>
            <div className="header__content">
                <div className="content__logo-container" title="devrafaelsoares">
                    <Logo className=" logo-container__icon" />
                    <h2 className="logo-container__text">devrafaelsoares</h2>
                </div>
                <Navigation />
                <div className="content__resposive-nav">
                    <button
                        className="menu__button"
                        onClick={() => setIsMenuActive(!isActiveMenu)}
                        title={isActiveMenu ? 'Fechar o menu' : 'Abrir o menu'}
                    >
                        {isActiveMenu ? <CgClose className="icon" /> : <CgMenuRight className="icon" />}
                    </button>
                </div>
            </div>
        </header>
    );
}
