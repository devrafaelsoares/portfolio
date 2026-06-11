import { useContext, useEffect } from 'react';
import { MenuResponsiveContext } from '../../../../contexts/MenuContext';
import { navData } from '../../../../data/nav';
import { Link } from 'react-scroll';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

export default function Index() {
    const { isActiveMenu, setIsMenuActive } = useContext(MenuResponsiveContext);
    const { t } = useTranslation();

    useEffect(() => {
        if (isActiveMenu) document.body.classList.add('active-menu-responsive');
        else document.body.classList.remove('active-menu-responsive');
    }, [isActiveMenu]);

    return (
        <nav className={classnames('content__nav', [{ 'active-menu-responsive': isActiveMenu }])}>
            <ul className='nav__links'>
                {navData.map(({ url, name }, index) => (
                    <li key={index} className='links__link'>
                        <Link
                            to={url}
                            tabIndex={1}
                            activeClass='active'
                            onClick={() => setIsMenuActive(false)}
                            smooth
                            spy
                        >
                            {t(`nav.${name.toLowerCase()}`)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
