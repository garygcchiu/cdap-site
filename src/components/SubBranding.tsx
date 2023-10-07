'use client';
import { clsx } from 'clsx';
import { useInView } from 'react-intersection-observer';
import { ptSans } from '@/app/fonts';

export const SubBranding = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    return (
        <>
            <div
                ref={ref}
                style={{ height: '1px', width: '100%', position: 'relative', top: '20vh' }}
            />
            <div
                className={clsx(
                    'text-sm text-white fixed left-[9%] z-10 transition-all duration-500 font-bold',
                    inView ? 'top-[84vh] opacity-100' : 'top-[100vh] opacity-0',
                    ptSans.className
                )}
            >
                BRAND ™
            </div>
        </>
    );
};
