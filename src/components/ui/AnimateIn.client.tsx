'use client';

import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';
import { useInView } from 'react-intersection-observer';
import { ANIMATION_MAPPING, AnimationType } from '@/lib/types';

interface AnimateInProps {
    children: ReactNode;
    animationType: AnimationType;
    delay?: string;
    triggerOnce?: boolean;
}

export const AnimateIn: FC<AnimateInProps> = ({
    children,
    animationType,
    delay = '0ms',
    triggerOnce = true,
}) => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce,
    });

    const animation = ANIMATION_MAPPING[animationType];

    return (
        <div
            ref={ref}
            className={clsx(
                'transition-[transform,opacity] duration-500',
                inView ? animation.finalClass : animation.initialClass
            )}
            style={{ transitionDelay: inView ? delay : '0ms' }}
        >
            {children}
        </div>
    );
};
