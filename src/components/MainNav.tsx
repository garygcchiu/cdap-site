'use client';
import Link from 'next/link';
import { BurgerMenuClient } from '@/components/ui/BurgerMenu.client';
import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { InViewAnchor } from '@/components/ui/InViewAnchor';

interface MainNavProps {
    items: NavItemProps[];
}

interface NavItemProps {
    title: string;
    href: string;
}

const NavItem = ({ title, href }: NavItemProps) => {
    return (
        <div className={'self-center group relative'}>
            <Link href={href} title={title} className={'py-2'}>
                {title}
                <span className="absolute right-0 bottom-[-4px] h-[1px] w-0 bg-black transition-all duration-200 group-hover:w-full group-hover:right-auto group-hover:left-0" />
            </Link>
        </div>
    );
};

export const MainNav = ({ items }: MainNavProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        const handleScroll = () => {
            if (
                (window.innerWidth < 768 && window.scrollY > 100) ||
                (window.innerWidth >= 768 && window.scrollY > 125)
            ) {
                // adjust this value as needed
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={'fixed top-0 left-0 right-0 z-10'}>
            <nav className={'container flex justify-between py-8 w-full z-10'}>
                <div
                    className={clsx(
                        'text-3xl font-extrabold transition-[transform,opacity] duration-500',
                        isScrolled
                            ? '-translate-y-4 opacity-0'
                            : inView
                            ? 'translate-y-0 opacity-100'
                            : '-translate-y-4 opacity-0'
                    )}
                >
                    BRANDING
                </div>
                {/* Desktop Navigation */}
                <div
                    className={clsx(
                        'hidden md:flex space-x-5',
                        'transition-[transform,opacity] duration-500',
                        inView ? 'translate-y-0  opacity-100' : '-translate-y-4  opacity-0'
                    )}
                >
                    {items.map((i, index) => (
                        <NavItem title={i.title} href={i.href} key={index} />
                    ))}
                </div>
                {/* Mobile Navigation */}
                <div className={'md:hidden self-center'}>
                    <BurgerMenuClient>
                        {items.map((i, index) => (
                            <BurgerMenuClient.Item
                                key={index}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <Link href={i.href} className="block py-2">
                                    {i.title}
                                </Link>
                            </BurgerMenuClient.Item>
                        ))}
                    </BurgerMenuClient>
                </div>
            </nav>
            <InViewAnchor ref={ref} />
        </header>
    );
};
