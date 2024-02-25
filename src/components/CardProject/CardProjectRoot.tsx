import { HTMLAttributes, ReactNode } from 'react';
import { Image } from '@/types/image';

interface CardProjectRootProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    banner?: Image;
}

export default function Index({ children, banner, ...rest }: CardProjectRootProps) {
    const backgroudImageUrl = `url(${banner?.url})`;
    return (
        <div className="card__wrapper" {...rest} style={{ backgroundImage: backgroudImageUrl }}>
            {children}
        </div>
    );
}
