import { ReactNode, createContext, useState } from 'react';

type MenuResposiveProviverProps = {
    children: ReactNode;
};

type MenuResponsiveContextProps = {
    isActiveMenu: boolean;
    setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuResponsiveContext = createContext<MenuResponsiveContextProps>({} as MenuResponsiveContextProps);

export default function MenuResposiveProvider({ children }: MenuResposiveProviverProps) {
    const [isActiveMenu, setIsMenuActive] = useState(false);

    return (
        <MenuResponsiveContext.Provider value={{ isActiveMenu, setIsMenuActive }}>
            {children}
        </MenuResponsiveContext.Provider>
    );
}
