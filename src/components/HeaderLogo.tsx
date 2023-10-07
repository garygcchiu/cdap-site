'use client';
import Link from 'next/link';
import NextImage from '@/components/ui/NextImage';
import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';

export const HeaderLogo = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    return (
        <>
            <div
                ref={ref}
                style={{ height: '1px', width: '100%', position: 'relative', top: '80vh' }}
            />
            <div
                className={clsx(
                    'visible transform fixed mt-[10vh] w-12 h-12 left-[8%] mix-blend-difference z-[99] transition-all duration-500',
                    inView ? 'mt-[10vh] opacity-100' : 'mt-0 opacity-0'
                )}
            >
                <Link href="/">
                    <NextImage src="/logo1.svg" alt="Logo" width={75} height={50} />
                </Link>
            </div>
        </>
    );
};
