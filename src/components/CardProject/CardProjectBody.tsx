import { ReactNode } from 'react';

interface CardProjectBodyProps {
    children: ReactNode;
}

export default function Index({ children }: CardProjectBodyProps) {
    return <div className="data">{children}</div>;
}
