'use client';

import Link from 'next/link';
import { BurgerMenu } from '@/components/ui/BurgerMenu';
import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';

const menuItems = [
    { title: 'About', link: '#about' },
    { title: 'Focus', link: '#focus' },
    { title: 'Testimonials', link: '#testimonials' },
    { title: 'Contact', link: '#contact' },
];

export const Menu = () => {
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
                    'visible transform flex items-center justify-center fixed  w-12 h-12 right-[8%] mix-blend-difference z-50 text-white transition-all duration-500',
                    inView ? 'mt-[10vh] opacity-100' : 'mt-0 opacity-0'
                )}
            >
                <BurgerMenu>
                    {menuItems.map((item, index) => (
                        <BurgerMenu.Item key={index} style={{ animationDelay: `${index * 100}ms` }}>
                            <span className={'mr-4 text-gray-300'}>{'0' + (index + 1)}.</span>
                            <Link href={item.link} className={'text-gray-300 text-3xl uppercase'}>
                                {item.title}
                            </Link>
                        </BurgerMenu.Item>
                    ))}
                </BurgerMenu>
            </div>
        </>
    );
};
