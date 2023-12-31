import { Variants, motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    delay?: number;
    duration?: number;
};

const variants: Variants = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
};

export default function Index({ children, delay = 0.25, duration = 0.5 }: Props) {
    return (
        <motion.div
            className="reveal-component"
            variants={variants}
            initial="hidden"
            transition={{ duration, delay }}
            whileInView="visible"
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
}
