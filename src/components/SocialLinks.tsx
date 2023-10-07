'use client';
import { clsx } from 'clsx';
import { useInView } from 'react-intersection-observer';
import { ptSans } from '@/app/fonts';

export const SocialLinks = () => {
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
                    'fixed transition-all duration-500 text-white z-10 right-[7%]',
                    inView ? 'top-[83.5vh] opacity-100' : 'top-[100vh] opacity-0'
                )}
            >
                <ul className={'list-none mb-1'}>
                    <li className={`ml-14 text-lg xl:text-2xl font-bold ${ptSans.className}`}>
                        <a href={'google.com'}>👉 CONTACT US</a>
                    </li>
                </ul>
            </div>
        </>
    );
};
